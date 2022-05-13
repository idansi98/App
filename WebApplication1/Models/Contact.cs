namespace WebApplication1.Models
{
    public class Contact
    {
        // need to make a serperate key for internal useage since ID can be shared between servers
        public int key { get; set; }
        public string ID { get; set; }
        public string DisplayName { get; set; }
        public string ServerAdress { get; set; }
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
