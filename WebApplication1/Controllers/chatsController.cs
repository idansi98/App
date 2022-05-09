using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    public class chatsController : Controller
    {
        public IActionResult Index()
        {
            return View("~/Views/Home/index.cshtml");
        }
    }
}
