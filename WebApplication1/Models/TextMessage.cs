﻿namespace WebApplication1.Models
{
    public class TextMessage : Message
    {
        public int ID { get; set; }
        public string Text { get; set; }
        public string SenderUserName { get; set; }
        public int DateTime { get; set; }
    }
}