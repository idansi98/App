#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatWebsite.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
namespace WebApplication1.Services
{
    public class ChatService : IChatService
    {
        //private static List<User> users;
        private readonly WebApp1Context _context;

        public ChatService(WebApp1Context context)
        {
            _context = context;
        }

        public async Task<bool> Begin() {
            /*User Ido = new User("1", "Ido", "2");
            User Idan = new User("2", "Idan", "3");
            User Hemi = new User("3", "Hemi", "4");
            User Tester = new User("5", "Tester!", "6");
            User Tester2 = new User("6", "Tester!", "6");
            User Tester3 = new User("7", "Tester!", "6");
            User Tester4 = new User("8", "Tester!", "6");
            User Tester5 = new User("9", "Idadnasd", "15");
            await _context.Users.AddAsync(Ido);
            await _context.Users.AddAsync(Idan);
            await _context.Users.AddAsync(Hemi);
            await _context.Users.AddAsync(Tester);
            await _context.Users.AddAsync(Tester2);
            await _context.Users.AddAsync(Tester3);
            await _context.Users.AddAsync(Tester4);
            await _context.Users.AddAsync(Tester5);
            _context.Update(Ido);
            _context.Update(Idan);
            _context.Update(Hemi);
            _context.Update(Tester);
            _context.Update(Tester2);
            _context.Update(Tester3);
            _context.Update(Tester4);
            _context.Update(Tester5);
            await _context.SaveChangesAsync();*/
            var cont1 = new Contact { Id = "555", DisplayName = "DEMO CHAT", UserId = "1", ServerAddress = "scam.com" };
            var cont2 = new Contact { Id = "66", DisplayName = "DEMO CHAT 2", UserId = "1", ServerAddress = "scam.com" };
            var cont3 = new Contact { Id = "77", DisplayName = "DEMO CHAT", UserId = "2", ServerAddress = "scam.com" };
            var cont4 = new Contact { Id = "88", DisplayName = "DEMO CHAT", UserId = "3", ServerAddress = "scam.com" };
            await _context.Contacts.AddAsync(cont1);
            await _context.Contacts.AddAsync(cont2);
            await _context.Contacts.AddAsync(cont3);
            await _context.Contacts.AddAsync(cont4);
            //_context.Update(cont1);
            //_context.Update(cont2);
            //_context.Update(cont3);
            //_context.Update(cont4);
            await _context.SaveChangesAsync();
            var message1 = new TextMessage
            { Text = "Hello I am not scamming", Id = 1, Time = DateTime.Now, UserSent = false, UserId = "1", ContactId = cont1.Id };
            var message2 = new TextMessage
            { Text = "Go away", Id = 2, Time = DateTime.Now, UserSent = true, UserId = "1", ContactId = cont1.Id };
            var message3 = new TextMessage
            { Text = "Go away", Id = 3, Time = DateTime.Now, UserSent = true, UserId = "1", ContactId = cont1.Id };
            var message4 = new TextMessage
            { Text = "Hello I am not scamming", Id = 1, Time = DateTime.Now, UserSent = false, UserId = "2", ContactId = cont3.Id };
            var message5 = new TextMessage
            { Text = "Hello I am not scamming", Id = 2, Time = DateTime.Now, UserSent = false, UserId = "2", ContactId = cont3.Id };
            await _context.AddAsync(message1);
            await _context.AddAsync(message2);
            await _context.AddAsync(message3);
            await _context.AddAsync(message4);
            await _context.AddAsync(message5);
            await _context.SaveChangesAsync();
            return true;
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

            var user = await _context.Users.FirstOrDefaultAsync(m => m.Id == id);
            return user;
        }

        public async Task<List<Contact>> GetAllContacts(string ID)
        {
            var user = await GetUser(ID);
            if (user == null)
            {
                return null;
            }
            var q = from contact in _context.Contacts
                    where contact.UserId.Equals(ID)
                    select contact;
            return await q.ToListAsync();
        }



        public async Task<List<TextMessage>> GetAllMessages(string username, string contactname)
        {
            var user = await GetUser(username);
            if (user == null)
                return null;
            var contact = await GetContact(username, contactname);
            if (contact == null)
                return null;
            var m = from message in _context.Messages
                    where message.UserId.Equals(user.Id)
                    where message.ContactId.Equals(contact.Id)
                    select message;
            return await m.ToListAsync();
           

        }

        public async Task<TextMessage> GetLastMessage(string username, string contactname)
        {
            var messages = await GetAllMessages(username, contactname);
            if (messages == null || messages.Count == 0)
                return null;
            return messages.Last();
        }

