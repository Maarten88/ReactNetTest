using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Rnt.Web.Controllers
{
    [Route("/[action]")]
    public class HomeController : Controller
    {
        static int count = 0;

        [Route("/")]
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult React()
        {
            return View(new { modelData = ++count, stringData = "initialData from Controller" });
        }

        public IActionResult ApiCall()
        {
            return Json(new { modelData = ++count, stringData = "ApiCall data from Controller" });
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
