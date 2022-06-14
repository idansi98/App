#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatWebsite.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;
namespace WebApplication1.Services
{
    public class ChatService : IChatService
    {
        //private static List<User> users;
        private readonly WebApp1Context _context;

        public ChatService(WebApp1Context context)
        {
            //users = new List<User>();
            _context = context;
            /*User Ido = new User("1", "Ido", "2");
            User Idan = new User("2", "Idan", "3");
            User Hemi = new User("3", "Hemi", "4");
            User Tester = new User("5", "Tester!", "6");
            User Tester2 = new User("6", "Tester!", "6");
            User Tester3 = new User("7", "Tester!", "6");
            User Tester4 = new User("8", "Tester!", "6");
            User Tester5 = new User("9", "Idadnasd", "15");
            _context.Users.Add(Ido);
            _context.Users.Add(Idan);
            _context.Users.Add(Hemi);
            _context.Users.Add(Tester);
            _context.Users.Add(Tester2);
            _context.Users.Add(Tester3);
            _context.Users.Add(Tester4);
            _context.SaveChangesAsync();
            Ido.Contacts.Add(new Contact { ID = "556", DisplayName = "DEMO CHAT", UserId = Ido.ID,ServerAddress = "scam.com", Messages = new List<TextMessage> { } });
            Ido.Contacts.Add(new Contact { ID = "66", DisplayName = "DEMO CHAT 2", UserId = Ido.ID, ServerAddress = "scam.com", Messages = new List<TextMessage> { } });
            Idan.Contacts.Add(new Contact { ID = "77", DisplayName = "DEMO CHAT", UserId = Idan.ID, ServerAddress = "scam.com", Messages = new List<TextMessage> { } });
            Hemi.Contacts.Add(new Contact { ID = "88", DisplayName = "DEMO CHAT", UserId = Hemi.ID, ServerAddress = "scam.com", Messages = new List<TextMessage> { } });
            _context.Update(Ido);
            _context.Update(Idan);
            _context.Update(Hemi);
            _context.SaveChangesAsync();
            Ido.Contacts.First().Messages.Add(new TextMessage { Text = "Hello I am not scamming", ID = 1, Time = DateTime.Now, UserSent = false,
            UserId = Ido.ID, ContactId = Ido.Contacts.First().ID});
            Ido.Contacts.First().Messages.Add(new TextMessage { Text = "Go away", ID = 2, Time = DateTime.Now, UserSent = true,
            UserId = Ido.ID, ContactId = Ido.Contacts.First().ID});
            Idan.Contacts.First().Messages.Add(new TextMessage { Text = "Hello I am not scamming", ID = 1, Time = DateTime.Now, UserSent = false,
            UserId = Idan.ID, ContactId = Idan.Contacts.First().ID});
            Idan.Contacts.First().Messages.Add(new TextMessage { Text = "Hello I am not scamming", ID = 1, Time = DateTime.Now, UserSent = false,
            UserId = Idan.ID, ContactId = Idan.Contacts.First().ID});
            _context.Update(Ido.Contacts.First());
            _context.Update(Idan.Contacts.First());
            _context.Update(Hemi.Contacts.First());
            _context.SaveChangesAsync();
            _context.Update(Idan);
            _context.Update(Ido);
            _context.Update(Hemi);
            _context.SaveChangesAsync();*/

        }
        public async Task<List<User>> GetAllUsers()
        {
            return await _context.Users.ToListAsync();
        }
        public async Task<User> GetUser(string id)
        {
            if (id == null)
            {
                return null;
            }

            var user = await _context.Users.Include(us => us.Contacts).FirstOrDefaultAsync(us => us.ID.Equals(id));

            return user;
        }

        public async Task<List<Contact>> GetAllContacts(string ID)
        {
            var user = await GetUser(ID);
            if (user == null || user.Contacts == null)
            {
                return null;
            }
            return user.Contacts;
        }



        public async Task<List<TextMessage>> GetAllMessages(string username, string contactname)
        {
            var user = await GetUser(username);
            if (user == null)
                return null;
            var contact = user.Contacts.Find(x => x.ID == contactname);
            if (contact == null)
                return null;
            return contact.Messages;
        }

        public async Task<TextMessage> getLastMessage(string username, string contactname)
        {
            var messages = await GetAllMessages(username, contactname);
            if (messages == null || messages.Count == 0)
                return null;
            return messages.Last();
        }

        //
        public async Task<bool> AddUser(string ID, string displayName, string password)
        {
            if(! await AddUser(new User(ID, displayName, password))) // if failed
            {
                return false;
            }
            await _context.Users.AddAsync(new User(ID, displayName, password));
            await _context.SaveChangesAsync();
            return true;
        }
        //
        public async Task<bool> AddUser(User user)
        {
            var found = await GetUser(user.ID);
            if(found != null) // return false if another used exists
            {
                return false; 
            }
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return true;
        }

