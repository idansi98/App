using ChatWebsite.Models;
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
    [Route("api/register")]
    public class apiRegistertController : Controller
    {
        private readonly IChatService _service;
        public IConfiguration _configuration;
        public apiRegistertController(IChatService service, IConfiguration config)
        {
            _service = service;
            _configuration = config;
        }

        [HttpPost]
        public async Task<IActionResult> Post(UserToCreate userToCreate)
        {
            var result = await _service.AddUser(userToCreate.ID, userToCreate.DisplayName, userToCreate.Password);
            if (!result)
            {
                return NotFound();
            }
            return Created("", "");
        }

    }
}
