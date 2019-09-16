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

    public class TL_Report
    {
        public int type { get; set; }
        public string tank { get; set; }
        public double? mass_start { get; set; }
        public double? mass_stop { get; set; }
        public int? volume_start { get; set; }
        public int? volume_stop { get; set; }
    }

    public class TR_Report
    {
        public int type { get; set; }
        public string tank { get; set; }
        public int? level { get; set; }
        public int? volume { get; set; }
        public double? dens { get; set; }
        public double? mass { get; set; }
    }

    public class TG_Report
    {
        public DateTime? dt { get; set; }
        public int? level { get; set; }
        public int? volume { get; set; }
        public double? dens { get; set; }
        public double? mass { get; set; }
        public int? temp { get; set; }
        public int? water_level { get; set; }

    }

    //public class TS_Report
    //{
    //    public int id { get; set; }
    //    public int typefuel { get; set; }
    //    public string tank { get; set; }
    //    public DateTime? timestamp { get; set; }
    //    public double? fill_percent { get; set; }
    //    public double? level { get; set; }
    //    public double? volume { get; set; }
    //    public double? dens { get; set; }
    //    public double? mass { get; set; }
    //    public double? temp { get; set; }
    //    public double? water_leve { get; set; }
    //    public double? water_volume { get; set; }

    //}

    [RoutePrefix("api/it")]
    public class TLController : ApiController
    {
        protected ITanksLog ef_it;

        public TLController(ITanksLog it)
        {
            this.ef_it = it;
        }

        // GET: api/it/report/tanks_fuel_flow/start/2019-04-15T00:00:00/stop/2019-04-16T06:59:59
        [Route("report/tanks_fuel_flow/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(TL_Report))]
        public IHttpActionResult GetReportTL(DateTime start, DateTime stop)
        {
            try
            {
                string sql = "EXEC [dbo].[GET_MASS_OF_PERIOD] N'" + start.ToString("yyyy-MM-dd HH:mm:ss") + "', N'" + stop.ToString("yyyy-MM-dd HH:mm:ss") + "'";
                List<TL_Report> list = this.ef_it.Database.SqlQuery<TL_Report>(sql).ToList();
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                 String.Format("Ошибка выполнения метода API:GetReportTL(start={0}, stop={1})", start, stop).SaveError(e);
                return NotFound();
            }
        }

        // GET: api/it/report/tanks_remains/date/2019-04-15T00:00:00
        [Route("report/tanks_remains/date/{date:datetime}")]
        [ResponseType(typeof(TR_Report))]
        public IHttpActionResult GetReportTR(DateTime date)
        {
            try
            {
                string sql = "EXEC [dbo].[GET_REMAINS_OF_Date] N'" + date.ToString("yyyy-MM-dd HH:mm:ss") + "'";
                List<TR_Report> list = this.ef_it.Database.SqlQuery<TR_Report>(sql).ToList();
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetReportTR(date={0})", date).SaveError(e);
                return NotFound();
            }
        }


        // GET: api/it/report/tanks_grafic/table/BT2/tank/B2/start/2019-05-28T00:00:00/stop/2019-05-28T23:59:59
        [Route("report/tanks_grafic/table/{table}/tank/{tank}/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(TG_Report))]
        public IHttpActionResult GetReportTG(string table, string tank, DateTime start, DateTime stop)
        {
            try
            {
                string sql = "EXEC [dbo].[GET_TANK_OF_PERIOD] N'"+table+"', N'"+tank+"', N'" + start.ToString("yyyy-MM-dd HH:mm:ss") + "', N'" + stop.ToString("yyyy-MM-dd HH:mm:ss") + "'";
                List<TG_Report> list = this.ef_it.Database.SqlQuery<TG_Report>(sql).ToList();
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetReportTG(table={0}, tank={1}, start={2}, stop={3})",table, tank, start, stop).SaveError(e);
                return NotFound();
            }
        }

        //// Текущий статус
        //// GET: api/it/report/tanks_status/current
        //[Route("report/tanks_status/current")]
        //[ResponseType(typeof(TS_Report))]
        //public IHttpActionResult GetReportTS()
        //{
        //    try
        //    {
        //        string sql = "EXEC [dbo].[GET_CURRENT_TANKS_VALUE]";
        //        List<TS_Report> list = this.ef_it.Database.SqlQuery<TS_Report>(sql).ToList();
        //        if (list == null)
        //        {
        //            return NotFound();
        //        }
        //        return Ok(list);
        //    }
        //    catch (Exception e)
        //    {
        //        String.Format("Ошибка выполнения метода API:GetReportTS()").SaveError(e);
        //        return NotFound();
        //    }
        //}
    }
}
