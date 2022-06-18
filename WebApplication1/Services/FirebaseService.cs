#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatWebsite.Data;
using FirebaseAdmin;
using FirebaseAdmin.Messaging;
using Google.Apis.Auth.OAuth2;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
namespace WebApplication1.Services
{
    public class FirebaseService : IFirebaseService
    {
        //private static List<User> users;
        private readonly static Dictionary<string,string> userToFirebaseID = new Dictionary<string,string>();
        private readonly FirebaseApp defaultApp;

        public FirebaseService()
        {
            if (FirebaseApp.DefaultInstance == null)
            {
                defaultApp = FirebaseApp.Create(new AppOptions()
                {
                    Credential = GoogleCredential.FromFile(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "firebaseKey.json")),
                });
            }

        }

        public async Task<string> GetFirebaseID(string username)
        {
            if (userToFirebaseID.TryGetValue(username, out var firebaseID))
            {
                return firebaseID;
            } else
            {
                return null;
            }
        }
        public async Task SetFirebaseID(string username, string firebaseID)
        {
            userToFirebaseID[username] = firebaseID;
        }
        public async Task SendFirebaseMessage(string username, string title, string message)
        {

            var id = userToFirebaseID[username];

            var fbMessage = new Message()
            {
                Notification = new Notification
                {
                    Title = title,
                    Body = message
                },
                Token = id
            };
            var messaging = FirebaseMessaging.DefaultInstance;
            var result = await messaging.SendAsync(fbMessage);

        }
        public async Task<bool> hasFirebaseID(string username)
        {
            return userToFirebaseID.ContainsKey(username);
        }

    }


}
