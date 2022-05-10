using Microsoft.AspNetCore.Mvc;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{

    [ApiController]
    [Route("api/contacts")]
    public class apiContactsController : Controller
    {
        private readonly IChatService _service;

        public apiContactsController(IChatService service)
        {
            _service = service; 
        }

        [HttpGet]
        public JsonResult Index()
        {
            return Json(_service.GetAllUsers());
        }


        [HttpGet ("{id}")]
        public JsonResult SpecificUser(string id)
        {
            return Json(_service.GetUser(id));
        }


    }
}
