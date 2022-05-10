using WebApplication1.Models;

namespace WebApplication1.Services
{
    public interface IChatService
    {
        public List<User> GetAllUsers();
        public User GetUser(string ID);
        public List<Contact> GetAllContacts(string ID);
        public List<Contact> GetAllContacts(User user);
        public List<TextMessage> GetAllMessages(Contact contact);
        public TextMessage getLastMessage(Contact contact);
        public void AddUser(string ID, string displayName, string password);
        public void AddUser(User user);
        public void AddContactToUser(User user, Contact contact);
        public void AddMessageToContact(Contact contract, TextMessage textMessage);
        public void AddMessageToContact(Contact contract, string messageText, bool userSent);
    }
}
