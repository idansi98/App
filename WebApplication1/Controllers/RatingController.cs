using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class RatingController : Controller
    {
        public IActionResult Index()
        {
            List<Rating> ratings = new List<Rating>();
            ratings.Add(new Rating { DateTime = 1, ID = 2, ReviewerName = "Ido", ReviewText = "Best app ever!" , Score = 5});
            ratings.Add(new Rating { DateTime = 2, ID = 3, ReviewerName = "Idan", ReviewText = "Marvelous!", Score = 1 });
            ViewBag.Rating = ratings;
            return View(ratings);
        }
    }
}
