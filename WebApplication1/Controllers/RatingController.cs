using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class RatingController : Controller
    {
        // GET: RatingController
        public ActionResult Index()
        {
            List<Rating> ratings = new List<Rating>();
            ratings.Add(new Rating { DateTime = 1, ID = 2, ReviewerName = "Ido", ReviewText = "Best app ever!", Score = 5 });
            ratings.Add(new Rating { DateTime = 2, ID = 3, ReviewerName = "Idan", ReviewText = "Marvelous!", Score = 1 });
            ViewBag.Rating = ratings;
            return View(ratings);
        }

        // GET: RatingController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: RatingController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: RatingController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: RatingController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: RatingController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: RatingController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: RatingController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
