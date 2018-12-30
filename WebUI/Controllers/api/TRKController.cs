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

        // GET: api/trk
        [ResponseType(typeof(TRK_))]
        public IHttpActionResult GetTRK()
        {
            try
            {
                List<TRK_>list = client.ReadOPC();
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

        // GET: api/trk/6
        [Route("{id:int}")]
        [ResponseType(typeof(ItemValueResult))]
        public IHttpActionResult GetTRK(int id)
        {
            try
            {
                ItemValueResult[] list = client.ReadOPC(id);
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
