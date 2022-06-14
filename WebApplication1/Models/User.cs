using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class User
    {
        [Key]
        [Required]
        public string Id { get; set; }
        public string? Password { get; set; }
        public string DisplayName { get; set; }
        //public List<Contact>? Contacts { get; set; }

        public User(string Id, string displayName, string password)
        {
            this.Id = Id;
            DisplayName = displayName;
            Password = password;
            //Contacts = new List<Contact>();
        }
        public string getId()
        {
            return Id;
        }
    }
}
