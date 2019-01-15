using EFAZS.Abstract;
using EFAZS.Entities;
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
    [RoutePrefix("api/catalog")]
    public class CatalogController : ApiController
    {
        protected ICat_OZM ef_ozm;
        protected ICat_Depots ef_depots;
        protected ICat_Werks ef_werks;

        public CatalogController(ICat_OZM ozm, ICat_Depots depots, ICat_Werks werks)
        {
            this.ef_ozm = ozm;
            this.ef_depots = depots;
            this.ef_werks = werks;
        }

        // GET: api/catalog/ozm/id/000000000310008399
        [Route("ozm/id/{id}")]
        [ResponseType(typeof(Cat_OZM))]
        public IHttpActionResult GetCat_OZM(string id)
        {
            try
            {
                Cat_OZM ozm = this.ef_ozm.GetCat_OZM(id);
                if (ozm == null)
                {
                    return NotFound();
                }
                return Ok(ozm);
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }

        // GET: api/catalog/ozm/all
        [Route("ozm/all")]
        [ResponseType(typeof(Cat_OZM))]
        public IHttpActionResult GetCat_OZM()
        {
            try
            {
                List<Cat_OZM> ozms = this.ef_ozm.GetCat_OZM().ToList();
                if (ozms == null)
                {
                    return NotFound();
                }
                return Ok(ozms);
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }

        // GET: api/catalog/depots/id/211
        [Route("depots/id/{id}")]
        [ResponseType(typeof(Cat_Depots))]
        public IHttpActionResult GetCat_Depots(string id)
        {
            try
            {
                Cat_Depots depots = this.ef_depots.Cat_Depots.Where(c => c.id == id)
                    .ToList().
                    Select(c => new Cat_Depots
                    {
                         id = c.id,
                        name = c.name,
                        parent_id = c.parent_id,
                        Cat_Werks = new Cat_Werks
                        {
                            id = c.Cat_Werks.id,
                            name = c.Cat_Werks.name
                        }
                    }).FirstOrDefault();
                if (depots == null)
                {
                    return NotFound();
                }
                return Ok(depots);
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }

        // GET: api/catalog/depots/all
        [Route("depots/all")]
        [ResponseType(typeof(Cat_Depots))]
        public IHttpActionResult GetCat_Depots()
        {
            try
            {
                List<Cat_Depots> depots = this.ef_depots.Cat_Depots
                    .ToList().
                    Select(c => new Cat_Depots
                    {
                         id = c.id,
                        name = c.name,
                        parent_id = c.parent_id,
                        Cat_Werks = new Cat_Werks
                        {
                            id = c.Cat_Werks.id,
                            name = c.Cat_Werks.name
                        }
                    }).ToList();
                if (depots == null)
                {
                    return NotFound();
                }
                return Ok(depots);
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }

        // GET: api/catalog/werks/all
        [Route("werks/all")]
        [ResponseType(typeof(Cat_Werks))]
        public IHttpActionResult GetCat_Werks()
        {
            try
            {
                List<Cat_Werks> depots = this.ef_werks.GetCat_Werks()
                    .ToList()
                    .Select(c=> new Cat_Werks {
                         id = c.id,
                         name = c.name
                    })
                    .ToList();
                if (depots == null)
                {
                    return NotFound();
                }
                return Ok(depots);
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }

    }
}
