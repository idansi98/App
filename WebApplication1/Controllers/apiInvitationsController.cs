using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
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
        [HttpPost]
        public IActionResult Post(Invitation invitation)
        {
            var result = _service.AcceptInvitation(invitation);
            if (!result)
            {
                return NotFound();
            }
            return Created("","");

        }


    }
}
