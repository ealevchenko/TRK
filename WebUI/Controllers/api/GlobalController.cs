using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using MessageLog;
using EFAZS.Abstract;
using EFAZS.Entities;
using EFAZS.Concrete;

namespace WebUI.Controllers.api
{
    [RoutePrefix("api/global")]
    public class GlobalController : ApiController
    {
        public class OFS
        {
            public int num { get; set; }
            public int id { get; set; }
            public int dose { get; set; }
            public int counter { get; set; }
        }

        EFTRKLogs trk_log = new EFTRKLogs();

        #region status
        // GET: api/global/guns
        [Route("guns")]
        [ResponseType(typeof(string))]
        public IHttpActionResult GetGuns()
        {
            try
            {

                if (HttpContext.Current.Application["guns"] != null)
                {
                    string guns = (string)(object)HttpContext.Current.Application["guns"];
                    if (!String.IsNullOrWhiteSpace(guns))
                    {
                        string[] arr_guns = guns.Split(';');
                        return Ok(arr_guns.ToList());
                    }
                }
                return Ok(new List<string>());
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetGuns()").SaveError(e);
                return NotFound();
            }
        }

        // POST api/global/guns
        [HttpPost]
        [Route("guns")]
        public void PostGuns([FromBody]int value)
        {
            try
            {
                // Закрытый доступ        
                HttpContext.Current.Application.Lock();
                if (HttpContext.Current.Application["guns"] != null)
                {
                    string guns = (string)(object)HttpContext.Current.Application["guns"];
                    if (String.IsNullOrWhiteSpace(guns))
                    {
                        guns = value.ToString();
                    }
                    else
                    {
                        string[] arr_guns = guns.Split(';');
                        foreach (string gun in arr_guns)
                        {
                            if (gun == value.ToString()) return;
                        }
                        guns = guns + ";" + value.ToString();
                    }

                    HttpContext.Current.Application["guns"] = guns;
                    string messsage = String.Format("Добавим номер пистолета {0} в список номеров по которым идет настройка. [guns] = {1}",value,guns);
                    String.Format("[WEB-SERVER datetime: {0}] - ({1})", DateTime.Now, messsage).SaveWarning(); 
                    trk_log.AddTRKLogs(new TRKLogs()
                    {
                        ID = 0,
                        DateTime = DateTime.Now,
                        Level = 4,
                        UserName = "Web-server TRK",
                        Log = messsage
                    });
                }
                // Снять закрытый доступ        
                HttpContext.Current.Application.UnLock();

            }
            catch (Exception e)
            {
                // Снять закрытый доступ        
                HttpContext.Current.Application.UnLock();
                String.Format("Ошибка выполнения метода API:PostGuns(value={0})", value).SaveError(e);
            }
        }

        // PUT api/global/guns/5
        [HttpDelete]
        [Route("guns/{num:int}")]
        public void DeleteGuns(int num)
        {
            try
            {
                // Закрытый доступ        
                HttpContext.Current.Application.Lock();
                if (HttpContext.Current.Application["guns"] != null)
                {
                    string guns_new = "";
                    string guns = (string)(object)HttpContext.Current.Application["guns"];
                    if (!String.IsNullOrWhiteSpace(guns))
                    {
                        string[] arr_guns = guns.Split(';');
                        foreach (string gun in arr_guns)
                        {
                            if (gun != num.ToString())
                            {
                                guns_new = guns_new + gun + ";";
                            };
                        }
                        HttpContext.Current.Application["guns"] = !String.IsNullOrWhiteSpace(guns_new) ? guns_new.Remove(guns_new.Length - 1) : "";
                    }
                    string messsage = String.Format("Удалить номер пистолета {0} из списка номеров по которым идет настройка. [guns] = {1}", num, HttpContext.Current.Application["guns"]);
                    String.Format("[WEB-SERVER datetime: {0}] - ({1})", DateTime.Now, messsage).SaveWarning();
                    trk_log.AddTRKLogs(new TRKLogs()
                    {
                        ID = 0,
                        DateTime = DateTime.Now,
                        Level = 4,
                        UserName = "Web-server TRK",
                        Log = messsage
                    });
                }
                // Снять закрытый доступ        
                HttpContext.Current.Application.UnLock();
            }
            catch (Exception e)
            {
                // Снять закрытый доступ        
                HttpContext.Current.Application.UnLock();
                String.Format("Ошибка выполнения метода API:DeleteGuns(num={0})", num).SaveError(e);
            }
        }