        //
        public async Task<bool> AcceptInvitation(Invitation invitation)
        {
            //get the username we want to accept the invitation.
            var user = await GetUser(invitation.to);
            if (user == null || user.Contacts == null)
                return false;

            //check there isnt same ID 
            var contactsList = await GetAllContacts(user.ID);
            var getDuplicate = contactsList.Find(x => x.ID == invitation.from);
            if (getDuplicate != null)
                return false;
            // if new
            var contact = new Contact();
            contact.ID = invitation.from;
            contact.DisplayName = invitation.from;
            contact.ServerAddress = invitation.server;
            contact.Messages = new List<TextMessage>();
            user.Contacts.Add(contact);
            _context.Update(user);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> AddContactToUser(string username, Contact contact)
        {
            var user = await GetUser(username);
            if (user == null || user.Contacts == null)
                return false;

            //check there isnt same ID 
            var contactsList = await GetAllContacts(username);
            var getDuplicate = contactsList.Find(x => x.ID == contact.ID);
            if (getDuplicate != null)
            {
                return false;
            }
            // if new
            user.Contacts.Add(contact);
            _context.Update(user);
            await _context.SaveChangesAsync();
            return true;
        }


        public async Task<bool> AddMessageToContact(string username, string contactname, TextMessage textMessage)
        {
            var contact =  await GetContact(username, contactname);
            if (contact == null)
                return false;
            if (contact.Messages == null)
            {
                contact.Messages = new List<TextMessage>();
            }
            contact.Messages.Add(textMessage);
            _context.Update(contact);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> AddMessageToContactAsync(MessageRequest messageRequest)
        {
            var user = await GetUser(messageRequest.to);
            if (user == null)
                return false;
            var contact = await GetContact(user.ID, messageRequest.from);
            if (contact == null)
                return false;
            TextMessage textMessage = new TextMessage();
            textMessage.Text = messageRequest.content;
            textMessage.UserSent = false;
            var lastMessage = await getLastMessage(user.ID, contact.ID);
            if (lastMessage == null)
            {
                textMessage.ID = 0;
            } else
            {
                textMessage.ID = lastMessage.ID + 1;
            }
            textMessage.Time = DateTime.Now;
            var result = await AddMessageToContact(user.ID, contact.ID, textMessage);
            await _context.SaveChangesAsync();
            if (!result)
            {
                return false;
            }
           
            return true;
        }

        public async Task<Contact> GetContact(User user, string contactID)
        {
            var contacsList = await GetAllContacts(user.ID);
            return contacsList.FirstOrDefault(us => us.ID.Equals(contactID));
        }

        public async Task<Contact> GetContact(string username, string contactID)
        {
            var user =  await GetUser(username);
            if(user == null)
            {
                return null;
            }
            var contact = user.Contacts.FirstOrDefault(us => us.ID.Equals(contactID));
            return contact;
        }

        public async Task<bool> UpdateContact(string userName, UpdatedContact updatedContact, string id)
        {
            var user = await GetUser(userName);
            if (user == null || user.Contacts == null)
                return false;
            var contact = await GetContact(user, id);
            if (contact == null)
                return false;
            contact.DisplayName = updatedContact.name;
            contact.ServerAddress = updatedContact.server;
            _context.Update(user);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteContact(string username, string contactID)
        {
            var user = await GetUser(username);
            if (user == null || user.Contacts == null)
                return false;
            var contact = await GetContact(user, contactID);
            if (contact == null)
                return false;
            user.Contacts.Remove(contact);
            _context.Remove(contact);
            _context.Update(contact);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<TextMessage> GetSpecificMessage(string username, string contactID, int messageID)
        {
            var messages = await GetAllMessages(username, contactID);
            if (messages == null)
            {
                return null;
            }
            return messages.FirstOrDefault(x=> x.ID == messageID);
        }

        public async Task<bool> UpdateMessage(string username,string contactID, int messageID, MessageToAdd textMessage)
        {
            var originalMessage = await GetSpecificMessage(username, contactID, messageID);
            if (originalMessage == null)
            {
                return false;
            }
            originalMessage.Text = textMessage.content;
            _context.Update(await GetContact(username, contactID));
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteMessage(string username, string contactID, int messageID)
        {
            var messageToRemove = await GetSpecificMessage(username, contactID, messageID);
            if (messageToRemove == null)
            {
                return false;
            }
            var contact = await GetContact(username, contactID);
            contact.Messages.Remove(messageToRemove);
            _context.Remove(contact);
            _context.Update(contact);
            await _context.SaveChangesAsync();

            return true;
        }


    }


}
