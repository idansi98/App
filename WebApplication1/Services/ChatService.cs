#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;
namespace WebApplication1.Services
{
    public class ChatService : IChatService
    {
        private static List<User> users;

        public ChatService()
        {
            users = new List<User>();
            User Ido = new User("1", "Ido", "2");
            User Idan = new User("2", "Idan", "3");
            User Hemi = new User("3", "Hemi", "4");
            users.Add(Ido);
            users.Add(Idan);
            users.Add(Hemi);
            Ido.Contacts.Add(new Contact { ID = "1", DisplayName = "Yosi", ServerAdress = "scam.com", Messages = new List<TextMessage> { } });
            Ido.Contacts.Add(new Contact { ID = "2", DisplayName = "Hemi", ServerAdress = "scam.com", Messages = new List<TextMessage> { } });
            Idan.Contacts.Add(new Contact { ID = "1", DisplayName = "Yosi2", ServerAdress = "scam.com", Messages = new List<TextMessage> { } });
            Hemi.Contacts.Add(new Contact { ID = "1", DisplayName = "Yosi3", ServerAdress = "scam.com", Messages = new List<TextMessage> { } });
            Ido.Contacts.First().Messages.Add(new TextMessage { Text = "Hello I am not scamming", ID = 1, Time = DateTime.Now, UserSent = false });
            Ido.Contacts.First().Messages.Add(new TextMessage { Text = "Go away", ID = 2, Time = DateTime.Now, UserSent = true });
            Idan.Contacts.First().Messages.Add(new TextMessage { Text = "Hello I am not scamming", ID = 1, Time = DateTime.Now, UserSent = false });
            Idan.Contacts.First().Messages.Add(new TextMessage { Text = "Hello I am not scamming", ID = 1, Time = DateTime.Now, UserSent = false });

        }
        public List<User> GetAllUsers()
        {
            return users;
        }
        public User GetUser(string ID)
        {
            return users.Find(x => x.ID == ID);
        }

        public List<Contact> GetAllContacts(string ID)
        {
            var user = GetUser(ID);
            if (user == null || user.Contacts == null)
            {
                return null;
            }
            return user.Contacts;
        }



        public List<TextMessage> GetAllMessages(string username, string contactname)
        {
            var user = GetUser(username);
            if (user == null)
                return null;
            var contact = user.Contacts.Find(x => x.ID == contactname);
            if (contact == null)
                return null;
            return contact.Messages;
        }

        public TextMessage getLastMessage(string username, string contactname)
        {
            var messages = GetAllMessages(username, contactname);
            if (messages == null)
                return null;
            return messages.Last();
        }


        public bool AddUser(string ID, string displayName, string password)
        {
            if(!AddUser(new User(ID, displayName, password))) // if failed
            {
                return false;
            }
            return true;
        }
        public bool AddUser(User user)
        {
            var found = GetUser(user.ID);
            if(found != null) // return false if another used exists
            {
                return false; 
            }
            users.Add(user);
            return true;
        }

        public bool AddContactToUser(string username, Contact contact)
        {
            var user = GetUser(username);
            if (user == null || user.Contacts == null)
                return false;
            user.Contacts.Add(contact);
            return true;
        }

        public bool AddMessageToContact(string username, string contactname, TextMessage textMessage)
        {
            var contact = GetContact(username, contactname);
            if (contact == null)
                return false;
            contact.Messages.Add(textMessage);
            return true;
        }

        public Contact GetContact(User user, string contactID)
        {
            var contact = user.Contacts.Find(x => x.ID == contactID);
            return contact;
        }

        public Contact GetContact(string username, string contactID)
        {
            var user = GetUser(username);
            if(user == null)
            {
                return null;
            }
            var contact = user.Contacts.Find(x => x.ID == contactID);
            return contact;
        }

        public bool UpdateContact(string userName, UpdatedContact updatedContact, string id)
        {
            var user = GetUser(userName);
            if (user == null || user.Contacts == null)
                return false;
            var contact = GetContact(user, id);
            if (contact == null)
                return false;
            contact.DisplayName = updatedContact.name;
            contact.ServerAdress = updatedContact.server;
            return true;
        }

        public bool DeleteContact(string username, string contactID)
        {
            var user = GetUser(username);
            if (user == null || user.Contacts == null)
                return false;
            var contact = GetContact(user, contactID);
            if (contact == null)
                return false;
            user.Contacts.Remove(contact);
            return true;
        }

        public TextMessage GetSpecificMessage(string username, string contactID, int messageID)
        {
            var messages = GetAllMessages(username, contactID);
            if (messages == null)
            {
                return null;
            }
            return messages.Find(x=> x.ID == messageID);
        }

        public bool UpdateMessage(string username,string contactID, int messageID, MessageToAdd textMessage)
        {
            var originalMessage = GetSpecificMessage(username, contactID, messageID);
            if (originalMessage == null)
            {
                return false;
            }
            originalMessage.Text = textMessage.content;
            return true;
        }

        public bool DeleteMessage(string username, string contactID, int messageID)
        {
            var messageToRemove = GetSpecificMessage(username, contactID, messageID);
            if (messageToRemove == null)
            {
                return false;
            }
            var contact = GetContact(username, contactID);
            contact.Messages.Remove(messageToRemove);
            return true;
        }

    }

  
}
