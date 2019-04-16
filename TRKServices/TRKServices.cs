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

        private bool[] guns_taken = new bool[32] { false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false };
        private bool[,] trk_rfid = new bool[12, 2]; 


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
        private bool IsTaken(List<Gun> guns_trk)
        {
            foreach (Gun g in guns_trk)
            {
                if (g.taken == true) return true;
            }
            return false;
        }

        public void OnTimerServices(object sender, System.Timers.ElapsedEventArgs args)
        {
            try
            {
                //String.Format("Сервис TRKServices - чтение RFID").SaveInformation();
                ClientTRK client = new ClientTRK();
                EFTRKLogs trk_log = new EFTRKLogs();


                EFOPC_RFID ef_opc_rfid = new EFOPC_RFID();


                List<RFID> list = client.ReadTagsOPSOfRFID(true);
                List<Gun> guns = client.ReadTagOPCOfGun();

                string log_mes;

                // Сравним масив с памятью (выставим сообщения
                foreach (Gun gn in guns) { 

                    int num = gn.num_trk>9 ? gn.num_gun+29 : gn.num_gun;
                    if (gn.taken!=null && gn.taken != guns_taken[num])
                    {
                        if (gn.num_trk > 9)
                        {
                            log_mes = String.Format("Наливной стояк № {0} заземлен : {1}", gn.num_gun, gn.taken);
                        }
                        else
                        {
                            log_mes = String.Format("Пистолет № {0} снят : {1}", gn.num_gun, gn.taken);
                        }
                        log_mes.SaveWarning(); // Запишим в лог
                        // Пистолет подняли
                        trk_log.AddTRKLogs(new TRKLogs()
                        {
                            ID = 0,
                            DateTime = DateTime.Now,
                            Level = 4,
                            UserName = "TRKServeces",
                            Log = log_mes
                        });
                        // Отобразим световую индикацию
                        if (gn.num_trk <= 9)
                        {
                            if (gn.taken == true && trk_rfid[gn.num_trk, gn.side] == false)
                            {
                                // Блымкнем
                                    client.WritePulseTagsRFID(gn.num_trk, gn.side == 0 ? 1 : 2, 99, 1);
                                    trk_rfid[gn.num_trk, gn.side] = true;
                            }
                            //else
                            //{
                            //    // Перестаним блымкать
                            //    client.WritePulseTagsRFID(gn.num_trk, gn.side == 0 ? 1 : 2, 0, 1);
                            //}
                        }
                        guns_taken[num] = (bool)gn.taken;
                    }
                }
                // Проверим на выключение
                if (guns_taken[1] == false && trk_rfid[1, 0]== true)
                {
                    client.WritePulseTagsRFID(1, 1, 0, 1);
                    trk_rfid[1, 0] = false;
                }
                if (guns_taken[2] == false && trk_rfid[1, 1]== true)
                {
                    client.WritePulseTagsRFID(1, 2, 0, 1);
                    trk_rfid[1, 1] = false;
                }
                if (guns_taken[3] == false && trk_rfid[2, 0]== true)
                {
                    client.WritePulseTagsRFID(2, 1, 0, 1);
                    trk_rfid[2, 0] = false;
                }
                if (guns_taken[4] == false && trk_rfid[2, 1]== true)
                {
                    client.WritePulseTagsRFID(2, 2, 0, 1);
                    trk_rfid[2, 1] = false;
                }
                if (guns_taken[5] == false && trk_rfid[3, 0]== true)
                {
                    client.WritePulseTagsRFID(3, 1, 0, 1);
                    trk_rfid[3, 0] = false;
                }
                if (guns_taken[6] == false && trk_rfid[3, 1]== true)
                {
                    client.WritePulseTagsRFID(3, 2, 0, 1);
                    trk_rfid[3, 1] = false;
                }
                if (guns_taken[7] == false && trk_rfid[4, 0]== true)
                {
                    client.WritePulseTagsRFID(4, 1, 0, 1);
                    trk_rfid[4, 0] = false;
                }
                if (guns_taken[8] == false && trk_rfid[4, 1]== true)
                {
                    client.WritePulseTagsRFID(4, 2, 0, 1);
                    trk_rfid[4, 1] = false;
                }
                if (guns_taken[9] == false && trk_rfid[5, 0]== true)
                {
                    client.WritePulseTagsRFID(5, 1, 0, 1);
                    trk_rfid[5, 0] = false;
                }
                if (guns_taken[10] == false && trk_rfid[5, 1]== true)
                {
                    client.WritePulseTagsRFID(5, 2, 0, 1);
                    trk_rfid[5, 1] = false;
                }
                if (guns_taken[11] == false && trk_rfid[6, 0]== true)
                {
                    client.WritePulseTagsRFID(6, 1, 0, 1);
                    trk_rfid[6, 0] = false;
                }
                if (guns_taken[12] == false && trk_rfid[6, 1]== true)
                {
                    client.WritePulseTagsRFID(6, 2, 0, 1);
                    trk_rfid[6, 1] = false;
                }
                if (guns_taken[13] == false && guns_taken[14] == false && guns_taken[15] == false && guns_taken[16] == false && trk_rfid[7, 0]== true)
                {
                    client.WritePulseTagsRFID(7, 1, 0, 1);
                    trk_rfid[7, 0] = false;
                }
                if (guns_taken[17] == false && guns_taken[18] == false && guns_taken[19] == false && guns_taken[20] == false && trk_rfid[7, 1]== true)
                {
                    client.WritePulseTagsRFID(7, 2, 0, 1);
                    trk_rfid[7, 1] = false;
                }
                if (guns_taken[21] == false && guns_taken[22] == false && guns_taken[23] == false && guns_taken[24] == false && trk_rfid[8, 0]== true)
                {
                    client.WritePulseTagsRFID(8, 1, 0, 1);
                    trk_rfid[8, 0] = false;
                }
                if (guns_taken[25] == false && guns_taken[26] == false && guns_taken[27] == false && guns_taken[28] == false && trk_rfid[8, 1]== true)
                {
                    client.WritePulseTagsRFID(8, 2, 0, 1);
                    trk_rfid[8, 1] = false;
                }
                if (guns_taken[29] == false && trk_rfid[9, 0]== true)
                {
                    client.WritePulseTagsRFID(9, 1, 0, 1);
                    trk_rfid[9, 0] = false;
                }
                // Можно добавить НС
                if (list != null && guns != null)
                {
                    // String.Format("Список считаных RFID-карт = {0}",list.Count()).SaveWarning();
                    // Проверим RFID
                    foreach (RFID rfid in list)
                    {
                        // Определим сторону
                        bool side = rfid.side == 0 ? false : true;
                        // Получим список пистолетов относящихся к RFID
                        List<Gun> guns_trk = guns.Where(g => g.num_trk == rfid.num_trk && g.side == rfid.side).ToList();
                        // Если все пистолеты опущены и это колонка - тогда удалим карточку
                        if ((guns_trk == null || !IsTaken(guns_trk)) && rfid.num_trk < 10)
                        {
                            SqlParameter trk = new SqlParameter("@trk", rfid.num_trk);
                            SqlParameter bside = new SqlParameter("@side", side);
                            int res = ef_opc_rfid.Database.ExecuteSqlCommand("DELETE FROM [dbo].[OPC_RFID] where [num_trk]=@trk and [side]=@side", trk, bside);
                        }
                        //// Пистолет поднят
                        //if (guns_trk != null && IsTaken(guns_trk))
                        //{
                        //    // Блымкнем
                        //    client.WritePulseTagsRFID(rfid.num_trk, side == false ? 1 : 2, 99, 1);
                        //    //String.Format("Пистолет поднят RFID-карту TRK={0}, сторона {1}, результат={2}", rfid.num_trk, side == false ? 1 : 2, res).SaveWarning();
                        //}
                        //else {
                        //    if (rfid.num_trk < 10)
                        //    {
                        //        SqlParameter trk = new SqlParameter("@trk", rfid.num_trk);
                        //        SqlParameter bside = new SqlParameter("@side", side);
                        //        int res = ef_opc_rfid.Database.ExecuteSqlCommand("DELETE FROM [dbo].[OPC_RFID] where [num_trk]=@trk and [side]=@side", trk, bside);
                        //        client.WritePulseTagsRFID(rfid.num_trk, side == false ? 1 : 2, 0, 1);
                        //        //String.Format("Сбросим RFID-карту TRK={0}, сторона {1}, результат={2}", rfid.num_trk, side == false ? 1 : 2, res).SaveWarning();
                        //    }
                        //}
                        // Проверим RFID поднесена
                        if (rfid.hi != null && rfid.lo != null && rfid.hi >= 0 && rfid.lo > 0)
                        {
                            // Да, поднесена
                            String.Format("Сервис TRKServices - Считана RFID-Карта ТРК={0}, сторона={1}, id_card={2}, hi={3}, lo={4}", rfid.num_trk, rfid.side, rfid.card != null ? (int?)rfid.card.Id : null, rfid.hi, rfid.lo).SaveInformation();
                            // Проверим эта карта есть в базе
                            OPC_RFID rfid_old = ef_opc_rfid.OPC_RFID.Where(o => o.id_hi == (int)rfid.hi && o.id_lo == rfid.lo && o.side == side).OrderByDescending(o => o.id).FirstOrDefault();
                            // Карты в базе нет?
                            if (rfid_old == null)
                            {
                                // проверим по колонке есть снятый пистолет
                                if (guns_trk != null && ((rfid.num_trk < 10 && IsTaken(guns_trk)) || (rfid.num_trk >= 10 && rfid.num_trk <= 12)))
                                {
                                    int res = ef_opc_rfid.AddOPC_RFID(rfid.num_trk, rfid.side == 0 ? false : true, rfid.card != null ? (int?)rfid.card.Id : null, (int)rfid.hi, (int)rfid.lo);

                                    if (rfid.num_trk > 9)
                                    {
                                        log_mes = String.Format("Наливной стояк № {0} считана RFID-карта : {1} Код записи в БД - {2}", rfid.num_trk - 10, rfid.card != null ? (int?)rfid.card.Id : null, res);
                                    }
                                    else
                                    {
                                        log_mes = String.Format("ТРК № {0}, сторона {1}, считана RFID-карта : {2} Код записи в БД - {3}", rfid.num_trk, rfid.side, rfid.card != null ? (int?)rfid.card.Id : null, res);
                                    }
                                    log_mes.SaveWarning(); // Запишим в лог
                                    trk_log.AddTRKLogs(new TRKLogs()
                                    {
                                        ID = 0,
                                        DateTime = DateTime.Now,
                                        Level = 4,
                                        UserName = "TRKServeces",
                                        Log = log_mes
                                    });
                                }
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
