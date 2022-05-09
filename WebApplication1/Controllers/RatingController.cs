using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    public class RatingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
