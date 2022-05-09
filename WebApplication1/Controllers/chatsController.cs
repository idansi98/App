using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    public class chatsController : Controller
    {
        public IActionResult Index()
        {
            return RedirectToAction("", "Home");
        }
    }
}
