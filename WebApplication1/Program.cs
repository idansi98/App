using ChatWebsite.Data;
using ChatWebsite.Hubs;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using WebApplication1.Services;
using FirebaseAdmin;
using FirebaseAdmin.Messaging;
using Google.Apis.Auth.OAuth2;
var builder = WebApplication.CreateBuilder(args);

//.Services.AddDbContext<WebApplication1Context>(options =>
//  options.UseSqlServer(builder.Configuration.GetConnectionString("WebApplication1Context") ?? throw new InvalidOperationException("Connection string 'WebApplication1Context' not found.")));
// Add services to the container.
builder.Services.AddTransient<WebApp1Context>();
builder.Services.AddTransient<IChatService, ChatService>();
builder.Services.AddTransient<IRatingsService, RatingsService>();
builder.Services.AddTransient<IFirebaseService, FirebaseService>();
//builder.Services.AddSingleton<IChatService,ChatService>();
//builder.Services.AddSingleton<IRatingsService, RatingsService>();
//builder.Services.AddScoped<IRatingsService, RatingsService>();
builder.Services.AddControllersWithViews();


builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromDays(5);
});

builder.Services.AddSignalR();

builder.Services.AddCors(options =>
{
    options.AddPolicy("Allow All", builder =>
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}




app.UseCors("Allow All");
//app.UseHttpsRedirection();

app.UseAuthentication();
app.UseStaticFiles();
app.UseSession();

app.UseRouting();

//app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}/{messages?}/{id2?}");

/*app.UseEndpoints(endpoints =>
{
    endpoints.MapHub<Myhub>("/Myhub");
});*/
app.MapHub<Myhub>("/Myhub");
app.Run();
