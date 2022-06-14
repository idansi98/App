using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace ChatWebsite.Data
{
    public class WebApp1Context : DbContext
    {
        private const string connectionString = "Server=localhost;Port=3306;Database=WebAppDB;User=root;Password=12345678";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(connectionString, MariaDbServerVersion.AutoDetect(connectionString));
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().Property(user => user.Id).IsRequired();
            modelBuilder.Entity<User>().HasKey(user => user.Id);
            //modelBuilder.Entity<User>().HasMany(user => user.Contacts);
            modelBuilder.Entity<Contact>().Property(contact => contact.Id).IsRequired();
            modelBuilder.Entity<Contact>().HasKey(contact => new
            {
                contact.Id, contact.UserId
            });
            //modelBuilder.Entity<Contact>().HasMany(contact => contact.Messages);
            modelBuilder.Entity<User>().Property(message => message.Id).IsRequired();
            modelBuilder.Entity<TextMessage>().HasKey(text => new
            {
                text.Id,
                text.UserId,
                text.ContactId
            });
          
            modelBuilder.Entity<Rating>().HasKey(rating => rating.ID);
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Contact> Contacts { get; set; }  
        public DbSet<TextMessage> Messages { get; set; }

        public DbSet<Rating> Ratings { get; set; }
    }
}

