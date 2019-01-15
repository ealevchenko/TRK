using ClientOPCTRK;
using Opc.Da;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using MessageLog;

namespace WebUI.Controllers.api
{
    [RoutePrefix("api/trk")]
    public class TRKController : ApiController
    {
        ClientTRK client = new ClientTRK();

        public TRKController() {

        }
        // GET: api/trk/tank/num/B9
        [Route("tank/num/{num}")]
        [ResponseType(typeof(Tank))]
        public IHttpActionResult GetTagsOPSOfTank(string num)
        {
            try
            {
                Tank tank = client.ReadTagsOPSOfTank(num);
                if (tank == null)
                {
                    return NotFound();
                }
                return Ok(tank);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetTagsOPSOfTank(num={0})", num).SaveError(e);
                return NotFound();
            }
        }

        // GET: api/trk/guns
        [Route("guns")]
        [ResponseType(typeof(Gun))]
        public IHttpActionResult GetReadTagOPCOfGun()
        {
            try
            {
                List<Gun> list = client.ReadTagOPCOfGun();
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetReadTagOPCOfGun()").SaveError(e);
                return NotFound();
            }
        }

        // GET: api/trk/rfid/tags
        [Route("rfid/tags")]
        [ResponseType(typeof(RFID))]
        public IHttpActionResult GetReadTagsOPSOfRFID()
        {
            try
            {
                List<RFID> list = client.ReadTagsOPSOfRFID(false);
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetReadTagsOPSOfRFID()").SaveError(e);
                return NotFound();
            }
        }

        // GET: api/trk/dio/risers/tags
        [Route("dio/risers/tags")]
        [ResponseType(typeof(DIORisers))]
        public IHttpActionResult GetReadTagOPCOfDIORisers()
        {
            try
            {
                List<DIORisers> list = client.ReadTagOPCOfDIORisers();
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetReadTagOPCOfDIORisers()").SaveError(e);
                return NotFound();
            }
        }

        // GET: api/trk/risers/tags
        [Route("risers/tags")]
        [ResponseType(typeof(Risers))]
        public IHttpActionResult GetReadTagOPCOfRisers()
        {
            try
            {
                List<Risers> list = client.ReadTagOPCOfRisers();
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetReadTagOPCOfRisers()").SaveError(e);
                return NotFound();
            }
        }
    }
}
