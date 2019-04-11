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
    public class FuelSaleController : ApiController
    {
        protected IRepository<FuelSale> ef_fs;

        public FuelSaleController(IRepository<SAP_Buffer> sap,
            IRepository<FuelSale> fs)
        {
            this.ef_fs = fs;
        }

        #region fuel_sale
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
                        id = s.id,
                        operator_name = s.operator_name,
                        smena_num = s.smena_num,
                        smena_datetime = s.smena_datetime,
                        trk_num = s.trk_num,
                        side = s.side,
                        num = s.num,
                        fuel_type = s.fuel_type,
                        tank_num = s.tank_num,
                        id_card = s.id_card,
                        dose = s.dose,
                        passage = s.passage,
                        volume = s.volume,
                        mass = s.mass,
                        start_datetime = s.start_datetime,
                        start_level = s.start_level,
                        start_volume = s.start_volume,
                        start_density = s.start_density,
                        start_mass = s.start_mass,
                        start_temp = s.start_temp,
                        start_water_level = s.start_water_level,
                        start_counter = s.start_counter,
                        stop_datetime = s.stop_datetime,
                        stop_level = s.stop_level,
                        stop_volume = s.stop_volume,
                        stop_density = s.stop_density,
                        stop_mass = s.stop_mass,
                        stop_temp = s.stop_temp,
                        stop_water_level = s.stop_water_level,
                        stop_counter = s.stop_counter,
                        close = s.close,
                        id_sap = s.id_sap,
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

        // GET: api/azs/fuel_sale/1
        [Route("fuel_sale/{id:int}")]
        [ResponseType(typeof(FuelSale))]
        public IHttpActionResult GetFuelSale(int id)
        {
            try
            {
                FuelSale fs = this.ef_fs.Get().Where(c => c.id == id)
                    .ToList()
                    .Select(s => new FuelSale
                    {
                        id = s.id,
                        operator_name = s.operator_name,
                        smena_num = s.smena_num,
                        smena_datetime = s.smena_datetime,
                        trk_num = s.trk_num,
                        side = s.side,
                        num = s.num,
                        fuel_type = s.fuel_type,
                        tank_num = s.tank_num,
                        id_card = s.id_card,
                        dose = s.dose,
                        passage = s.passage,
                        volume = s.volume,
                        mass = s.mass,
                        start_datetime = s.start_datetime,
                        start_level = s.start_level,
                        start_volume = s.start_volume,
                        start_density = s.start_density,
                        start_mass = s.start_mass,
                        start_temp = s.start_temp,
                        start_water_level = s.start_water_level,
                        start_counter = s.start_counter,
                        stop_datetime = s.stop_datetime,
                        stop_level = s.stop_level,
                        stop_volume = s.stop_volume,
                        stop_density = s.stop_density,
                        stop_mass = s.stop_mass,
                        stop_temp = s.stop_temp,
                        stop_water_level = s.stop_water_level,
                        stop_counter = s.stop_counter,
                        close = s.close,
                        id_sap = s.id_sap,
                    })
                    .FirstOrDefault();
                if (fs == null)
                {
                    return NotFound();
                }
                return Ok(fs);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetFuelSale(id={0})", id).SaveError(e);
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

        // GET: api/azs/fuel_sale/num/1/open
        [Route("fuel_sale/num/{num:int}/open")]
        public int GetOpenFuelSaleOfNum(int num)
        {
            try
            {
                FuelSale fs_open = null;
                if (num <= 29)
                {
                    // пистолет
                    fs_open = this.ef_fs.Get().Where(c => c.close == null &&  c.num == num && c.trk_num <= 9)
                    .ToList()
                    .Select(s => new FuelSale
                    {
                        id = s.id,
                        operator_name = s.operator_name,
                        smena_num = s.smena_num,
                        smena_datetime = s.smena_datetime,
                        trk_num = s.trk_num,
                        side = s.side,
                        num = s.num,
                        fuel_type = s.fuel_type,
                        tank_num = s.tank_num,
                        id_card = s.id_card,
                        dose = s.dose,
                        passage = s.passage,
                        volume = s.volume,
                        mass = s.mass,
                        start_datetime = s.start_datetime,
                        start_level = s.start_level,
                        start_volume = s.start_volume,
                        start_density = s.start_density,
                        start_mass = s.start_mass,
                        start_temp = s.start_temp,
                        start_water_level = s.start_water_level,
                        start_counter = s.start_counter,
                        stop_datetime = s.stop_datetime,
                        stop_level = s.stop_level,
                        stop_volume = s.stop_volume,
                        stop_density = s.stop_density,
                        stop_mass = s.stop_mass,
                        stop_temp = s.stop_temp,
                        stop_water_level = s.stop_water_level,
                        stop_counter = s.stop_counter,
                        close = s.close,
                        id_sap = s.id_sap,
                    }).FirstOrDefault();
                }
                if (num > 29)
                {
                    // НС
                    fs_open = this.ef_fs.Get().Where(c => c.close == null && c.num == (num - 29) && c.trk_num > 9)
                        .ToList()
                        .Select(s => new FuelSale
                        {
                            id = s.id,
                            operator_name = s.operator_name,
                            smena_num = s.smena_num,
                            smena_datetime = s.smena_datetime,
                            trk_num = s.trk_num,
                            side = s.side,
                            num = s.num,
                            fuel_type = s.fuel_type,
                            tank_num = s.tank_num,
                            id_card = s.id_card,
                            dose = s.dose,
                            passage = s.passage,
                            volume = s.volume,
                            mass = s.mass,
                            start_datetime = s.start_datetime,
                            start_level = s.start_level,
                            start_volume = s.start_volume,
                            start_density = s.start_density,
                            start_mass = s.start_mass,
                            start_temp = s.start_temp,
                            start_water_level = s.start_water_level,
                            start_counter = s.start_counter,
                            stop_datetime = s.stop_datetime,
                            stop_level = s.stop_level,
                            stop_volume = s.stop_volume,
                            stop_density = s.stop_density,
                            stop_mass = s.stop_mass,
                            stop_temp = s.stop_temp,
                            stop_water_level = s.stop_water_level,
                            stop_counter = s.stop_counter,
                            close = s.close,
                            id_sap = s.id_sap,
                        }).FirstOrDefault();
                }
                if (fs_open == null)
                {
                    return 0;
                }
                return fs_open.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetOpenFuelSaleOfNum()").SaveError(e);
                return -1;
            }
        }

        #endregion
    }
}
