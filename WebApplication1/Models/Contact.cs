namespace WebApplication1.Models
{
    public class Contact
    {
        public string ID { get; set; }
        public string DisplayName { get; set; }
        public string ServerAddress { get; set; }
        public List<TextMessage>? Messages { get; set; }

        public string getLastMessageText()
        {
            if (Messages == null || Messages.Count == 0)
            {
                return string.Empty;
            }
            return Messages.Last().Text;
        }

        public DateTime getLastMessageDate()
        {
            if (Messages == null || Messages.Count == 0)
            {
                return DateTime.MinValue;
            }
            return Messages.Last().Time;
        }
    }
}
