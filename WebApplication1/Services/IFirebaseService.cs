using ChatWebsite.Data;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public interface IFirebaseService
    {
        public Task<string> GetFirebaseID(string username);
        public Task SetFirebaseID(string username, string firebaseID);
        public Task SendFirebaseMessage(string username, string title, string message);
        public Task<bool> hasFirebaseID(string username);
    }
}
