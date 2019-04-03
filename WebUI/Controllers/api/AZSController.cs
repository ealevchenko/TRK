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
    public class AZSController : ApiController
    {
        protected IRepository<SAP_Buffer> ef_sap;
        protected IRepository<FuelSale> ef_fs;
        protected IRepository<Tanks_A92> ef_ta92;
        protected IRepository<Tanks_A95> ef_ta95;
        protected IRepository<Tanks_dt> ef_tdt;
        protected IRepository<Tanks_kerosene> ef_tk;
        protected IUsersActions ef_ua;
        protected IRepository<ReceivingFuel> ef_rf;
        protected IRepository<ReceivingFuelTanks> ef_rft;

        public AZSController(IRepository<SAP_Buffer> sap,
            IRepository<FuelSale> fs,
            IUsersActions ua,
            IRepository<Tanks_A92> ta92,
            IRepository<Tanks_A95> ta95,
            IRepository<Tanks_dt> tdt,
            IRepository<Tanks_kerosene> tk,
            IRepository<ReceivingFuel> rf,
            IRepository<ReceivingFuelTanks> rft
            )
        {
            this.ef_sap = sap;
            this.ef_fs = fs;
            this.ef_ua = ua;
            this.ef_ta92 = ta92;
            this.ef_ta95 = ta95;
            this.ef_tdt = tdt;
            this.ef_tk = tk;
            this.ef_rf = rf;
            this.ef_rft = rft;
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
        #endregion

        #region UsersActions
        // GET: api/azs/user/curent
        [Route("user/curent")]
        [ResponseType(typeof(UsersActions))]
        public IHttpActionResult GetCurrentUsersActions()
        {
            try
            {
                UsersActions current = this.ef_ua.GetCurrentUsersActions();
                if (current == null)
                {
                    return NotFound();
                }
                return Ok(current);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetCurrentUsersActions()").SaveError(e);
                return NotFound();
            }
        }
        #endregion

        #region Tanks

        // GET: api/azs/tanks/a92/select
        [Route("tanks/a92/select")]
        [ResponseType(typeof(Tanks_A92))]
        public IHttpActionResult GetSelectTanks_A92()
        {
            try
            {
                Tanks_A92 current = this.ef_ta92.Get().OrderByDescending(t => t.changed).FirstOrDefault();
                if (current == null)
                {
                    return NotFound();
                }
                return Ok(current);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetSelectTanks_A92()").SaveError(e);
                return NotFound();
            }
        }

        // POST api/azs/tanks/a92/
        [HttpPost]
        [Route("tanks/a92/")]
        public int PostSelectTanks_A92([FromBody]Tanks_A92 value)
        {
            try
            {
                this.ef_ta92.Add(value);
                this.ef_ta92.Save();
                this.ef_ta92.Refresh(value);
                return value.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PostSelectTanks_A92(value={0})", value).SaveError(e);
                return -1;
            }
        }

        // GET: api/azs/tanks/a95/select
        [Route("tanks/a95/select")]
        [ResponseType(typeof(Tanks_A95))]
        public IHttpActionResult GetSelectTanks_A95()
        {
            try
            {
                Tanks_A95 current = this.ef_ta95.Get().OrderByDescending(t => t.changed).FirstOrDefault();
                if (current == null)
                {
                    return NotFound();
                }
                return Ok(current);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetSelectTanks_A95()").SaveError(e);
                return NotFound();
            }
        }

        // POST api/azs/tanks/a95/
        [HttpPost]
        [Route("tanks/a95/")]
        public int PostSelectTanks_A95([FromBody]Tanks_A95 value)
        {
            try
            {
                this.ef_ta95.Add(value);
                this.ef_ta95.Save();
                this.ef_ta95.Refresh(value);
                return value.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PostSelectTanks_A95(value={0})", value).SaveError(e);
                return -1;
            }
        }

        // GET: api/azs/tanks/dt/select
        [Route("tanks/dt/select")]
        [ResponseType(typeof(Tanks_dt))]
        public IHttpActionResult GetSelectTanks_dt()
        {
            try
            {
                Tanks_dt current = this.ef_tdt.Get().OrderByDescending(t => t.changed).FirstOrDefault();
                if (current == null)
                {
                    return NotFound();
                }
                return Ok(current);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetSelectTanks_dt()").SaveError(e);
                return NotFound();
            }
        }

        // POST api/azs/tanks/dt/
        [HttpPost]
        [Route("tanks/dt/")]
        public int PostSelectTanks_dt([FromBody]Tanks_dt value)
        {
            try
            {
                this.ef_tdt.Add(value);
                this.ef_tdt.Save();
                this.ef_tdt.Refresh(value);
                return value.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PostSelectTanks_dt(value={0})", value).SaveError(e);
                return -1;
            }
        }

        // GET: api/azs/tanks/kerosene/select
        [Route("tanks/kerosene/select")]
        [ResponseType(typeof(Tanks_kerosene))]
        public IHttpActionResult GetSelectTanks_Kerosene()
        {
            try
            {
                Tanks_kerosene current = this.ef_tk.Get().OrderByDescending(t => t.changed).FirstOrDefault();
                if (current == null)
                {
                    return NotFound();
                }
                return Ok(current);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetSelectTanks_Kerosene()").SaveError(e);
                return NotFound();
            }
        }

        // POST api/azs/tanks/kerosene/
        [HttpPost]
        [Route("tanks/kerosene/")]
        public int PostSelectTanks_kerosene([FromBody]Tanks_kerosene value)
        {
            try
            {
                this.ef_tk.Add(value);
                this.ef_tk.Save();
                this.ef_tk.Refresh(value);
                return value.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PostSelectTanks_kerosene(value={0})", value).SaveError(e);
                return -1;
            }
        }
        #endregion

        #region ReceivingFuel
        // GET: api/azs/receiving_fuel/open
        [Route("receiving_fuel/open")]
        [ResponseType(typeof(ReceivingFuel))]
        public IHttpActionResult GetOpenReceivingFuel()
        {
            try
            {
                List<ReceivingFuel> list = this.ef_rf.Get().Where(c => c.close == null)
                    .ToList()
                    .Select(s => new ReceivingFuel
                    {
                        id = s.id,
                        operator_name = s.operator_name,
                        smena_num = s.smena_num,
                        smena_datetime = s.smena_datetime,
                        type = s.type,
                        fuel = s.fuel,
                        truck_num_nak = s.truck_num_nak,
                        truck_weight = s.truck_weight,
                        truck_provider = s.truck_provider,
                        railway_num_nak = s.railway_num_nak,
                        railway_num_tanker = s.railway_num_tanker,
                        railway_provider = s.railway_provider,
                        railway_nak_volume = s.railway_nak_volume,
                        railway_nak_dens = s.railway_nak_dens,
                        railway_nak_mass = s.railway_nak_mass,
                        railway_manual_level = s.railway_manual_level,
                        railway_manual_volume = s.railway_manual_volume,
                        railway_manual_dens = s.railway_manual_dens,
                        railway_manual_mass = s.railway_manual_mass,
                        start_datetime = s.start_datetime,
                        stop_datetime = s.stop_datetime,
                        close = s.close,
                        sending = s.sending,
                        ReceivingFuelTanks = s.ReceivingFuelTanks.ToList().Select(t => new ReceivingFuelTanks
                        {
                            id = t.id,
                            id_receiving_fuel = t.id_receiving_fuel,
                            num = t.num,
                            fuel = t.fuel,
                            start_datetime = t.start_datetime,
                            start_level = t.start_level,
                            start_volume = t.start_volume,
                            start_density = t.start_density,
                            start_mass = t.start_mass,
                            start_temp = t.start_temp,
                            start_water_level = t.start_water_level,
                            stop_datetime = t.stop_datetime,
                            stop_level = t.stop_level,
                            stop_volume = t.stop_volume,
                            stop_density = t.stop_density,
                            stop_mass = t.stop_mass,
                            stop_temp = t.stop_temp,
                            stop_water_level = t.stop_water_level,
                            close = t.close,
                        }).ToList(),
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
                String.Format("Ошибка выполнения метода API:GetOpenReceivingFuel()").SaveError(e);
                return NotFound();
            }
        }

        // GET: api/azs/receiving_fuel/id/3
        [Route("receiving_fuel/id/{id:int}")]
        [ResponseType(typeof(ReceivingFuel))]
        public IHttpActionResult GetReceivingFuel(int id)
        {
            try
            {
                ReceivingFuel rf = this.ef_rf.Get().Where(c => c.id == id)
                    .ToList()
                    .Select(s => new ReceivingFuel
                    {
                        id = s.id,
                        operator_name = s.operator_name,
                        smena_num = s.smena_num,
                        smena_datetime = s.smena_datetime,
                        type = s.type,
                        fuel = s.fuel,
                        truck_num_nak = s.truck_num_nak,
                        truck_weight = s.truck_weight,
                        truck_provider = s.truck_provider,
                        railway_num_nak = s.railway_num_nak,
                        railway_num_tanker = s.railway_num_tanker,
                        railway_provider = s.railway_provider,
                        railway_nak_volume = s.railway_nak_volume,
                        railway_nak_dens = s.railway_nak_dens,
                        railway_nak_mass = s.railway_nak_mass,
                        railway_manual_level = s.railway_manual_level,
                        railway_manual_volume = s.railway_manual_volume,
                        railway_manual_dens = s.railway_manual_dens,
                        railway_manual_mass = s.railway_manual_mass,
                        start_datetime = s.start_datetime,
                        stop_datetime = s.stop_datetime,
                        close = s.close,
                        sending = s.sending,
                        ReceivingFuelTanks = s.ReceivingFuelTanks.ToList().Select(t => new ReceivingFuelTanks
                        {
                            id = t.id,
                            id_receiving_fuel = t.id_receiving_fuel,
                            num = t.num,
                            fuel = t.fuel,
                            start_datetime = t.start_datetime,
                            start_level = t.start_level,
                            start_volume = t.start_volume,
                            start_density = t.start_density,
                            start_mass = t.start_mass,
                            start_temp = t.start_temp,
                            start_water_level = t.start_water_level,
                            stop_datetime = t.stop_datetime,
                            stop_level = t.stop_level,
                            stop_volume = t.stop_volume,
                            stop_density = t.stop_density,
                            stop_mass = t.stop_mass,
                            stop_temp = t.stop_temp,
                            stop_water_level = t.stop_water_level,
                            close = t.close,
                        }).ToList(),
                    })
                    .FirstOrDefault();
                if (rf == null)
                {
                    return NotFound();
                }
                return Ok(rf);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetReceivingFuel()").SaveError(e);
                return NotFound();
            }
        }

        // POST api/azs/receiving_fuel
        [HttpPost]
        [Route("receiving_fuel")]
        public int PostReceivingFuel([FromBody]ReceivingFuel value)
        {
            try
            {
                this.ef_rf.Add(value);
                this.ef_rf.Save();
                this.ef_rf.Refresh(value);
                return value.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PostReceivingFuel(value={0})", value).SaveError(e);
                return -1;
            }
        }

        // PUT api/azs/receiving_fuel/3
        [HttpPut]
        [Route("receiving_fuel/{id:int}")]
        public int PutReceivingFuel(int id, [FromBody]ReceivingFuel value)
        {
            try
            {
                this.ef_rf.Update(value);
                return this.ef_rf.Save();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PutReceivingFuel(id={0}, value={1})", id, value).SaveError(e);
                return -1;
            }
        }

        #endregion

        #region ReceivingFuelTanks
        // GET: api/azs/receiving_fuel_tanks/id/3/num/B3
        [Route("receiving_fuel_tanks/id/{id:int}/num/{num}")]
        [ResponseType(typeof(ReceivingFuelTanks))]
        public IHttpActionResult GetReceivingFuelTanks(int id, string num)
        {
            try
            {
                ReceivingFuelTanks rft = this.ef_rft.Get().Where(c => c.id_receiving_fuel == id & c.num == num & c.close == null)
                    //.ToList()
                    .Select(t => new ReceivingFuelTanks
                    {
                        id = t.id,
                        id_receiving_fuel = t.id_receiving_fuel,
                        num = t.num,
                        fuel = t.fuel,
                        start_datetime = t.start_datetime,
                        start_level = t.start_level,
                        start_volume = t.start_volume,
                        start_density = t.start_density,
                        start_mass = t.start_mass,
                        start_temp = t.start_temp,
                        start_water_level = t.start_water_level,
                        stop_datetime = t.stop_datetime,
                        stop_level = t.stop_level,
                        stop_volume = t.stop_volume,
                        stop_density = t.stop_density,
                        stop_mass = t.stop_mass,
                        stop_temp = t.stop_temp,
                        stop_water_level = t.stop_water_level,
                        close = t.close,
                    }).FirstOrDefault();
                if (rft == null)
                {
                    return NotFound();
                }
                return Ok(rft);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetReceivingFuelTanks(id={0}, num={1})", id, num).SaveError(e);
                return NotFound();
            }
        }

        // POST api/azs/receiving_fuel_tanks
        [HttpPost]
        [Route("receiving_fuel_tanks")]
        public int PostReceivingFuelTanks([FromBody]ReceivingFuelTanks value)
        {
            try
            {
                this.ef_rft.Add(value);
                this.ef_rft.Save();
                this.ef_rft.Refresh(value);
                //String.Format("Ошибка выполнения метода API:PostReceivingFuel(value={0})", value).SaveError(e);
                return value.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PostReceivingFuel(value={0})", value).SaveError(e);
                return -1;
            }
        }

        // PUT api/azs/receiving_fuel_tanks/3
        [HttpPut]
        [Route("receiving_fuel_tanks/{id:int}")]
        public int PutReceivingFuelTanks(int id, [FromBody]ReceivingFuelTanks value)
        {
            try
            {
                this.ef_rft.Update(value);
                return this.ef_rft.Save();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PutReceivingFuelTanks(id={0}, value={1})", id, value).SaveError(e);
                return -1;
            }
        }
        #endregion

    }
}
