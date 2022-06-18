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
        private readonly IFirebaseService _firebaseService;
        public apiTransferController(IChatService service, IHubContext<Myhub> myHub, IFirebaseService firebaseService)
        {
            _service = service;
            _hub = myHub;
            _firebaseService = firebaseService;
        }

        [HttpPost]
        public async Task<IActionResult> Post(MessageRequest messageRequest)
        {
            var user = await _service.GetUser(messageRequest.to);
            if (user == null)
                return NotFound();
            var result = await _service.AddMessageToContactAsync(messageRequest);
            if (!result)
            {
                return NotFound();
            }
            await _firebaseService.SendFirebaseMessage(user.Id, messageRequest.from, messageRequest.content);
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
