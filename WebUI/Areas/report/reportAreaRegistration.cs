using System.Web.Mvc;

namespace WebUI.Areas.report
{
    public class reportAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "report";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "report_default",
                "report/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "WebUI.Areas.report.Controllers" }
            );
        }
    }
}