using ClientSAPTRK;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebUI.Controllers.api
{
    [RoutePrefix("api/sap")]
    public class SAPController : ApiController
    {
        ClientSAP sap = new ClientSAP();

        public SAPController()
        {

        }

        // GET: api/sap/reservation/num/3052703/pos/1
        [Route("reservation/num/{num}/pos/{pos}")]
        [ResponseType(typeof(Reservation))]
        public IHttpActionResult GetReservation(string num, string pos)
        {
            try
            {
                Reservation reservation = sap.GetReservation(num, pos);
                if (reservation == null)
                {
                    return NotFound();
                }
                return Ok(reservation);
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }

        // GET: api/sap/supply/post/8000000020
        [Route("supply/post/{post}")]
        [ResponseType(typeof(Supply))]
        public IHttpActionResult GetSupply(string post)
        {
            try
            {
                List<Supply> list_sypply = sap.GetSupply(post);
                if (list_sypply == null)
                {
                    return NotFound();
                }
                return Ok(list_sypply);
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }
    }
}
