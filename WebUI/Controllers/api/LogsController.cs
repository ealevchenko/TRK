using EFAZS.Abstract;
using EFAZS.Entities;
using MessageLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebUI.Controllers.api
{
    [RoutePrefix("api/logs")]
    public class LogsController : ApiController
    {
        protected ITRKLogs ef_logs;

        public LogsController(ITRKLogs logs) {
            this.ef_logs = logs;
        }

        // GET: api/logs/last/lines/100
        [Route("last/lines/{count:int}")]
        [ResponseType(typeof(TRKLogs))]
        public IHttpActionResult GetLastLines(int count)
        {
            try
            {
                List<TRKLogs> list = this.ef_logs.GetTRKLogsLastLines(count).ToList();
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetLastLines(count={0})", count).SaveError(e);
                return NotFound();
            }
        }

        // POST api/logs/ins
        [HttpPost]
        [Route("ins")]
        public long PostTRKLogs([FromBody]TRKLogs value)
        {
            try
            {
                String mess = String.Format("[ CLIENT datetime: {0}, user : {1} ] Message - ({2})", value.DateTime, value.UserName, value.Log);
                switch (value.Level)
                {
                    case 0: mess.SaveInformation(); break;
                    case 1: mess.SaveWarning(); break;
                    case 2: mess.SaveError(); break;
                    case 3: mess.SaveDebug(); break;
                    case 4: mess.SaveInformation(); break;
                }
                return this.ef_logs.AddTRKLogs(value);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PostTRKLogs(value={0})", value).SaveError(e);
                return -1;
            }
        }

        // GET: api/logs/report/start/2019-04-02T00:00:00/stop/2019-04-02T23:59:59
        [Route("report/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(TRKLogs))]
        public IHttpActionResult GetTRKLogsOfDateTime(DateTime start, DateTime stop)
        {
            try
            {
                string sql = "SELECT [ID] ,[DateTime] ,[UserName] ,[Level] ,[Log] FROM [dbo].[TRKLogs] " +
                    "where [DateTime] >= CONVERT(datetime,'" + start.ToString("yyyy-MM-dd HH:mm:ss") + "',120) and [DateTime] <= CONVERT(datetime,'" + stop.ToString("yyyy-MM-dd HH:mm:ss") + "',120) " +
                    "ORDER BY [DateTime] desc";

                List<TRKLogs> list = this.ef_logs.Database.SqlQuery<TRKLogs>(sql).ToList();
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetTRKLogsOfDateTime(start={0}, stop={1})", start, stop).SaveError(e);
                return NotFound();
            }
        }

    }
}
