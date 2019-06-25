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

namespace ReportTRKServices
{
    public partial class ReportTRKServices : ServiceBase
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

        //private bool[] guns_taken = new bool[32] { false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false };
        //private bool[,] trk_rfid = new bool[12, 2]; 


        private bool t0 = false;
        private bool t7 = false;
        private bool t19 = false;

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

        public ReportTRKServices()
        {
            InitializeComponent();
            //// Настроем таймер контроля выполнения сервиса
            timer_services.Interval = 1000 * 60; // 1 раз в минуту
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
            String.Format("Сервис ReportTRKServices - старт").SaveInformation();

            // Update the service state to Running.
            serviceStatus.dwCurrentState = ServiceState.SERVICE_RUNNING;
            SetServiceStatus(this.ServiceHandle, ref serviceStatus);
        }

        protected override void OnStop()
        {
            timer_services.Stop();
            String.Format("Сервис ReportTRKServices - стоп").SaveInformation();
        }

        public void OnTimerServices(object sender, System.Timers.ElapsedEventArgs args)
        {
            try
            {
                DateTime dt = DateTime.Now;
                int h = dt.Hour;
                if (h == 0 && !t0) {
                    String.Format("Сервис ReportTRKServices - сработал таймер на 0 часов").SaveInformation();
                    t0 = true;
                }
                if (h == 7 && !t7) {
                    String.Format("Сервис ReportTRKServices - сработал таймер на 7 часов").SaveInformation();
                    t7 = true;
                }
                if (h == 19 && !t19) {
                    String.Format("Сервис ReportTRKServices - сработал таймер на 19 часов").SaveInformation();
                    t19 = true;
                }
                if (h == 23 || t0 || t7 || t19) {
                    t0 = false;
                    t7 = false;
                    t19 = false;
                }

                //String.Format("Сервис TRKServices - чтение RFID").SaveInformation();
                //ClientTRK client = new ClientTRK();
                //EFTRKLogs trk_log = new EFTRKLogs();


                //EFOPC_RFID ef_opc_rfid = new EFOPC_RFID();


                //List<RFID> list = client.ReadTagsOPSOfRFID(true);
                //List<Gun> guns = client.ReadTagOPCOfGun();

                //string log_mes;

                
            }
            catch (Exception e)
            {
                String.Format("OnTimerServices(sender={0}, args={1})", sender, args.ToString()).SaveError(e);
            }
        }
    }
}
