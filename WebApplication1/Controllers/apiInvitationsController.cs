using ChatWebsite.Hubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{

    [ApiController]
    [Route("api/invitations")]
    public class apiInvitationsController : Controller
    {
        private readonly IChatService _service;
        private readonly IHubContext<Myhub> _hub;


        public apiInvitationsController(IChatService service, IHubContext<Myhub> myHub)
        {
            _service = service;
            _hub = myHub;

        }
        [HttpPost]
        public async Task<IActionResult> Post(Invitation invitation)
        {
            var result = _service.AcceptInvitation(invitation);
            if (!result)
            {
                return NotFound();
            }
            await _hub.Clients.All.SendAsync("NewChat");
            return Created("","");
        }
        public async Task ForceUpdate(string connectionID)
        {
            await _hub.Clients.Client(connectionID).SendAsync("ForceUpdate");
        }
        public async Task Hello()
        {
            return;
        }

    }
}
