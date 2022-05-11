using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("api/self")]
    public class apiSelfController : Controller
    {
        private readonly IChatService _service;

        public apiSelfController(IChatService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult ShowSelf()
        {
            string result = "";
            var username = HttpContext.Session.GetString("username");
            if (username == null)
            {
                return NotFound();
            }
            var user = _service.GetUser(username);
            if (user != null)
            {
                result += "{";
                result += "\"id\":\"" + user.ID + "\",";
                result += "\"name\":\"" + user.DisplayName + "\"";
                result += "}";
            }
            return Ok(result);
        }

     

    }
}
