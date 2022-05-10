using Microsoft.AspNetCore.Mvc;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{

    [ApiController]
    [Route("api/contacts")]
    public class apiContactsController : Controller
    {
        private readonly ChatService _service;

        public apiContactsController(ChatService service)
        {
            _service = service; 
        }

        [HttpGet]
        public JsonResult Index()
        {
            return Json(_service.GetAllUsers());
        }


    }
}
