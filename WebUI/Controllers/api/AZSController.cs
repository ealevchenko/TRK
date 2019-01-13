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

        // GET: api/azs/fuel_sale/open
        [Route("fuel_sale/open")]
        [ResponseType(typeof(FuelSale))]
        public IHttpActionResult GetOpenFuelSale()
        {
            try
            {
                List<FuelSale> list = this.ef_fs.Get().Where(c => c.close == null)
                    .ToList()
                    .Select(s => new FuelSale
                    {
                        id = s.id ,
                        operator_name = s.operator_name ,
                        smena_num = s.smena_num ,
                        smena_datetime = s.smena_datetime ,
                        trk_num = s.trk_num ,
                        side = s.side ,
                        num = s.num ,
                        fuel_type = s.fuel_type ,
                        tank_num = s.tank_num ,
                        id_card = s.id_card ,
                        dose = s.dose ,
                        passage = s.passage ,
                        volume = s.volume ,
                        mass = s.mass ,
                        start_datetime = s.start_datetime ,
                        start_level = s.start_level ,
                        start_volume = s.start_volume ,
                        start_density = s.start_density ,
                        start_mass = s.start_mass ,
                        start_temp = s.start_temp ,
                        start_water_level = s.start_water_level ,
                        start_counter = s.start_counter ,
                        stop_datetime = s.stop_datetime ,
                        stop_level = s.stop_level ,
                        stop_volume = s.stop_volume ,
                        stop_density = s.stop_density ,
                        stop_mass = s.stop_mass ,
                        stop_temp = s.stop_temp ,
                        stop_water_level = s.stop_water_level ,
                        stop_counter = s.stop_counter ,
                        close = s.close ,
                        id_sap = s.id_sap ,
                    })
                    .ToList();
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetOpenFuelSale()").SaveError(e);
                return NotFound();
            }
        }

        // POST api/azs/fuel_sale
        [HttpPost]
        [Route("fuel_sale")]
        public int PostFuelSale([FromBody]FuelSale value)
        {
            try
            {
                this.ef_fs.Add(value);
                this.ef_fs.Save();
                this.ef_fs.Refresh(value);
                return value.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PostFuelSale(value={0})", value).SaveError(e);
                return -1;
            }
        }

        // PUT api/azs/fuel_sale/5
        [HttpPut]
        [Route("fuel_sale/{id:int}")]
        public int PutFuelSale(int id, [FromBody]FuelSale value)
        {
            try
            {
                this.ef_fs.Update(value);
                return this.ef_fs.Save();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PutFuelSale(id={0}, value={1})", id, value).SaveError(e);
                return -1;
            }
        }

    }
}
