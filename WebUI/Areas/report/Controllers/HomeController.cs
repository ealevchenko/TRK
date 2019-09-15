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
        // Заправочная ведомость
        public ActionResult FuelList()
        {
            return View();
        }
        // Отчет по движению топлива в емкостях АЗС
        public ActionResult FuelFlowTanks()
        {
            return View();
        }
        // Сменный отчет
        public ActionResult ShiftReport()
        {
            return View();
        }
        // Остатки
        public ActionResult Remains()
        {
            return View();
        }
        // Суточный 
        public ActionResult Daily()
        {
            return View();
        }
        // Суточный с приведением до 15
        public ActionResult Daily15()
        {
            return View();
        }
        // Суточный(Налоговый) отчет (новый)
        public ActionResult DailyAccountingReport()
        {
            return View();
        }
        // График
        public ActionResult GrafikOld()
        {
            return View();
        }
        // График
        public ActionResult Grafik()
        {
            return View();
        }
        public ActionResult StatusTanks()
        {
            return View();
        }

    }
}