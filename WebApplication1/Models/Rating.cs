using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Rating
    {
        public int ID { get; set; }
        public string ReviewerName { get; set; }
        [Range(0, 5)]
        public int Score { get; set; }
        public string ReviewText { get; set; }
        public string? DateTime { get; set; }
    }
}
