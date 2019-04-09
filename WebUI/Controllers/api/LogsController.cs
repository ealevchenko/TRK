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
    }
}
