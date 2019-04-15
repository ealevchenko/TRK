using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace WebUI
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            Application["guns"] = "";
            for (int i = 1; i <= 29; i++) { 
                Application["id_gun_"+i.ToString()] = 0;
            }
            for (int i = 1; i <= 3; i++)
            {
                Application["id_ns_" + i.ToString()] = 0;
                Application["dose_ns_" + i.ToString()] = 0;
                Application["counter_ns_" + i.ToString()] = 0;
            }
            

        }


        protected void Session_Start(object sender, EventArgs e)
        {
            // More secure than storing it application variables(does not rest on application start

            try
            {
                
                
                Application.Lock();
                int count = 0;

                if (Application["UsersCount"] != null)
                    count = (int)Application["UsersCount"];

                count++;
                Application["UsersCount"] = count;
                Session["session_id"] = count;

                // Снять закрытый доступ        
                Application.UnLock();  
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                
            }
        }

        protected void Session_End(Object sender, EventArgs e) {

            try
            {
                Application.Lock();
                int count = 0;

                if (Application["UsersCount"] != null)
                    count = (int)Application["UsersCount"];

                count--;
                Application["UsersCount"] = count;

                // Снять закрытый доступ        
                Application.UnLock();
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {

            }
        }

    }
}
