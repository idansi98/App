using Microsoft.AspNetCore.Mvc;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{

    [ApiController]
    [Route("api/invitations")]
    public class apiInvitationsController : Controller
    {
        private readonly ChatService _service;

        public apiInvitationsController(ChatService service)
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
