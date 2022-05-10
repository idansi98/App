using Microsoft.AspNetCore.Mvc;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{

    [ApiController]
    [Route("api/invitations")]
    public class apiInvitationsController : Controller
    {
        private readonly IChatService _service;

        public apiInvitationsController(IChatService service)
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
