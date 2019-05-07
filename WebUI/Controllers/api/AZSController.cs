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
        protected IRepository<Tanks_A92> ef_ta92;
        protected IRepository<Tanks_A95> ef_ta95;
        protected IRepository<Tanks_dt> ef_tdt;
        protected IRepository<Tanks_kerosene> ef_tk;
        protected IUsersActions ef_ua;
        protected IRepository<ReceivingFuel> ef_rf;
        protected IRepository<ReceivingFuelTanks> ef_rft;

        public AZSController(IUsersActions ua,
            IRepository<Tanks_A92> ta92,
            IRepository<Tanks_A95> ta95,
            IRepository<Tanks_dt> tdt,
            IRepository<Tanks_kerosene> tk,
            IRepository<ReceivingFuel> rf,
            IRepository<ReceivingFuelTanks> rft
            )
        {
            this.ef_ua = ua;
            this.ef_ta92 = ta92;
            this.ef_ta95 = ta95;
            this.ef_tdt = tdt;
            this.ef_tk = tk;
            this.ef_rf = rf;
            this.ef_rft = rft;
        }

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
                        railway_type_capacity = s.railway_type_capacity,
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
                        railway_type_capacity = s.railway_type_capacity,
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
