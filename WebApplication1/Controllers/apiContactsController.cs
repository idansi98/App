using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("api/contacts")]
    public class apiContactsController : Controller
    {
        private readonly IChatService _service;

        public apiContactsController(IChatService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult ShowContacts()
        {
            string result = "";
            bool firstTime = true;
            var username = HttpContext.Session.GetString("username");
            if (username == null)
            {
                return NotFound();
            }
            var user = _service.GetUser(username);
            if (user != null)
            {
                var contacts = _service.GetAllContacts(username);
                result = "[";
                foreach (var contact in contacts)
                {
                    if (!firstTime)
                    {
                        result += ",";
                    }
                    result += "{";
                    result += "\"id\":\"" + contact.ID + "\",";
                    result += "\"name\":\"" + contact.DisplayName + "\",";
                    result += "\"server\":\"" + contact.ServerAdress + "\",";
                    result += "\"last\":\"" + contact.getLastMessageText() + "\",";
                    result += "\"lastdate\":\"" + contact.getLastMessageDate().ToString("yyyy-MM-ddTHH:mm:ss.fffffff") + "\"";
                    result += "}";
                    firstTime = false;

                }
                result += "]";
            }
            return Ok(result);
        }

        [HttpPost]
        public IActionResult CreateContact()
        {
            return Ok();
        }


        [HttpGet ("{id}")]
        public IActionResult SpecificContact(string id)
        {
            string result = "";
            var username = HttpContext.Session.GetString("username");
            if (username == null)
            {
                return NotFound();
            }
            var user = _service.GetUser(username);
            if (user == null || user.Contacts == null)
            {
                return NotFound();
            }
            var contact = user.Contacts.Find (x => x.ID == id);
            if (contact != null)
            {
                result += "{";
                result += "\"id\":\"" + contact.ID + "\",";
                result += "\"name\":\"" + contact.DisplayName + "\",";
                result += "\"server\":\"" + contact.ServerAdress + "\",";
                result += "\"last\":\"" + contact.getLastMessageText() + "\",";
                result += "\"lastdate\":\"" + contact.getLastMessageDate().ToString("yyyy-MM-ddTHH:mm:ss.fffffff") + "\"";
                result += "}";

            }
            return Ok(result);
        }


        [HttpGet("{id}/{messages}")]
        public IActionResult GetContactMessages(string id, string messages)
        {
            if (messages == null || messages != "messages")
            {
                return NotFound();
            }
            string result = "";
            var username = HttpContext.Session.GetString("username");
            if (username == null)
            {
                return NotFound();
            }
            var user = _service.GetUser(username);
            if (user == null || user.Contacts == null)
            {
                return NotFound();
            }
            var contact = user.Contacts.Find(x => x.ID == id);
            if (contact == null)
            {
                return NotFound();
            }
            var allMessages = _service.GetAllMessages(contact);
            bool firstTime = true;
            result += "[";

            foreach (var message in allMessages)
            {
                if (!firstTime)
                {
                    result += ",";
                }
                result += "{";
                result += "\"id\":\"" + message.ID + "\",";
                result += "\"content\":\"" + message.Text + "\",";
                result += "\"created\":\"" + message.Time.ToString("yyyy-MM-ddTHH:mm:ss.fffffff") + "\",";
                result += "\"sent\":\"" + message.UserSent.ToString().ToLower() + "\"";
                result += "}";
                firstTime = false;
            }
            result += "]";

            return Ok(result);
        }

        [HttpGet("{id}/{messages}/{id2}")]
        public IActionResult GetContactMessages(string id, string messages, string id2)
        {
            if (messages == null || messages != "messages")
            {
                return NotFound();
            }
            string result = "";
            var username = HttpContext.Session.GetString("username");
            if (username == null)
            {
                return NotFound();
            }
            var user = _service.GetUser(username);
            if (user == null|| user.Contacts == null)
            {
                return NotFound();
            }
            var contact = user.Contacts.Find(x => x.ID == id);
            if (contact == null)
            {
                return NotFound();
            }
            var allMessages = _service.GetAllMessages(contact);
            var specificMessage = allMessages.Find(x => x.ID.ToString() == id2);
            if (specificMessage == null)
            {
                return NotFound();
            }
            result += "{";
            result += "\"id\":\"" + specificMessage.ID + "\",";
            result += "\"content\":\"" + specificMessage.Text + "\",";
            result += "\"created\":\"" + specificMessage.Time.ToString("yyyy-MM-ddTHH:mm:ss.fffffff") + "\",";
            result += "\"sent\":\"" + specificMessage.UserSent.ToString().ToLower() + "\"";
            result += "}";

            return Ok(result);
        }


    }
}
