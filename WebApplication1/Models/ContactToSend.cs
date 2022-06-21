using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class ContactToSend
    {
        public String id { get; set;}
        public String name { get; set; }
        public String server { get; set; }
        public String last { get; set; }
        public String lastdate { get; set; }

    }
}
