using WebApplication1.Models;

namespace WebApplication1.Services
{
    public interface IChatService
    {
        public List<User> GetAllUsers();
        public User GetUser(string ID);
        public List<Contact> GetAllContacts(string ID);
        public List<TextMessage> GetAllMessages(string username, string contactname);
        public TextMessage getLastMessage(string username, string contactname);
        public bool AddUser(string ID, string displayName, string password);
        public bool AddUser(User user);
        public bool AddContactToUser(string username, Contact contact);
        public bool AddMessageToContact(string username, string contactname, TextMessage textMessage);
        public Contact GetContact(User user, string contactID);
        public Contact GetContact(string username, string contactID);
        public bool UpdateContact(string userName, UpdatedContact updatedContact, string id);
        public bool DeleteContact(string username, string contactID);
        public TextMessage GetSpecificMessage(string username, string contactID, int messageID);

        public bool UpdateMessage(string username, string contactID, int messageID, MessageToAdd textMessage);
        public bool DeleteMessage(string username, string contactID, int messageID);
    }
}
