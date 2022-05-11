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
            Ido.Contacts.Add(new Contact { ID = "1", DisplayName = "Hemi", ServerAdress = "scam.com", Messages = new List<TextMessage> { } });
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
            return GetUser(ID).Contacts;
        }

        public List<Contact> GetAllContacts(User user)
        {
            return user.Contacts;
        }

        public List<TextMessage> GetAllMessages(Contact contact)
        {
            return contact.Messages;
        }

        public TextMessage getLastMessage(Contact contact)
        {
            return contact.Messages.Last();
        }


        public void AddUser(string ID, string displayName, string password)
        {
            users.Add(new User(ID, displayName, password));
        }
        public void AddUser(User user)
        {
            users.Add(user);
        }

        public void AddContactToUser(User user, Contact contact)
        {
            user.Contacts.Add(contact);
        }

        public void AddMessageToContact(Contact contract, TextMessage textMessage)
        {
            contract.Messages.Add(textMessage);
        }

        public void AddMessageToContact(Contact contract, string messageText, bool userSent)
        {
            int id = contract.Messages.Max(x => x.ID) +1;
            contract.Messages.Add(new TextMessage {ID = id, Text = messageText, Time = DateTime.Now, UserSent = userSent});
        }




    }
}
