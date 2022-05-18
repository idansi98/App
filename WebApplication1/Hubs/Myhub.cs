using Microsoft.AspNetCore.SignalR;
namespace ChatWebsite.Hubs
{

    public class Myhub:Hub
    {
        public async Task ForceUpdate(string connectionID)
        {
            await Clients.Client(connectionID).SendAsync("ForceUpdate");
        }
        public async Task ForceUpdateAll()
        {
            
            await Clients.All.SendAsync("ForceUpdate");
        }
        public async Task Hello()
        {
            return;
        }
    }
}
