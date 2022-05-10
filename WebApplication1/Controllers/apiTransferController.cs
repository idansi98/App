using Microsoft.AspNetCore.Mvc;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{

    [ApiController]
    [Route("api/transfer")]
    public class apiTransferController : Controller
    {
        private readonly IChatService _service;
        public apiTransferController(IChatService service)
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
