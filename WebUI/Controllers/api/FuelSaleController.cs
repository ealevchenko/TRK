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
    public class FL_Report
    {
        public int id_fs { get; set; }
        public string operator_name { get; set; }
        public int smena_num { get; set; }
        public DateTime smena_datetime { get; set; }
        public int trk_num { get; set; }
        public bool side { get; set; }
        public int num { get; set; }
        public int fuel_type { get; set; }
        public string tank_num { get; set; }
        public int id_card { get; set; }
        public decimal? dose { get; set; }
        public string passage { get; set; }
        public decimal? volume { get; set; }
        public decimal? mass { get; set; }
        public DateTime start_datetime { get; set; }
        public decimal start_level { get; set; }
        public decimal start_volume { get; set; }
        public decimal start_density { get; set; }
        public decimal start_mass { get; set; }
        public decimal start_temp { get; set; }
        public decimal start_water_level { get; set; }
        public int start_counter { get; set; }
        public DateTime? stop_datetime { get; set; }
        public decimal? stop_level { get; set; }
        public decimal? stop_volume { get; set; }
        public decimal? stop_density { get; set; }
        public decimal? stop_mass { get; set; }
        public decimal? stop_temp { get; set; }
        public decimal? stop_water_level { get; set; }
        public int? stop_counter { get; set; }
        public DateTime? close { get; set; }
        public DateTime? sending { get; set; }
        public int? id_sap { get; set; }
        public DateTime? sap_date { get; set; }
        public TimeSpan? sap_time { get; set; }
        public string sap_login_r { get; set; }
        public string sap_n_bak { get; set; }
        public string sap_ozm_bak { get; set; }
        public string sap_ozm_treb { get; set; }
        public string sap_flag_r { get; set; }
        public string sap_plotnost { get; set; }
        public double? sap_valume { get; set; }
        public double? sap_mass { get; set; }
        public string sap_login_exp { get; set; }
        public string sap_n_post { get; set; }
        public string sap_transp_fakt { get; set; }
        public string sap_n_deb { get; set; }
        public string sap_n_treb { get; set; }
        public string sap_n_pos { get; set; }
        public string sap_lgort { get; set; }
        public string sap_werks { get; set; }
        public DateTime? sap_sending { get; set; }
    }
    
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

        // GET: api/azs/fuel_list/report/start/2019-04-02T00:00:00/stop/2019-04-02T23:59:59
        [Route("fuel_list/report/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(FL_Report))]
        public IHttpActionResult GetFuelListOfDateTime(DateTime start, DateTime stop)
        {
            try
            {
                string sql = "SELECT  fs.id as id_fs, fs.operator_name, fs.smena_num, fs.smena_datetime, fs.trk_num, fs.side, fs.num, fs.fuel_type, fs.tank_num, fs.id_card, fs.dose, fs.passage, fs.volume, " +
                         "fs.mass, fs.start_datetime, fs.start_level, fs.start_volume, fs.start_density, fs.start_mass, fs.start_temp, fs.start_water_level, fs.start_counter, fs.stop_datetime, fs.stop_level, " + 
                         "fs.stop_volume, fs.stop_density, fs.stop_mass, fs.stop_temp, fs.stop_water_level, fs.stop_counter, fs.[close], fs.sending, sap.id AS id_sap, sap.DATE as sap_date, sap.TIME as sap_time, " +  
                         "sap.LOGIN_R as sap_login_r, sap.N_BAK as sap_n_bak, sap.OZM_BAK as sap_ozm_bak, sap.OZM_TREB as sap_ozm_treb, sap.FLAG_R as sap_flag_r, sap.PLOTNOST as sap_plotnost, " +  
                         "sap.VOLUME AS sap_valume, sap.MASS AS sap_mass, sap.LOGIN_EXP as sap_login_exp, sap.N_POST as sap_n_post, sap.TRANSP_FAKT as sap_transp_fakt, " +  
                         "sap.N_DEB as sap_n_deb, sap.N_TREB as sap_n_treb, sap.N_POS as sap_n_pos, sap.LGORT as sap_lgort, sap.WERKS as sap_werks, sap.sending AS sap_sending " +
                         "FROM dbo.SAP_Buffer as sap RIGHT OUTER JOIN  dbo.FuelSale as fs ON sap.id = fs.id_sap " +
                    "where fs.start_datetime >= CONVERT(datetime,'" + start.ToString("yyyy-MM-dd HH:mm:ss") + "',120) and fs.start_datetime <= CONVERT(datetime,'" + stop.ToString("yyyy-MM-dd HH:mm:ss") + "',120) " +
                    "ORDER BY fs.start_datetime";

                List<FL_Report> list = this.ef_fs.Database.SqlQuery<FL_Report>(sql).ToList();
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetFuelListOfDateTime(start={0}, stop={1})", start, stop).SaveError(e);
                return NotFound();
            }
        }
    }
}
