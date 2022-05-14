namespace WebApplication1.Models
{
    public class User
    {
        public string ID { get; set; }
        public string? Password { get; set; }
        public string DisplayName { get; set; }
        public List<Contact>? Contacts { get; set; }

        public User(string iD, string displayName, string password)
        {
            ID = iD;
            DisplayName = displayName;
            Password = password;
            Contacts = new List<Contact>();
        }
    }
}
