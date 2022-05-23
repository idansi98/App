using ChatWebsite.Hubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{

    [ApiController]
    [Route("api/transfer")]
    public class apiTransferController : Controller
    {
        private readonly IChatService _service;
        private readonly IHubContext<Myhub> _hub;
        public apiTransferController(IChatService service, IHubContext<Myhub> myHub)
        {
            _service = service;
            _hub = myHub;
        }

        [HttpPost]
        public async Task<IActionResult> Post(MessageRequest messageRequest)
        {
            var user = _service.GetUser(messageRequest.to);
            if (user == null)
                return NotFound();
            var result = _service.AddMessageToContact(messageRequest);
            if (!result)
            {
                return NotFound();
            }
            //HttpContext.Connection.
            await _hub.Clients.All.SendAsync("NewMessage");
            return Created("", "");

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