        //
        public async Task<bool> AddUser(string ID, string displayName, string password)
        {
           return await AddUser(new User(ID, displayName, password));
        }
        //
        public async Task<bool> AddUser(User user)
        {
            var found = await GetUser(user.Id);
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
            if (user == null)
                return false;
            var list = await GetAllContacts(user.Id);
            //check there isnt same ID 
            var contactsList = await GetAllContacts(user.Id);
            var getDuplicate = contactsList.Find(x => x.Id == invitation.from);
            if (getDuplicate != null)
                return false;
            // if new
            var contact = new Contact();
            contact.Id = invitation.from;
            contact.DisplayName = invitation.from;
            contact.ServerAddress = invitation.server;
            contact.UserId = user.Id;
            await _context.Contacts.AddAsync(contact);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> AddContactToUser(string username, Contact contact)
        {
            var user = await GetUser(username);
            if (user == null)
                return false;
            var list = await GetAllContacts(user.Id);
            //check there isnt same ID 
            var getDuplicate = list.Find(x => x.Id == contact.Id);
            if (getDuplicate != null)
            {
                return false;
            }
            // if new
            contact.UserId = user.Id;
            await _context.Contacts.AddAsync(contact);
            await _context.SaveChangesAsync();
            return true;
        }


        public async Task<bool> AddMessageToContact(string username, string contactname, TextMessage textMessage)
        {
            var user = await GetUser(username);
            if (user == null)
            {
                return false;
            }
            var contact =  await GetContact(username, contactname);
            if (contact == null)
            {
                return false;
            }
            textMessage.UserId = user.Id;
            textMessage.ContactId = contact.Id;
            await _context.Messages.AddAsync(textMessage);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> AddMessageToContactAsync(MessageRequest messageRequest)
        {
            var user = await GetUser(messageRequest.to);
            if (user == null)
                return false;
            var contact = await GetContact(user.Id, messageRequest.from);
            if (contact == null)
                return false;
            TextMessage textMessage = new TextMessage();
            textMessage.Text = messageRequest.content;
            textMessage.UserSent = false;
            var lastMessage = await GetLastMessage(user.Id, contact.Id);
            if (lastMessage == null)
            {
                textMessage.Id = 0;
            } else
            {
                textMessage.Id = lastMessage.Id + 1;
            }
            textMessage.Time = DateTime.Now;
            textMessage.UserId = user.Id;
            textMessage.ContactId = contact.Id;
            var result = await AddMessageToContact(user.Id, contact.Id, textMessage);
            await _context.SaveChangesAsync();
            if (!result)
            {
                return false;
            }
           
            return true;
        }

        public async Task<Contact> GetContact(User user, string contactID)
        {
            var contacsList = await GetAllContacts(user.Id);
            return contacsList.FirstOrDefault(us => us.Id.Equals(contactID));
        }

        public async Task<Contact> GetContact(string username, string contactID)
        {
            var user =  await GetUser(username);
            if(user == null)
            {
                return null;
            }
            var contacsList = await GetAllContacts(user.Id);
            return contacsList.FirstOrDefault(cont => cont.Id.Equals(contactID));
        }

        public async Task<bool> UpdateContact(string userName, UpdatedContact updatedContact, string id)
        {
            var user = await GetUser(userName);
            if (user == null)
                return false;
            var list = await GetAllContacts(user.Id);
            if (list == null)
                return false;
            var contact = await GetContact(user, id);
            if (contact == null)
                return false;
            contact.DisplayName = updatedContact.name;
            contact.ServerAddress = updatedContact.server;
            contact.UserId = user.Id;
            await _context.AddAsync(contact);
            _context.Update(contact);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteContact(string username, string contactID)
        {
            var user = await GetUser(username);
            if (user == null)
                return false;
            var list = await GetAllContacts(user.Id);
            if (list == null)
                return false;
            var contact = await GetContact(user, contactID);
            if (contact == null)
                return false;
            _context.Remove(contact);
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
            return messages.FirstOrDefault(x=> x.Id == messageID);
        }

        public async Task<bool> UpdateMessage(string username,string contactID, int messageID, MessageToAdd textMessage)
        {
            var originalMessage = await GetSpecificMessage(username, contactID, messageID);
            if (originalMessage == null)
            {
                return false;
            }
            originalMessage.Text = textMessage.content;
            _context.Update(originalMessage);
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
            _context.Messages.Remove(messageToRemove);
            await _context.SaveChangesAsync();

            return true;
        }


    }


}
