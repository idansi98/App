using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using WebApplication1.Data;
using WebApplication1.Services;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<WebApplication1Context>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("WebApplication1Context") ?? throw new InvalidOperationException("Connection string 'WebApplication1Context' not found.")));

builder.Services.AddSingleton<IChatService,ChatService>();
// Add services to the container.
builder.Services.AddControllersWithViews();


builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromDays(5);
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

//app.UseCors("Allow All");
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseStaticFiles();
app.UseSession();

app.UseRouting();

//app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}/{messages?}/{id2?}");



app.Run();
