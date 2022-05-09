using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    public class RateController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
