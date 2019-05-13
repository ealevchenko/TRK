using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebUI.Areas.report.Controllers
{
    public class HomeController : Controller
    {
        // GET: report/Home
        public ActionResult Index()
        {
            return View();
        }
        // Отчет прием ГСМ
        public ActionResult ReceivingFuel()
        {
            return View();
        }
        // Протокол действия персонала и системы
        public ActionResult Logs()
        {
            return View();
        }


    }
}