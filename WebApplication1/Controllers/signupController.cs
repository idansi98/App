using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    public class signupController : Controller
    {
        public IActionResult Index()
        {
            return RedirectToAction("", "Home");
        }
    }
}
