using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using MessageLog;

namespace WebUI.Controllers.api
{
    [RoutePrefix("api/global")]
    public class GlobalController : ApiController
    {
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
                }
            }
            catch (Exception e)
            {
                // Снять закрытый доступ        
                HttpContext.Current.Application.UnLock(); 
                String.Format("Ошибка выполнения метода API:DeleteGuns(num={0})", num).SaveError(e);
            }
        }
        #endregion
    }
}