        // PUT api/global/guns/clear
        [HttpDelete]
        [Route("guns/clear")]
        public void DeleteGuns()
        {
            try
            {
                // Закрытый доступ        
                HttpContext.Current.Application.Lock();
                if (HttpContext.Current.Application["guns"] != null)
                {
                    HttpContext.Current.Application["guns"] = "";
                }
                string messsage = String.Format("Сбросить список номеров по которым идет настройка. [guns] = {0}", HttpContext.Current.Application["guns"]);
                String.Format("[WEB-SERVER datetime: {0}] - ({1})", DateTime.Now, messsage).SaveWarning();
                trk_log.AddTRKLogs(new TRKLogs()
                {
                    ID = 0,
                    DateTime = DateTime.Now,
                    Level = 4,
                    UserName = "Web-server TRK",
                    Log = messsage
                });
                // Снять закрытый доступ        
                HttpContext.Current.Application.UnLock();
            }
            catch (Exception e)
            {
                // Снять закрытый доступ        
                HttpContext.Current.Application.UnLock();
                String.Format("Ошибка выполнения метода API:DeleteGuns()").SaveError(e);
            }
        }
        #endregion

        #region openfuelsale

        // GET: api/global/open_fuel_sale
        [Route("open_fuel_sale")]
        [ResponseType(typeof(OFS))]
        public IHttpActionResult GetOpenFuelSale()
        {
            try
            {
                List<OFS> list = new List<OFS>();
                // Закрытый доступ        
                HttpContext.Current.Application.Lock();
                // пистолеты
                for (int i = 1; i <= 29; i++)
                {
                    OFS new_ofs = new OFS()
                    {
                        num = i,
                        id = 0,
                        dose = 0,
                        counter =0
                    };

                    string key = "id_gun_" + i.ToString();
                    if (HttpContext.Current.Application[key] != null)
                    {
                        int id = (int)(object)HttpContext.Current.Application[key];
                        new_ofs.id = id;
                    }
                    list.Add(new_ofs);
                }
                // наливные стояки
                for (int i = 1; i <= 3; i++)
                {
                    OFS new_ofs = new OFS()
                    {
                        num = i+29,
                        id = 0,
                        dose = 0,
                        counter = 0
                    };
                    if (HttpContext.Current.Application["id_ns_" + i.ToString()] != null)
                    {
                        int id = (int)(object)HttpContext.Current.Application["id_ns_" + i.ToString()];
                        new_ofs.id = id;
                    }
                    if (HttpContext.Current.Application["dose_ns_" + i.ToString()] != null)
                    {
                        int dose = (int)(object)HttpContext.Current.Application["dose_ns_" + i.ToString()];
                        new_ofs.dose = dose;
                    }
                    if (HttpContext.Current.Application["counter_ns_" + i.ToString()] != null)
                    {
                        int counter = (int)(object)HttpContext.Current.Application["counter_ns_" + i.ToString()];
                        new_ofs.counter = counter;
                    }
                    list.Add(new_ofs);
                }
                // Снять закрытый доступ        
                HttpContext.Current.Application.UnLock();

                return Ok(list);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetOpenFuelSale()").SaveError(e);
                return NotFound();
            }
        }

        // POST api/global/open_fuel_sale/5
        [HttpPut]
        [Route("open_fuel_sale/{num:int}")]
        public int PutOpenFuelSale(int num, [FromBody]OFS value)
        {
            try
            {
                // Закрытый доступ        
                HttpContext.Current.Application.Lock();
                if (num > 0 && num < 30) {
                    HttpContext.Current.Application["id_gun_" + num.ToString()] = value.id;                
                }
                if (num > 29 && num < 32)
                {
                    HttpContext.Current.Application["id_ns_" + (num - 29).ToString()] = value.id;
                    HttpContext.Current.Application["dose_ns_" + (num - 29).ToString()] = value.dose;
                    HttpContext.Current.Application["counter_ns_" + (num - 29).ToString()] = value.counter;              
                }
                // Снять закрытый доступ        
                HttpContext.Current.Application.UnLock();
                return value.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:PutOpenFuelSale(num={0}, value={1})", num, value).SaveError(e);
                return -1;
            }
        }

        // PUT api/global/open_fuel_sale/clear
        [HttpDelete]
        [Route("open_fuel_sale/clear")]
        public int DeleteOpenFuelSale()
        {
            try
            {
                // Закрытый доступ        
                HttpContext.Current.Application.Lock();
                for (int i = 1; i <= 29; i++)
                {
                    HttpContext.Current.Application["id_gun_" + i.ToString()] = 0;
                }
                // Снять закрытый доступ        
                HttpContext.Current.Application.UnLock();
                return 29;
            }
            catch (Exception e)
            {
                // Снять закрытый доступ        
                HttpContext.Current.Application.UnLock();
                String.Format("Ошибка выполнения метода API:DeleteOpenFuelSale()").SaveError(e);
                return -1;
            }
        }
        #endregion

        // GET: api/global/client
        [Route("client")]
        [ResponseType(typeof(string))]
        public IHttpActionResult GetClient()
        {
            try
            {

                if (HttpContext.Current.Application["UsersCount"] != null)
                {
                    int client = (int)(object)HttpContext.Current.Application["UsersCount"];
                    return Ok(client.ToString());
                }
                return Ok("");
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода API:GetClient()").SaveError(e);
                return NotFound();
            }
        }
    }
}
