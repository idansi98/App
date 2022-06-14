using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class TextMessage
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public string Text { get; set; }
        public bool UserSent { get; set; }
        public DateTime Time { get; set; } = DateTime.Now;
        [Key]
        public string UserId { get; set; }
        [Key]
        public string ContactId { get; set; }    
    }
}
