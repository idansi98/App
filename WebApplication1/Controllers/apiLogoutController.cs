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
    [Route("api/logout")]
    public class apiLogoutController : Controller
    {
        private readonly IChatService _service;
        public IConfiguration _configuration;
        public apiLogoutController(IChatService service, IConfiguration config)
        {
            _service = service; 
            _configuration = config;
        }

        [HttpGet]
        public IActionResult LogOut()
        {
            HttpContext.Session.Clear();
            return Ok();
        }

    }
}
