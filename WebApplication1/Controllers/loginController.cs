using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    public class loginController : Controller
    {
        public IActionResult Index()
        {
            return File("~/index.html", "text/html");
        }
    }
}
