using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices;
using System.ServiceProcess;
using System.Text;
using System.Threading.Tasks;
using MessageLog;
using ClientOPCTRK;
using EFAZS.Concrete;
using EFAZS.Entities;
using System.Data.SqlClient;

namespace TRKServices
{
    public partial class TRKServices : ServiceBase
    {
        System.Timers.Timer timer_services = new System.Timers.Timer();

        public enum ServiceState
        {
            SERVICE_STOPPED = 0x00000001,
            SERVICE_START_PENDING = 0x00000002,
            SERVICE_STOP_PENDING = 0x00000003,
            SERVICE_RUNNING = 0x00000004,
            SERVICE_CONTINUE_PENDING = 0x00000005,
            SERVICE_PAUSE_PENDING = 0x00000006,
            SERVICE_PAUSED = 0x00000007,
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct ServiceStatus
        {
            public long dwServiceType;
            public ServiceState dwCurrentState;
            public long dwControlsAccepted;
            public long dwWin32ExitCode;
            public long dwServiceSpecificExitCode;
            public long dwCheckPoint;
            public long dwWaitHint;
        };

        [DllImport("advapi32.dll", SetLastError = true)]
        private static extern bool SetServiceStatus(IntPtr handle, ref ServiceStatus serviceStatus);

        public TRKServices()
        {
            InitializeComponent();
            //// Настроем таймер контроля выполнения сервиса
            timer_services.Interval = 1000;
            timer_services.Elapsed += new System.Timers.ElapsedEventHandler(this.OnTimerServices);
        }

        protected override void OnStart(string[] args)
        {
            // Update the service state to Start Pending.
            ServiceStatus serviceStatus = new ServiceStatus();
            serviceStatus.dwCurrentState = ServiceState.SERVICE_START_PENDING;
            serviceStatus.dwWaitHint = 100000;
            SetServiceStatus(this.ServiceHandle, ref serviceStatus);
            // Запустить таймер контроля сервиса
            timer_services.Start();
            String.Format("Сервис TRKServices - старт").SaveInformation();

            // Update the service state to Running.
            serviceStatus.dwCurrentState = ServiceState.SERVICE_RUNNING;
            SetServiceStatus(this.ServiceHandle, ref serviceStatus);
        }

        protected override void OnStop()
        {
            timer_services.Stop();
            String.Format("Сервис TRKServices - стоп").SaveInformation();
        }
        // проверим по колонке и стороне есть хоть один снятый пистолет
        private bool IsTaken(List<Gun> guns_trk) {
            foreach (Gun g in guns_trk) {
                if (g.taken==true) return true;
            }
            return false;
        }
        public void OnTimerServices(object sender, System.Timers.ElapsedEventArgs args)
        {
            try
            {
                //String.Format("Сервис TRKServices - чтение RFID").SaveInformation();
                ClientTRK client = new ClientTRK();
                EFOPC_RFID ef_opc_rfid = new EFOPC_RFID();
                

                List<RFID> list = client.ReadTagsOPSOfRFID(true);
                List<Gun> guns = client.ReadTagOPCOfGun();

                if (list != null && guns!=null)
                {
                    // String.Format("Список считаных RFID-карт = {0}",list.Count()).SaveWarning();
                    // Проверим RFID
                    foreach (RFID rfid in list)
                    {
                        if (rfid.hi != null && rfid.lo != null && rfid.hi >= 0 && rfid.lo > 0)
                        {
                            String.Format("Сервис TRKServices - Считана RFID-Карта ТРК={0}, сторона={1}, id_card={2}, hi={3}, lo={4}", rfid.num_trk, rfid.side, rfid.card != null ? (int?)rfid.card.Id : null, rfid.hi, rfid.lo).SaveInformation();
                            bool side = rfid.side == 0 ? false : true;
                            OPC_RFID rfid_old = ef_opc_rfid.OPC_RFID.Where(o => o.id_hi == (int)rfid.hi && o.id_lo == rfid.lo && o.side == side).OrderByDescending(o => o.id).FirstOrDefault();
                            if (rfid_old == null)
                            {
                                List<Gun> guns_trk = guns.Where(g => g.num_trk == rfid.num_trk && g.side == rfid.side).ToList();
                                // проверим по колонке есть снятый пистолет
                                if (guns_trk != null && IsTaken(guns_trk))
                                {
                                    int res = ef_opc_rfid.AddOPC_RFID(rfid.num_trk, rfid.side == 0 ? false : true, rfid.card != null ? (int?)rfid.card.Id : null, (int)rfid.hi, (int)rfid.lo);
                                    String.Format("Сервис TRKServices - добавлена новая RFID-Карта ТРК={0}, сторона={1}, id_card={2}, hi={3}, lo={4} - id строки - {5}", rfid.num_trk, rfid.side, rfid.card != null ? (int?)rfid.card.Id : null, rfid.hi, rfid.lo, res).SaveInformation();
                                    client.WritePulseTagsRFID(rfid.num_trk, side == true ? 1 : 2, 99, 1);
                                }
                            }
                        }
                    }
                    // сбросим RFID
                    for (int i = 1; i <= 9; i++)
                    {
                        List<Gun> guns_trk_left = guns.Where(g => g.num_trk == i && g.side == 0).ToList();
                        List<Gun> guns_trk_right = guns.Where(g => g.num_trk == i && g.side == 1).ToList();
                        if (guns_trk_left != null && !IsTaken(guns_trk_left))
                        {
                            // Сбросим левую сторону
                            {
                                SqlParameter trk = new SqlParameter("@trk", i);
                                SqlParameter side = new SqlParameter("@side", false);
                                int res = ef_opc_rfid.Database.ExecuteSqlCommand("DELETE FROM [dbo].[OPC_RFID] where [num_trk]=@trk and [side]=@side", trk, side);
                                client.WritePulseTagsRFID(i, 1, 0, 1);
                                String.Format("Сбросим RFID-карту TRK={0}, сторона левая, результат={1}", i, res).SaveWarning();
                            }
                            if (i<9 && guns_trk_right != null && !IsTaken(guns_trk_right))
                            {
                                // Сбросим правую сторону
                                SqlParameter trk = new SqlParameter("@trk", i);
                                SqlParameter side = new SqlParameter("@side", true);
                                int res = ef_opc_rfid.Database.ExecuteSqlCommand("DELETE FROM [dbo].[OPC_RFID] where [num_trk]=@trk and [side]=@side", trk, side);
                                client.WritePulseTagsRFID(i, 2, 0, 1);
                                String.Format("Сбросим RFID-карту TRK={0}, сторона правая, результат={1}", i, res).SaveWarning();
                            }
                        }
                    }
                }
                else
                {
                    String.Format("Список считаных RFID-карт = null").SaveWarning();
                }
            }
            catch (Exception e)
            {
                String.Format("OnTimerServices(sender={0}, args={1})", sender, args.ToString()).SaveError(e);
            }
        }
    }
}
