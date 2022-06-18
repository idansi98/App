using ChatWebsite.Hubs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("api/firebase")]
    public class apiFirebase : Controller
    {
        private readonly IFirebaseService _service;


        public apiFirebase(IFirebaseService service)
        {
            _service = service;
        }


        // api/firebase
        [HttpGet]
        public async Task<IActionResult> ShowFirebaseID()
        {
            var username = HttpContext.Session.GetString("username");
            if (username == null)
                return NotFound();
            var id = await _service.GetFirebaseID(username);
            if (id == null)
            {
                return NotFound();
            }
            return Ok(id);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] string newID)
        {
            var username = HttpContext.Session.GetString("username");
            if (username == null)
                return NotFound();
            await _service.SetFirebaseID(username, newID);
            return Created("","");

        }
    }
}
