using ChatWebsite.Hubs;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{

    [ApiController]
    [Route("api/transfer")]
    public class apiTransferController : Controller
    {
        private readonly IChatService _service;
        private readonly Myhub _hub;
        public apiTransferController(IChatService service)
        {
            _service = service;
            _hub = new Myhub();
        }

        [HttpPost]
        public IActionResult Post(MessageRequest messageRequest)
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
            _hub.ForceUpdateAll();
            return Created("", "");

        }


    }
}
