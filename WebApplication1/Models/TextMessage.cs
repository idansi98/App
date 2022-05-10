namespace WebApplication1.Models
{
    public class TextMessage
    {
        public int ID { get; set; }
        public string Text { get; set; }
        public bool UserSent { get; set; }
        public DateTime Time { get; set; } = DateTime.Now;
    }
}
