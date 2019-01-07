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
    [RoutePrefix("api/azs")]
    public class AZSController : ApiController
    {
        protected IRepository<SAP_Buffer> ef_sap;
        protected IRepository<FuelSale> ef_fs;

        public AZSController(IRepository<SAP_Buffer> sap, IRepository<FuelSale> fs)
        {
            this.ef_sap = sap;
            this.ef_fs = fs;
        }

        // POST api/azs/sap_buffer
        [HttpPost]
        [Route("sap_buffer")]
        public int PostSAP_Buffer([FromBody]SAP_Buffer value)
        {
            try
            {
                this.ef_sap.Add(value);
                this.ef_sap.Save();
                return value.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PostSAP_Buffer(value={0})", value).SaveError(e);
                return -1;
            }
        }
    }
}
