﻿namespace WebApplication1.Models
{
    public class User
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string DisplayName { get; set; }
        public string Picture { get; set; }
        public List<Chat> Chats { get; set; }


    }
}
