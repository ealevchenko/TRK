using EFAZS.Abstract;
using EFAZS.Entities;
using MessageLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebUI.Controllers.api
{
    [RoutePrefix("api/logs")]
    public class LogsController : ApiController
    {
        protected ITRKLogs ef_logs;

        public LogsController(ITRKLogs logs) {
            this.ef_logs = logs;
        }

        // POST api/logs/ins
        [HttpPost]
        [Route("ins")]
        public long PostTRKLogs([FromBody]TRKLogs value)
        {
            try
            {
                return this.ef_logs.AddTRKLogs(value);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PostTRKLogs(value={0})", value).SaveError(e);
                return -1;
            }
        }
    }
}
