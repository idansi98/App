using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Contact
    {
        [Key]
        [Required]
        public string Id { get; set; }
        public string DisplayName { get; set; }
        public string ServerAddress { get; set; }
        [Key]
        public string UserId { get; set; }
        //public List<TextMessage>? Messages { get; set; }

        public string getId()
        {
            return this.Id;
        }
    }
}
