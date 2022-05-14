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
        public IActionResult Post(LoginCredentials loginCredentials)
        {
            var user = _service.GetUser(loginCredentials.username);
            if (user != null)
            {
                if(user.Password == loginCredentials.password)
                {
                    /*
                    var claims = new[]
                    {
                          new Claim(JwtRegisteredClaimNames.Sub, _configuration["JWTParams:Subject"]),
                          new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                          new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                          new Claim("UserId",username)

                      };
                    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWTParams:SecretKey"]));
                    var mac = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                    var token = new JwtSecurityToken(
                        _configuration["JWTParams:Issuer"],
                        _configuration["JWTPArams:Audiance"],
                        claims,
                        expires: DateTime.UtcNow.AddMinutes(20),
                        signingCredentials: mac);
                    */
                    HttpContext.Session.SetString("username", loginCredentials.username);
                    //return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                    return Ok("Logged in");
                }
            }
            // wrong password
            return NotFound("Wrong username or password");
        }

   







    }
}
