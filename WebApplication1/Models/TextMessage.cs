namespace WebApplication1.Models
{
    public class TextMessage
    {
        public int ID { get; set; }
        public string Text { get; set; }
<<<<<<< HEAD
        public User Sender { get; set; }
        public DateTime DateTime { get; set; }
=======
        public bool UserSent { get; set; }
        public DateTime Time { get; set; } = DateTime.Now;
>>>>>>> ae7cfc7636ba8dded35ef9ab65270b4a146fad5d
    }
}
