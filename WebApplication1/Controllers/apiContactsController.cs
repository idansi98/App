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
    [Route("api/contacts")]
    public class apiContactsController : Controller
    {
        private readonly IChatService _service;
        private readonly IHubContext<Myhub> _hub;


        public apiContactsController(IChatService service, IHubContext<Myhub> myHub)
        {
            _service = service;
            _hub = myHub;

        }


        // api/contacts
        [HttpGet]
        public async Task<IActionResult> ShowContacts()
        {
            string result = "";
            bool firstTime = true;
            var username = HttpContext.Session.GetString("username");
            var contacts = await _service.GetAllContacts(username);
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
                    result += "\"id\":\"" + contact.Id + "\",";
                    result += "\"name\":\"" + contact.DisplayName + "\",";
                    result += "\"server\":\"" + contact.ServerAddress + "\",";
                    var message = await _service.GetLastMessage(username, contact.Id);
                    if (message != null)
                    {
                        result += "\"last\":\"" + message.Text + "\",";
                        result += "\"lastdate\":\"" + message.Time.ToString("yyyy-MM-ddTHH:mm:ss.fffffff") + "\"";
                    } else
                    {
                        result += "\"last\":\"" + "" + "\",";
                        result += "\"lastdate\":\"" + "" + "\"";
                    }

                    result += "}";
                    firstTime = false;

                }
                result += "]";
            }
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Post(ContactToAdd contactToAdd)
        {
            var username = HttpContext.Session.GetString("username");
            Contact newContact = new Contact();
            newContact.DisplayName = contactToAdd.name;
            newContact.Id = contactToAdd.id;
            newContact.ServerAddress = contactToAdd.server;
            var result = await _service.AddContactToUser(username, newContact);
            if (!result)
            {
                return NotFound();
            }
            await _hub.Clients.All.SendAsync("NewChat");
            return Created("",""); // temp?

        }



        // api/contacts/:id
        [HttpGet ("{id}")]
        public async Task<IActionResult> SpecificContact(string id)
        {
            string result = "";
            var username = HttpContext.Session.GetString("username");
            var contact = await _service.GetContact(username, id);
            if (contact != null)
            {
                result += "{";
                result += "\"id\":\"" + contact.Id + "\",";
                result += "\"name\":\"" + contact.DisplayName + "\",";
                result += "\"server\":\"" + contact.ServerAddress + "\",";
                var message = await _service.GetLastMessage(username, id);
                result += "\"last\":\"" + message.Text + "\",";
                result += "\"lastdate\":\"" + message.Time.ToString("yyyy-MM-ddTHH:mm:ss.fffffff") + "\"";
                result += "}";
                return Ok(result);
            }
            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Post(string id, UpdatedContact updatedContact)
        {
            var username = HttpContext.Session.GetString("username");
            bool result = await _service.UpdateContact(username, updatedContact, id);
            if (!result)
            {
                return NotFound();
            }
            await _hub.Clients.All.SendAsync("NewChat");
            return NoContent();

        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var username = HttpContext.Session.GetString("username");
            bool result = await _service.DeleteContact(username, id);
            if (!result)
            {
                return NotFound();
            }
            await _hub.Clients.All.SendAsync("NewChat");
            return NoContent();
        }



        // api/contacts/:id/messages
        [HttpGet("{id}/{messages}")]
        public async Task<IActionResult> GetContactMessages(string id, string messages)
        {
            var username = HttpContext.Session.GetString("username");
            if (messages == null || messages != "messages")
            {
                return NotFound();
            }
            string result = "";
            var allMessages = await _service.GetAllMessages(username, id);
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
                result += "\"id\":\"" + message.Id + "\",";
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
        public async Task<IActionResult> Post(string id, string messages, MessageToAdd messageToAdd)
        {
            var username = HttpContext.Session.GetString("username");
            if (messages == null || messages != "messages")
            {
                return NotFound();
            }
            TextMessage message = new TextMessage();
            var lastMessage = await _service.GetLastMessage(username, id);
            int nextID;
            if(lastMessage == null)
            {
                nextID = 0;
            } else
            {
                nextID = lastMessage.Id + 1;
            }
            message.Id = nextID;
            message.Text = messageToAdd.content;
            message.UserSent = true;
            message.Time = DateTime.Now;
            var result = await _service.AddMessageToContact(username, id, message);
            if (!result)
            {
                return NotFound();
            }
            await _hub.Clients.All.SendAsync("NewMessage");
            return Created("", "");

        }




        // api/contacts/:id/messages/:id2
        [HttpGet("{id}/{messages}/{id2}")]
        public async Task<IActionResult> GetContactMessage(string id, string messages, int id2)
        {
            if (messages == null || messages != "messages")
            {
                return NotFound();
            }
            string result = "";
            var username = HttpContext.Session.GetString("username");

            var specificMessage = await _service.GetSpecificMessage(username, id, id2);
            if (specificMessage == null)
            {
                return NotFound();
            }
            result += "{";
            result += "\"id\":\"" + specificMessage.Id + "\",";
            result += "\"content\":\"" + specificMessage.Text + "\",";
            result += "\"created\":\"" + specificMessage.Time.ToString("yyyy-MM-ddTHH:mm:ss.fffffff") + "\",";
            result += "\"sent\":\"" + specificMessage.UserSent.ToString().ToLower() + "\"";
            result += "}";
            return Ok(result);
        }

        [HttpPut("{id}/{messages}/{id2}")]
        public async Task<IActionResult> UpdateMessage(string id, string messages, int id2, MessageToAdd messageToAdd)
        {
            if (messages == null || messages != "messages")
            {
                return NotFound();
            }
            var username = HttpContext.Session.GetString("username");
            var result = await _service.UpdateMessage(username,id,id2,messageToAdd);
            if (!result)
            {
                return NotFound();
            }
            await _hub.Clients.All.SendAsync("NewMessage");
            return NoContent();
        }

        [HttpDelete("{id}/{messages}/{id2}")]
        public async Task<IActionResult> DeleteMessage(string id, string messages, int id2)
        {
            if (messages == null || messages != "messages")
            {
                return NotFound();
            }
            var username = HttpContext.Session.GetString("username");
            var result = await _service.DeleteMessage(username, id, id2);
            if (!result)
            {
                return NotFound();
            }
            await _hub.Clients.All.SendAsync("NewMessage");
            return NoContent();
        }
    }
}
