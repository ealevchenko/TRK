using EFAZS.Abstract;
using EFAZS.Entities;
using MessageLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebUI.Controllers.api
{
    public class SR_Report
    {
        public int type { get; set; }
        public string num { get; set; }
        public int? start_valume { get; set; }
        public int? stop_valume { get; set; }
    }

    [RoutePrefix("api/azs")]
    public class AZSController : ApiController
    {
        protected IRepository<Tanks_A92> ef_ta92;
        protected IRepository<Tanks_A95> ef_ta95;
        protected IRepository<Tanks_dt> ef_tdt;
        protected IRepository<Tanks_kerosene> ef_tk;
        protected IUsersActions ef_ua;
        protected IRepository<Daily_Report> ef_dr;
        protected IRepository<Daily_Report_15> ef_dr15;

        public AZSController(IUsersActions ua,
            IRepository<Tanks_A92> ta92,
            IRepository<Tanks_A95> ta95,
            IRepository<Tanks_dt> tdt,
            IRepository<Tanks_kerosene> tk,
            IRepository<Daily_Report> dr,
            IRepository<Daily_Report_15> dr15
            )
        {
            this.ef_ua = ua;
            this.ef_ta92 = ta92;
            this.ef_ta95 = ta95;
            this.ef_tdt = tdt;
            this.ef_tk = tk;
            this.ef_dr = dr;
            this.ef_dr15 = dr15;
        }

        #region UsersActions
        // GET: api/azs/user/curent
        [Route("user/curent")]
        [ResponseType(typeof(UsersActions))]
        public IHttpActionResult GetCurrentUsersActions()
        {
            try
            {
                UsersActions current = this.ef_ua.GetCurrentUsersActions();
                if (current == null)
                {
                    return NotFound();
                }
                return Ok(current);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetCurrentUsersActions()").SaveError(e);
                return NotFound();
            }
        }
        #endregion

        #region Tanks

        // GET: api/azs/tanks/a92/select
        [Route("tanks/a92/select")]
        [ResponseType(typeof(Tanks_A92))]
        public IHttpActionResult GetSelectTanks_A92()
        {
            try
            {
                Tanks_A92 current = this.ef_ta92.Get().OrderByDescending(t => t.changed).FirstOrDefault();
                if (current == null)
                {
                    return NotFound();
                }
                return Ok(current);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetSelectTanks_A92()").SaveError(e);
                return NotFound();
            }
        }

        // POST api/azs/tanks/a92/
        [HttpPost]
        [Route("tanks/a92/")]
        public int PostSelectTanks_A92([FromBody]Tanks_A92 value)
        {
            try
            {
                this.ef_ta92.Add(value);
                this.ef_ta92.Save();
                this.ef_ta92.Refresh(value);
                return value.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PostSelectTanks_A92(value={0})", value).SaveError(e);
                return -1;
            }
        }

        // GET: api/azs/tanks/a95/select
        [Route("tanks/a95/select")]
        [ResponseType(typeof(Tanks_A95))]
        public IHttpActionResult GetSelectTanks_A95()
        {
            try
            {
                Tanks_A95 current = this.ef_ta95.Get().OrderByDescending(t => t.changed).FirstOrDefault();
                if (current == null)
                {
                    return NotFound();
                }
                return Ok(current);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetSelectTanks_A95()").SaveError(e);
                return NotFound();
            }
        }

        // POST api/azs/tanks/a95/
        [HttpPost]
        [Route("tanks/a95/")]
        public int PostSelectTanks_A95([FromBody]Tanks_A95 value)
        {
            try
            {
                this.ef_ta95.Add(value);
                this.ef_ta95.Save();
                this.ef_ta95.Refresh(value);
                return value.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PostSelectTanks_A95(value={0})", value).SaveError(e);
                return -1;
            }
        }

        // GET: api/azs/tanks/dt/select
        [Route("tanks/dt/select")]
        [ResponseType(typeof(Tanks_dt))]
        public IHttpActionResult GetSelectTanks_dt()
        {
            try
            {
                Tanks_dt current = this.ef_tdt.Get().OrderByDescending(t => t.changed).FirstOrDefault();
                if (current == null)
                {
                    return NotFound();
                }
                return Ok(current);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetSelectTanks_dt()").SaveError(e);
                return NotFound();
            }
        }

        // POST api/azs/tanks/dt/
        [HttpPost]
        [Route("tanks/dt/")]
        public int PostSelectTanks_dt([FromBody]Tanks_dt value)
        {
            try
            {
                this.ef_tdt.Add(value);
                this.ef_tdt.Save();
                this.ef_tdt.Refresh(value);
                return value.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PostSelectTanks_dt(value={0})", value).SaveError(e);
                return -1;
            }
        }

        // GET: api/azs/tanks/kerosene/select
        [Route("tanks/kerosene/select")]
        [ResponseType(typeof(Tanks_kerosene))]
        public IHttpActionResult GetSelectTanks_Kerosene()
        {
            try
            {
                Tanks_kerosene current = this.ef_tk.Get().OrderByDescending(t => t.changed).FirstOrDefault();
                if (current == null)
                {
                    return NotFound();
                }
                return Ok(current);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetSelectTanks_Kerosene()").SaveError(e);
                return NotFound();
            }
        }

        // POST api/azs/tanks/kerosene/
        [HttpPost]
        [Route("tanks/kerosene/")]
        public int PostSelectTanks_kerosene([FromBody]Tanks_kerosene value)
        {
            try
            {
                this.ef_tk.Add(value);
                this.ef_tk.Save();
                this.ef_tk.Refresh(value);
                return value.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PostSelectTanks_kerosene(value={0})", value).SaveError(e);
                return -1;
            }
        }
        #endregion

        public int addCounters()
        {
            try
            {
                ClientOPCTRK.ClientTRK client = new ClientOPCTRK.ClientTRK();
                EFAZS.Concrete.EFTRK_Counters ef_trkc = new EFAZS.Concrete.EFTRK_Counters();

                int res = 0;
                List<ClientOPCTRK.Gun> guns = client.ReadTagOPCOfGun();
                List<ClientOPCTRK.DIORisers> dios = client.ReadTagOPCOfDIORisers();

                if (guns != null)
                {
                    EFAZS.Concrete.EFUsersActions efua = new EFAZS.Concrete.EFUsersActions();
                    UsersActions user_action = efua.GetCurrentUsersActions();
                    if (user_action != null)
                    {
                        TRK_Counters counters = new TRK_Counters()
                        {
                            ID = 0,
                            Operator = user_action.UserName,
                            SmenaID = user_action.SessionID,
                            TimeStamp = DateTime.Now,
                            note = "AZSController"
                        };
                        foreach (ClientOPCTRK.Gun g in guns)
                        {
                            switch (g.num_gun)
                            {
                                case 1: counters.C1_1 = (int?)g.total_volume; break;
                                case 2: counters.C1_2 = (int?)g.total_volume;  break;
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
                            foreach (ClientOPCTRK.DIORisers dio in dios)
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

                        //String.Format("AZSController - Отработал метод addCounters - counters.Operator:{0}", counters.Operator).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.SmenaID:{0}", counters.SmenaID).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.TimeStamp:{0}", counters.TimeStamp).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C1_1:{0}", counters.C1_1).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C1_2:{0}", counters.C1_2).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C2_1:{0}", counters.C2_1).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C2_2:{0}", counters.C2_2).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C3_1:{0}", counters.C3_1).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C3_2:{0}", counters.C3_2).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C4_1:{0}", counters.C4_1).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C4_2:{0}", counters.C4_2).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C5_1:{0}", counters.C5_1).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C5_2:{0}", counters.C5_2).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C6_1:{0}", counters.C6_1).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C6_2:{0}", counters.C6_2).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C7_1:{0}", counters.C7_1).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C7_2:{0}", counters.C7_2).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C7_3:{0}", counters.C7_3).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C7_4:{0}", counters.C7_4).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C7_5:{0}", counters.C7_5).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C7_6:{0}", counters.C7_6).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C7_7:{0}", counters.C7_7).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C7_8:{0}", counters.C7_8).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C8_1:{0}", counters.C8_1).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C8_2:{0}", counters.C8_2).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C8_3:{0}", counters.C8_3).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C8_4:{0}", counters.C8_4).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C8_5:{0}", counters.C8_5).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C8_6:{0}", counters.C8_6).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C8_7:{0}", counters.C8_7).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C8_8:{0}", counters.C8_8).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.C9_1:{0}", counters.C9_1).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.as1:{0}", counters.as1).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.as2:{0}", counters.as2).SaveInformation();
                        //String.Format("AZSController - Отработал метод addCounters - counters.as3:{0}", counters.as3).SaveInformation();

                        res = ef_trkc.Save();
                    }
                }
                String.Format("AZSController - Отработал метод addCounters - Код выполнения-1:{0}", res).SaveInformation();
                return res;
            }
            catch (Exception e)
            {
                String.Format("addCounters()").SaveError(e);
                return -1;
            }
        }

        // GET: api/azs/report/shift_report/start/2019-04-15T00:00:00/stop/2019-04-16T06:59:59
        [Route("report/shift_report/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(SR_Report))]
        public IHttpActionResult GetReportSR(DateTime start, DateTime stop)
        {
            try
            {
                int res = addCounters();
                string sql = "EXEC [dbo].[GET_VALUE_GUNS_OF_PERIOD] N'" + start.ToString("yyyy-MM-dd HH:mm:ss") + "', N'" + stop.ToString("yyyy-MM-dd HH:mm:ss") + "'";
                List<SR_Report> list = this.ef_ua.Database.SqlQuery<SR_Report>(sql).ToList();
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetReportSR(start={0}, stop={1})", start, stop).SaveError(e);
                return NotFound();
            }
        }

        // GET: api/azs/report/daily_report/start/2019-05-01T00:00:00/stop/2019-06-25T00:00:00
        [Route("report/daily_report/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Daily_Report))]
        public IHttpActionResult GetReportDR(DateTime start, DateTime stop)
        {
            try
            {
                List<Daily_Report> list = this.ef_dr
                    .Get()
                    .Where(d => d.date_start >= start && d.date_start <= stop)
                    .ToList();
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetReportDR(start={0}, stop={1})", start, stop).SaveError(e);
                return NotFound();
            }
        }
        // GET: api/azs/report/daily_report15/start/2019-05-01T00:00:00/stop/2019-06-25T00:00:00
        [Route("report/daily_report15/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Daily_Report_15))]
        public IHttpActionResult GetReportDR15(DateTime start, DateTime stop)
        {
            try
            {
                List<Daily_Report_15> list = this.ef_dr15
                    .Get()
                    .Where(d => d.date_start >= start && d.date_start <= stop)
                    .ToList();
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetReportDR15(start={0}, stop={1})", start, stop).SaveError(e);
                return NotFound();
            }
        }


    }
}
