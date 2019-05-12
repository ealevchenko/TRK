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
    public partial class RF_Change
    {
        public string operator_name { get; set; }
        public int smena_num { get; set; }
        public DateTime smena_datetime { get; set; }
        public DateTime start_rf { get; set; }
        public DateTime? stop_rf { get; set; }
        public int fuel { get; set; }
        public string num { get; set; }
        public DateTime start_tank { get; set; }
        public decimal start_mass { get; set; }
        public DateTime? stop_tank { get; set; }
        public decimal? stop_mass { get; set; }
        public decimal? change_capacity { get; set; }
    }

    [RoutePrefix("api/rf")]
    public class RFController : ApiController
    {
        protected IRepository<ReceivingFuel> ef_rf;
        protected IRepository<ReceivingFuelTanks> ef_rft;

        public RFController(IRepository<ReceivingFuel> rf, IRepository<ReceivingFuelTanks> rft)
        {
            this.ef_rf = rf;
            this.ef_rft = rft;
        }

        #region ReceivingFuel
        // GET: api/rf/receiving_fuel/open
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

        // GET: api/rf/receiving_fuel/id/3
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

        // POST api/rf/receiving_fuel
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

        // PUT api/rf/receiving_fuel/3
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

        // GET: api/rf/report/change_tank/2018-11-26T19:00:00/2018-11-27T06:59:59
        [Route("report/change_tank/{start:datetime}/{stop:datetime}")]
        [ResponseType(typeof(RF_Change))]
        public IHttpActionResult GetReportChangeTank(DateTime start, DateTime stop)
        {

            string sql = "SELECT rf.operator_name, rf.smena_num, rf.smena_datetime, rf.start_datetime AS start_rf, rf.stop_datetime AS stop_rf, rft.fuel, rft.num, " +
                "rft.start_datetime as start_tank, rft.start_mass, rft.stop_datetime as stop_tank, rft.stop_mass, change_capacity = rft.stop_mass - rft.start_mass " +
                "FROM dbo.ReceivingFuel as rf INNER JOIN dbo.ReceivingFuelTanks as rft ON rf.id = rft.id_receiving_fuel " +
                "where rf.start_datetime >= CONVERT(datetime,'" + start.ToString("yyyy-MM-dd HH:mm:ss") + "',120) and rf.start_datetime <= CONVERT(datetime,'" + stop.ToString("yyyy-MM-dd HH:mm:ss") + "',120) " +
                "ORDER BY rft.fuel, start_rf, rft.num";

            List<RF_Change> list = this.ef_rf.Database.SqlQuery<RF_Change>(sql).ToList();
            if (list == null)
            {
                return NotFound();
            }
            return Ok(list);
        }

    }
}
