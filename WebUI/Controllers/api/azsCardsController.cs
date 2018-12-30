using EFFC.Abstract;
using EFFC.Entities;
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
    public class azsCardsController : ApiController
    {

        protected IRepository<azsCards> ef_cards;

        public azsCardsController(IRepository<azsCards> cards)
        {
            this.ef_cards = cards;
        }

        // GET: api/trk/cards
        [Route("cards")]
        [ResponseType(typeof(azsCards))]
        public IHttpActionResult GetCards()
        {
            try
            {
                List<azsCards> list = this.ef_cards.Get().ToList();
                if (list == null || list.Count() == 0)
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

        // GET: api/azs/cards/901
        [Route("cards/{id:int}")]
        [ResponseType(typeof(azsCards))]
        public IHttpActionResult GetCards(int id)
        {
            try
            {
                azsCards cards = this.ef_cards.Get(id);
                if (cards == null)
                {
                    return NotFound();
                }
                return Ok(cards);
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }

        // POST api/azs/cards
        [HttpPost]
        [Route("cards")]
        public int PostCards([FromBody]azsCards value)
        {
            try
            {
                this.ef_cards.Add(value);
                this.ef_cards.Save();
                return value.Id;
            }
            catch (Exception e)
            {
                return -1;
            }
        }

        // PUT api/azs/cards/5
        [HttpPut]
        [Route("cards/{id:int}")]
        public int PutCards(int id, [FromBody]azsCards value)
        {
            try
            {
                this.ef_cards.Update(value);
                return this.ef_cards.Save();
            }
            catch (Exception e)
            {
                return -1;
            }
        }

        // PUT api/azs/cards/5
        [HttpDelete]
        [Route("cards/{id:int}")]
        public int DeleteCards(int id)
        {
            try
            {
                this.ef_cards.Delete(id);
                return this.ef_cards.Save();
            }
            catch (Exception e)
            {
                return -1;
            }
        }

    }
}
