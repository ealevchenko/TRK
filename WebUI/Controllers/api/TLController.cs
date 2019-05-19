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

    }
}
