using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
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


        // api/contacts
        [HttpGet]
        public IActionResult ShowContacts()
        {
            string result = "";
            bool firstTime = true;
            var username = HttpContext.Session.GetString("username");
            var contacts = _service.GetAllContacts(username);
            if (contacts != null)
            {
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
        public IActionResult Post(ContactToAdd contactToAdd)
        {
            var username = HttpContext.Session.GetString("username");
            Contact newContact = new Contact();
            newContact.DisplayName = contactToAdd.name;
            newContact.ID = contactToAdd.id;
            newContact.ServerAdress = contactToAdd.server;
            newContact.Messages = new List<TextMessage>();
            var result = _service.AddContactToUser(username, newContact);
            if (!result)
            {
                return NotFound();
            }
            return Created("",""); // temp?
        }



        // api/contacts/:id
        [HttpGet ("{id}")]
        public IActionResult SpecificContact(string id)
        {
            string result = "";
            var username = HttpContext.Session.GetString("username");
            var contact = _service.GetContact(username, id);
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

        [HttpPut("{id}")]
        public IActionResult Post(string id, UpdatedContact updatedContact)
        {
            var username = HttpContext.Session.GetString("username");
            bool result = _service.UpdateContact(username, updatedContact, id);
            if (!result)
            {
                return NotFound();
            }
            return NoContent();

        }
        
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var username = HttpContext.Session.GetString("username");
            bool result = _service.DeleteContact(username, id);
            if (!result)
            {
                return NotFound();
            }
            return NoContent();
        }



        // api/contacts/:id/messages
        [HttpGet("{id}/{messages}")]
        public IActionResult GetContactMessages(string id, string messages)
        {
            var username = HttpContext.Session.GetString("username");
            if (messages == null || messages != "messages")
            {
                return NotFound();
            }
            string result = "";
            var allMessages = _service.GetAllMessages(username, id);
            if (allMessages == null)
            {
                return NotFound();
            }
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

        [HttpPost("{id}/{messages}")]
        public IActionResult Post(string id, string messages, MessageToAdd messageToAdd)
        {
            var username = HttpContext.Session.GetString("username");
            if (messages == null || messages != "messages")
            {
                return NotFound();
            }
            TextMessage message = new TextMessage();
            var lastMessage = _service.getLastMessage(username, id);
            int nextID;
            if(lastMessage == null)
            {
                nextID = 0;
            } else
            {
                nextID = lastMessage.ID + 1;
            }
            message.ID = nextID;
            message.Text = messageToAdd.content;
            message.UserSent = true;
            message.Time = DateTime.Now;
            var result = _service.AddMessageToContact(username, id, message);
            if (!result)
            {
                return NotFound();
            }
            return Created("", "");

        }




        // api/contacts/:id/messages/:id2
        [HttpGet("{id}/{messages}/{id2}")]
        public IActionResult GetContactMessage(string id, string messages, int id2)
        {
            if (messages == null || messages != "messages")
            {
                return NotFound();
            }
            string result = "";
            var username = HttpContext.Session.GetString("username");

            var specificMessage = _service.GetSpecificMessage(username, id, id2);
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

        [HttpPut("{id}/{messages}/{id2}")]
        public IActionResult UpdateMessage(string id, string messages, int id2, MessageToAdd messageToAdd)
        {
            if (messages == null || messages != "messages")
            {
                return NotFound();
            }
            var username = HttpContext.Session.GetString("username");
            var result = _service.UpdateMessage(username,id,id2,messageToAdd);
            if (!result)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpDelete("{id}/{messages}/{id2}")]
        public IActionResult DeleteMessage(string id, string messages, int id2)
        {
            if (messages == null || messages != "messages")
            {
                return NotFound();
            }
            var username = HttpContext.Session.GetString("username");
            var result = _service.DeleteMessage(username, id, id2);
            if (!result)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
