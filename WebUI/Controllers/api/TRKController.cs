using ClientOPCTRK;
using Opc.Da;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebUI.Controllers.api
{
    [RoutePrefix("api/trk")]
    public class TRKController : ApiController
    {
        ClientTRK client = new ClientTRK();

        public TRKController() {

        }
        // GET: api/trk/tags
        [Route("tags")]
        [ResponseType(typeof(TRK))]
        public IHttpActionResult GetTRKTagOPC()
        {
            try
            {
                TRK trk = client.ReadTagOPC();
                if (trk == null)
                {
                    return NotFound();
                }
                return Ok(trk);
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }

        // GET: api/trk/tank/num/B2
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
                return NotFound();
            }
        }

    }
}
