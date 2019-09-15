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
    [RoutePrefix("api/dar")]
    public class DARController : ApiController
    {
        protected IRepository<Daily_Accounting_Report> ef_dar;
        protected IRepository<DeliveryTank> ef_dl;
        protected IRepository<ReceivingTank> ef_rect;
        protected IRepository<RemainsTank> ef_remt;
        public DARController(IRepository<Daily_Accounting_Report> dar,IRepository<DeliveryTank> dl,IRepository<ReceivingTank> rect,IRepository<RemainsTank> remt )
        {
            this.ef_dar = dar;
            this.ef_dl = dl;
            this.ef_rect = rect;
            this.ef_remt = remt;
        }

        // GET: api/dar/report/daily_accounting/start/2019-09-01T00:00:00/stop/2019-09-25T00:00:00
        [Route("report/daily_accounting/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(Daily_Accounting_Report))]
        public IHttpActionResult GetDailyAccountingReport(DateTime start, DateTime stop)
        {
            try
            {
                List<Daily_Accounting_Report> list = this.ef_dar
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
                String.Format("Ошибка выполнения метода API:GetDailyAccountingReport(start={0}, stop={1})", start, stop).SaveError(e);
                return NotFound();
            }
        }
    }
}
