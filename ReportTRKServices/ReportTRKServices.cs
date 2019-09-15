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


        private bool time_daily = false;
        private bool time_sm_day = false;
        private bool time_sm_night = false;


        EFTRKLogs trk_log = new EFTRKLogs();
        ClientTRK client = new ClientTRK();
        EFTRK_Counters ef_trkc = new EFTRK_Counters();

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

        //public int addCounters()
        //{
        //    try
        //    {
        //        EFGunsCnts ef_gc = new EFGunsCnts();
        //        ClientTRK client = new ClientTRK();
        //        int res = 0;
        //        List<Gun> guns = client.ReadTagOPCOfGun();
        //        if (guns != null)
        //        {
        //            EFUsersActions efua = new EFUsersActions();
        //            UsersActions user_action = efua.GetCurrentUsersActions();
        //            if (user_action != null)
        //            {
        //                GunsCnts gc = new GunsCnts();
        //                gc.ID = 0;
        //                gc.Operator = user_action.UserName;
        //                gc.SmenaID = user_action.SessionID;
        //                gc.TimeStamp = DateTime.Now;
        //                foreach (Gun g in guns)
        //                {
        //                    switch (g.num_gun)
        //                    {
        //                        case 1: gc.C1_1 = (int?)g.total_volume; break;
        //                        case 2: gc.C1_2 = (int?)g.total_volume; break;
        //                        case 3: gc.C2_1 = (int?)g.total_volume; break;
        //                        case 4: gc.C2_2 = (int?)g.total_volume; break;
        //                        case 5: gc.C3_1 = (int?)g.total_volume; break;
        //                        case 6: gc.C3_2 = (int?)g.total_volume; break;
        //                        case 7: gc.C4_1 = (int?)g.total_volume; break;
        //                        case 8: gc.C4_2 = (int?)g.total_volume; break;
        //                        case 9: gc.C5_1 = (int?)g.total_volume; break;
        //                        case 10: gc.C5_2 = (int?)g.total_volume; break;
        //                        case 11: gc.C6_1 = (int?)g.total_volume; break;
        //                        case 12: gc.C6_2 = (int?)g.total_volume; break;
        //                        case 13: gc.C7_1 = (int?)g.total_volume; break;
        //                        case 14: gc.C7_2 = (int?)g.total_volume; break;
        //                        case 15: gc.C7_3 = (int?)g.total_volume; break;
        //                        case 16: gc.C7_4 = (int?)g.total_volume; break;
        //                        case 17: gc.C7_5 = (int?)g.total_volume; break;
        //                        case 18: gc.C7_6 = (int?)g.total_volume; break;
        //                        case 19: gc.C7_7 = (int?)g.total_volume; break;
        //                        case 20: gc.C7_8 = (int?)g.total_volume; break;
        //                        case 21: gc.C8_1 = (int?)g.total_volume; break;
        //                        case 22: gc.C8_2 = (int?)g.total_volume; break;
        //                        case 23: gc.C8_3 = (int?)g.total_volume; break;
        //                        case 24: gc.C8_4 = (int?)g.total_volume; break;
        //                        case 25: gc.C8_5 = (int?)g.total_volume; break;
        //                        case 26: gc.C8_6 = (int?)g.total_volume; break;
        //                        case 27: gc.C8_7 = (int?)g.total_volume; break;
        //                        case 28: gc.C8_8 = (int?)g.total_volume; break;
        //                        case 29: gc.C9_1 = (int?)g.total_volume; break;
        //                    }
        //                }
        //                ef_gc.Add(gc);
        //                res = ef_gc.Save();
        //            }
        //        }
        //        String.Format("Сервис ReportTRKServices - Отработал метод addCounters - Код выполнения:{0}", res).SaveInformation();
        //        return res;
        //    }
        //    catch (Exception e)
        //    {
        //        String.Format("addCounters()").SaveError(e);
        //        return -1;
        //    }
        //}

        public int addCounters()
        {
            try
            {
                int res = 0;
                List<Gun> guns = client.ReadTagOPCOfGun();
                List<DIORisers> dios = client.ReadTagOPCOfDIORisers();
                if (guns != null)
                {
                    EFUsersActions efua = new EFUsersActions();
                    UsersActions user_action = efua.GetCurrentUsersActions();
                    if (user_action != null)
                    {
                        TRK_Counters counters = new TRK_Counters()
                        {
                            ID = 0,
                            Operator = user_action.UserName,
                            SmenaID = user_action.SessionID,
                            TimeStamp = DateTime.Now,
                            note = "Services"
                        };
                        foreach (Gun g in guns)
                        {
                            switch (g.num_gun)
                            {
                                case 1: counters.C1_1 = (int?)g.total_volume; break;
                                case 2: counters.C1_2 = (int?)g.total_volume; break;
                                case 3: counters.C2_1 = (int?)g.total_volume; break;
                                case 4: counters.C2_2 = (int?)g.total_volume; break;
                                case 5: counters.C3_1 = (int?)g.total_volume; break;
                                case 6: counters.C3_2 = (int?)g.total_volume; break;
                                case 7: counters.C4_1 = (int?)g.total_volume; break;
                                case 8: counters.C4_2 = (int?)g.total_volume; break;
                                case 9: counters.C5_1 = (int?)g.total_volume; break;
                                case 10: counters.C5_2 = (int?)g.total_volume; break;
                                case 11: counters.C6_1 = (int?)g.total_volume; break;
                                case 12: counters.C6_2 = (int?)g.total_volume; break;
                                case 13: counters.C7_1 = (int?)g.total_volume; break;
                                case 14: counters.C7_2 = (int?)g.total_volume; break;
                                case 15: counters.C7_3 = (int?)g.total_volume; break;
                                case 16: counters.C7_4 = (int?)g.total_volume; break;
                                case 17: counters.C7_5 = (int?)g.total_volume; break;
                                case 18: counters.C7_6 = (int?)g.total_volume; break;
                                case 19: counters.C7_7 = (int?)g.total_volume; break;
                                case 20: counters.C7_8 = (int?)g.total_volume; break;
                                case 21: counters.C8_1 = (int?)g.total_volume; break;
                                case 22: counters.C8_2 = (int?)g.total_volume; break;
                                case 23: counters.C8_3 = (int?)g.total_volume; break;
                                case 24: counters.C8_4 = (int?)g.total_volume; break;
                                case 25: counters.C8_5 = (int?)g.total_volume; break;
                                case 26: counters.C8_6 = (int?)g.total_volume; break;
                                case 27: counters.C8_7 = (int?)g.total_volume; break;
                                case 28: counters.C8_8 = (int?)g.total_volume; break;
                                case 29: counters.C9_1 = (int?)g.total_volume; break;
                            }
                        }
                        if (dios != null)
                        {
                            foreach (DIORisers dio in dios)
                            {
                                switch (dio.num)
                                {
                                    case 1: counters.as1 = (long?)dio.Counter; break;
                                    case 2: counters.as2 = (long?)dio.Counter; break;
                                    case 3: counters.as3 = (long?)dio.Counter; break;
                                }
                            }
                        }

                        ef_trkc.Add(counters);
                        res = ef_trkc.Save();
                    }
                }
                String.Format("Сервис ReportTRKServices - Отработал метод addCounters - Код выполнения-1:{0}", res).SaveInformation();
                return res;
            }
            catch (Exception e)
            {
                String.Format("addCounters()").SaveError(e);
                return -1;
            }
        }

        public void OnTimerServices(object sender, System.Timers.ElapsedEventArgs args)
        {
            try
            {
                EFDaily_Report efdl = new EFDaily_Report();
                EFDaily_Accounting_Report ef_dar = new EFDaily_Accounting_Report();

                string log_mes;
                DateTime dt = DateTime.Now;
                int h = dt.Hour;
                int m = dt.Minute;
                if (h == 1 && (m >= 5 && m <= 6) && !time_daily)
                {
                    String.Format("Сервис ReportTRKServices - сработал таймер на 0 часов").SaveInformation();

                    int res = 0;
                    // Суточный
                    //res = efdl.AddDailyReport();
                    //log_mes = String.Format("Сервис ReportTRKServices - Отработал метод AddDailyReport - Код выполнения:{0}", res);
                    //log_mes.SaveInformation();
                    //trk_log.AddTRKLogs(new TRKLogs()
                    //{
                    //    ID = 0,
                    //    DateTime = DateTime.Now,
                    //    Level = 4,
                    //    UserName = "ReportTRKServeces",
                    //    Log = log_mes
                    //});
                    // Суточный с пересчетом к 15 градусам
                    //res = efdl.AddDailyReport15();
                    res = ef_dar.AddDaily_Accounting_Report();
                    log_mes = String.Format("Сервис ReportTRKServices - Отработал метод AddDaily_Accounting_Report - Код выполнения:{0}", res);
                    log_mes.SaveInformation();
                    trk_log.AddTRKLogs(new TRKLogs()
                    {
                        ID = 0,
                        DateTime = DateTime.Now,
                        Level = 4,
                        UserName = "ReportTRKServeces",
                        Log = log_mes
                    });
                    // Суточный детально по емкостям
                    res = ef_dar.AddDaily_Accounting_Detali_Report();
                    log_mes = String.Format("Сервис ReportTRKServices - Отработал метод AddDaily_Accounting_Detali_Report - Код выполнения:{0}", res);
                    log_mes.SaveInformation();
                    trk_log.AddTRKLogs(new TRKLogs()
                    {
                        ID = 0,
                        DateTime = DateTime.Now,
                        Level = 4,
                        UserName = "ReportTRKServeces",
                        Log = log_mes
                    });

                    // Суточный с переносом в ЦОД
                    //res = efdl.AddDailyReportDC();
                    res = ef_dar.AddDaily_Accounting_Report_DC();
                    log_mes = String.Format("Сервис ReportTRKServices - Отработал метод AddDaily_Accounting_Report_DC (Перенос данных в ЦОД) - Код выполнения:{0}", res);
                    log_mes.SaveInformation();
                    trk_log.AddTRKLogs(new TRKLogs()
                    {
                        ID = 0,
                        DateTime = DateTime.Now,
                        Level = 4,
                        UserName = "ReportTRKServeces",
                        Log = log_mes
                    });

                    time_daily = true;
                }
                if (h == 6 && (m >= 58 && m <= 59) && !time_sm_day)
                {
                    log_mes = String.Format("Сервис ReportTRKServices - сработал таймер на 7 часов");
                    log_mes.SaveInformation();
                    trk_log.AddTRKLogs(new TRKLogs()
                    {
                        ID = 0,
                        DateTime = DateTime.Now,
                        Level = 4,
                        UserName = "ReportTRKServeces",
                        Log = log_mes
                    });
                    addCounters();
                    time_sm_day = true;
                }
                if (h == 18 && (m >= 58 && m <= 59) && !time_sm_night)
                {
                    log_mes = String.Format("Сервис ReportTRKServices - сработал таймер на 19 часов");
                    log_mes.SaveInformation();
                    trk_log.AddTRKLogs(new TRKLogs()
                    {
                        ID = 0,
                        DateTime = DateTime.Now,
                        Level = 4,
                        UserName = "ReportTRKServeces",
                        Log = log_mes
                    });
                    addCounters();
                    time_sm_night = true;
                }
                if (h == 23 && (time_daily || time_sm_day || time_sm_night))
                {
                    time_daily = false;
                    time_sm_day = false;
                    time_sm_night = false;
                }
            }
            catch (Exception e)
            {
                string log_mes = String.Format("OnTimerServices(sender={0}, args={1})", sender, args.ToString());
                log_mes.SaveError(e);
                trk_log.AddTRKLogs(new TRKLogs()
                {
                    ID = 0,
                    DateTime = DateTime.Now,
                    Level = 2,
                    UserName = "ReportTRKServeces",
                    Log = log_mes
                });
            }
        }
    }
}
