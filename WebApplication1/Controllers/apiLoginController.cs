using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{

    [ApiController]
    [Route("api/login")]
    public class apiLoginController : Controller
    {
        private readonly IChatService _service;
        public IConfiguration _configuration;
        public apiLoginController(IChatService service, IConfiguration config)
        {
            _service = service; 
            _configuration = config;
        }

        [HttpPost]
        public async Task<IActionResult> Post(LoginCredentials loginCredentials)
        {
            var user = await _service.GetUser(loginCredentials.username);
            if (user != null)
            {
                if(user.Password == loginCredentials.password)
                {
                    HttpContext.Session.SetString("username", loginCredentials.username);
                    string ip = Request.Host.Host;
                    string port = Request.Host.Port.Value.ToString();
                    string url = "http://" + ip + "/" + port;
                    return Ok(url);
                }
            }
            // wrong password
            return NotFound("Wrong username or password");
        }
    }
}
