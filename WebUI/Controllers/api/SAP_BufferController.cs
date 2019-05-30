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
    [RoutePrefix("api/azs")]
    public class SAP_BufferController : ApiController
    {
        protected IRepository<SAP_Buffer> ef_sap;

        public SAP_BufferController(IRepository<SAP_Buffer> sap)
        {
            this.ef_sap = sap;
        }

        #region sap_buffer
        // GET: api/azs/sap_buffer/id/1
        [Route("sap_buffer/id/{id:int}")]
        [ResponseType(typeof(SAP_Buffer))]
        public IHttpActionResult GetSAP_Buffer(int id)
        {
            try
            {
                SAP_Buffer sap = this.ef_sap.Get().Where(s => s.id == id).ToList()
                    .Select(s => new SAP_Buffer
                    {
                        id = s.id,
                        DATE = s.DATE,
                        TIME = s.TIME,
                        LOGIN_R = s.LOGIN_R,
                        N_BAK = s.N_BAK,
                        OZM_BAK = s.OZM_BAK,
                        OZM_TREB = s.OZM_TREB,
                        FLAG_R = s.FLAG_R,
                        PLOTNOST = s.PLOTNOST,
                        VOLUME = s.VOLUME,
                        MASS = s.MASS,
                        LOGIN_EXP = s.LOGIN_EXP,
                        N_POST = s.N_POST,
                        TRANSP_FAKT = s.TRANSP_FAKT,
                        N_DEB = s.N_DEB,
                        N_TREB = s.N_TREB,
                        N_POS = s.N_POS,
                        LGORT = s.LGORT,
                        WERKS = s.WERKS,
                        sending = s.sending,
                    }).FirstOrDefault();
                if (sap == null)
                {
                    return NotFound();
                }
                return Ok(sap);
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }

        // GET: api/azs/sap_buffer/num_treb/0003900524/pos/0005
        [Route("sap_buffer/num_treb/{num}/pos/{pos}")]
        [ResponseType(typeof(SAP_Buffer))]
        public IHttpActionResult GetSAP_BufferOfTreb(string num, string pos)
        {
            try
            {
                List<SAP_Buffer> sap = this.ef_sap.Get().Where(s => s.N_TREB == num & s.N_POS == pos & s.VOLUME==null).ToList()
                    .Select(s => new SAP_Buffer
                    {
                        id = s.id,
                        DATE = s.DATE,
                        TIME = s.TIME,
                        LOGIN_R = s.LOGIN_R,
                        N_BAK = s.N_BAK,
                        OZM_BAK = s.OZM_BAK,
                        OZM_TREB = s.OZM_TREB,
                        FLAG_R = s.FLAG_R,
                        PLOTNOST = s.PLOTNOST,
                        VOLUME = s.VOLUME,
                        MASS = s.MASS,
                        LOGIN_EXP = s.LOGIN_EXP,
                        N_POST = s.N_POST,
                        TRANSP_FAKT = s.TRANSP_FAKT,
                        N_DEB = s.N_DEB,
                        N_TREB = s.N_TREB,
                        N_POS = s.N_POS,
                        LGORT = s.LGORT,
                        WERKS = s.WERKS,
                        sending = s.sending,
                    }).ToList();
                if (sap == null)
                {
                    return NotFound();
                }
                return Ok(sap);
            }
            catch (Exception e)
            {
                return NotFound();
            }
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

        // PUT api/azs/sap_buffer/1
        [HttpPut]
        [Route("sap_buffer/{id:int}")]
        public int PutSAP_Buffer(int id, [FromBody]SAP_Buffer value)
        {
            try
            {
                this.ef_sap.Update(value);
                return this.ef_sap.Save();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PutSAP_Buffer(id={0}, value={1})", id, value).SaveError(e);
                return -1;
            }
        }

        // Delete api/azs/sap_buffer/5
        [HttpDelete]
        [Route("sap_buffer/{id:int}")]
        public int DeleteSAP_Buffer(int id)
        {
            try
            {
                this.ef_sap.Delete(id);
                return this.ef_sap.Save();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:DeleteSAP_Buffer(id={0})", id).SaveError(e);
                return -1;
            }
        }

        #endregion

    }
}
