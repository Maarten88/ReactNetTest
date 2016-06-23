using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace Rnt.Web.Controllers
{
    public class ReactModel
    {
        public int modelData { get; set; }
        public string stringData { get; set; }
    }

    [Route("/[action]")]
    public class HomeController : Controller
    {
        IMemoryCache memoryCache;
        public HomeController(IMemoryCache memoryCache)
        {
            this.memoryCache = memoryCache;
        }

        static int count = 0;

        [Route("/")]
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult React()
        {
            return View(new ReactModel { modelData = ++count, stringData = "initialData from Controller" });
        }

        public IActionResult ApiCall()
        {
            return Json(new ReactModel { modelData = ++count, stringData = "ApiCall data from Controller" });
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
