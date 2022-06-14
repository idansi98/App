using WebApplication1.Models;

namespace WebApplication1.Services
{
    public interface IChatService
    {
        public  Task<List<User>> GetAllUsers();
        public  Task<User> GetUser(string ID);
        public Task<List<Contact>> GetAllContacts(string ID);
        public Task<List<TextMessage>> GetAllMessages(string username, string contactname);
        public Task<TextMessage> GetLastMessage(string username, string contactname);
        public Task<bool> AddUser(string ID, string displayName, string password);
        public Task<bool> AddUser(User user);
        public Task<bool> AcceptInvitation(Invitation invitation);
        public Task<bool> AddContactToUser(string username, Contact contact);
        public Task<bool> AddMessageToContact(string username, string contactname, TextMessage textMessage);
        public Task<bool> AddMessageToContactAsync(MessageRequest messageRequest);
        public Task<Contact> GetContact(User user, string contactID);
        public Task<Contact> GetContact(string username, string contactID);
        public Task<bool> UpdateContact(string userName, UpdatedContact updatedContact, string id);
        public Task<bool> DeleteContact(string username, string contactID);
        public Task<TextMessage> GetSpecificMessage(string username, string contactID, int messageID);

        public Task<bool> UpdateMessage(string username, string contactID, int messageID, MessageToAdd textMessage);
        public Task<bool> DeleteMessage(string username, string contactID, int messageID);

    }
}
