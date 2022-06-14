#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    public class RatingsController : Controller
    {
        private readonly IRatingsService _ratingsService;
      

        public RatingsController(IRatingsService ratingsService)
        {
            _ratingsService = ratingsService;
        }

        // GET: Ratings
        public async Task<IActionResult> Index()
        {
            return View(await _ratingsService.GetRatingList());
        }

        public async Task<IActionResult> Search()
        {
            return View(await _ratingsService.GetRatingList());
        }

        [HttpPost]
        public async Task<IActionResult> Index(string query)
        {
            return View(await _ratingsService.GetRatingListWith(query));
        }

        public async Task<IActionResult> Search2(string query)
        {
            return PartialView(await _ratingsService.GetRatingListWith2(query));

        }

        public async Task<IActionResult> Search3(string query)
        {
            return Json(await _ratingsService.GetRatingListWith3(query));
        }



        // GET: Ratings/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            var rating = await _ratingsService.FindRating(id);
            if (rating == null)
            {
                return NotFound();
            }
            return View(rating);
        }

        // GET: Ratings/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Ratings/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ID,ReviewerName,Score,ReviewText,DateTime")] Rating rating)
        {
            if (ModelState.IsValid)
            {
                rating.DateTime = DateTime.Now.ToString();
                var result = await _ratingsService.CreateRating(rating);
                return RedirectToAction(nameof(Index));
            }
            return View(rating);
        }

        // GET: Ratings/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var rating = await _ratingsService.FindRating(id);
            if (rating == null)
            {
                return NotFound();
            }
            return View(rating);
        }

        // POST: Ratings/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,ReviewerName,Score,ReviewText,DateTime")] Rating rating)
        {
            if (id != rating.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                var result = await _ratingsService.EditRating(rating);
                if (result == false)
                {
                    return NotFound();
                }
                return RedirectToAction(nameof(Index));
            }
            return View(rating);
        }

        // GET: Ratings/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var rating = await _ratingsService.FindRating(id);
            if (rating == null)
            {
                return NotFound();
            }

            return View(rating);
        }

        // POST: Ratings/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var result = await _ratingsService.DeleteRating(id);
            return RedirectToAction(nameof(Index));
        }

        /*
        private bool RatingExists(int id)
        {
            return _context.Rating.Any(e => e.ID == id);
        }
        */
    }
}
