namespace WebApplication1.Models
{
    public class Chat
    {
        public int ID { get; set; }
        public List<User> Users { get; set; }
        public List<TextMessage> Messages { get; set; }
    }
}
