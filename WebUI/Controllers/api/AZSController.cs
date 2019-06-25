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

        public AZSController(IUsersActions ua,
            IRepository<Tanks_A92> ta92,
            IRepository<Tanks_A95> ta95,
            IRepository<Tanks_dt> tdt,
            IRepository<Tanks_kerosene> tk, 
            IRepository<Daily_Report> dr
            )
        {
            this.ef_ua = ua;
            this.ef_ta92 = ta92;
            this.ef_ta95 = ta95;
            this.ef_tdt = tdt;
            this.ef_tk = tk;
            this.ef_dr = dr;
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
                EFAZS.Concrete.EFGunsCnts ef_gc = new EFAZS.Concrete.EFGunsCnts();

                int res = 0;
                List<ClientOPCTRK.Gun> guns = client.ReadTagOPCOfGun();
                if (guns != null)
                {
                    EFAZS.Concrete.EFUsersActions efua = new EFAZS.Concrete.EFUsersActions();
                    UsersActions user_action = efua.GetCurrentUsersActions();
                    if (user_action != null)
                    {
                        GunsCnts gc = new GunsCnts();
                        gc.ID = 0;
                        gc.Operator = user_action.UserName;
                        gc.SmenaID = user_action.SessionID;
                        gc.TimeStamp = DateTime.Now;
                        foreach (ClientOPCTRK.Gun g in guns)
                        {
                            switch (g.num_gun)
                            {
                                case 1: gc.C1_1 = (int?)g.total_volume; break;
                                case 2: gc.C1_2 = (int?)g.total_volume; break;
                                case 3: gc.C2_1 = (int?)g.total_volume; break;
                                case 4: gc.C2_2 = (int?)g.total_volume; break;
                                case 5: gc.C3_1 = (int?)g.total_volume; break;
                                case 6: gc.C3_2 = (int?)g.total_volume; break;
                                case 7: gc.C4_1 = (int?)g.total_volume; break;
                                case 8: gc.C4_2 = (int?)g.total_volume; break;
                                case 9: gc.C5_1 = (int?)g.total_volume; break;
                                case 10: gc.C5_2 = (int?)g.total_volume; break;
                                case 11: gc.C6_1 = (int?)g.total_volume; break;
                                case 12: gc.C6_2 = (int?)g.total_volume; break;
                                case 13: gc.C7_1 = (int?)g.total_volume; break;
                                case 14: gc.C7_2 = (int?)g.total_volume; break;
                                case 15: gc.C7_3 = (int?)g.total_volume; break;
                                case 16: gc.C7_4 = (int?)g.total_volume; break;
                                case 17: gc.C7_5 = (int?)g.total_volume; break;
                                case 18: gc.C7_6 = (int?)g.total_volume; break;
                                case 19: gc.C7_7 = (int?)g.total_volume; break;
                                case 20: gc.C7_8 = (int?)g.total_volume; break;
                                case 21: gc.C8_1 = (int?)g.total_volume; break;
                                case 22: gc.C8_2 = (int?)g.total_volume; break;
                                case 23: gc.C8_3 = (int?)g.total_volume; break;
                                case 24: gc.C8_4 = (int?)g.total_volume; break;
                                case 25: gc.C8_5 = (int?)g.total_volume; break;
                                case 26: gc.C8_6 = (int?)g.total_volume; break;
                                case 27: gc.C8_7 = (int?)g.total_volume; break;
                                case 28: gc.C8_8 = (int?)g.total_volume; break;
                                case 29: gc.C9_1 = (int?)g.total_volume; break;
                            }
                        }
                        ef_gc.Add(gc);
                        res = ef_gc.Save();
                    }
                }
                String.Format("Сервис ReportTRKServices - Отработал метод addCounters - Код выполнения:{0}", res).SaveInformation();
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

    }
}
