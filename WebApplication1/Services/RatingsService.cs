#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using ChatWebsite.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Services
{
    public class RatingsService: IRatingsService
    {
        private readonly WebApp1Context _context;
        public RatingsService(WebApp1Context context)
        {
            _context = context;
        }
        public async Task<List<Rating>> GetRatingList()
        {
            return await _context.Ratings.ToListAsync();
        }

        public async Task<List<Rating>> GetRatingListWith(string query)
        {
            var q = from rating in _context.Ratings
                    where rating.ReviewerName.Contains(query)
                    select rating;
            return await q.ToListAsync();
        }

        public async Task<List<Rating>> GetRatingListWith2(string query)
        {
            if (query == null)
            {
                var a = from rating in _context.Ratings
                        select rating;
                return await a.ToListAsync();
            }
            var q = _context.Ratings.Where(rating => rating.ReviewerName.Contains(query));
            return await q.ToListAsync();
        }
        public async Task<List<Rating>> GetRatingListWith3(string query)
        {
            var q = _context.Ratings.Where(rating => rating.ReviewerName.Contains(query));
            return await q.ToListAsync();
        }

        public async Task<Rating> FindRating(int ?id)
        {
            if (id == null)
            {
                return null;
            }

            var rating = await _context.Ratings
                .FirstOrDefaultAsync(m => m.ID == id);
            if (rating == null)
            {
                return null;
            }

            return rating;
        }

        public async Task<bool> CreateRating(Rating rating)
        {
            _context.Add(rating);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> EditRating(Rating rating)
        {
            try
            {
                rating.DateTime = DateTime.Now.ToString();
                _context.Update(rating);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RatingExists(rating.ID))
                {
                    return false;
                }
                else
                {
                    throw;
                }
            }

        }

        public async Task<bool> DeleteRating(int id)
        {
            var rating = await _context.Ratings.FindAsync(id);
            _context.Ratings.Remove(rating);
            await _context.SaveChangesAsync();
            return true;
        }

        private bool RatingExists(int id)
        {
            return _context.Ratings.Any(e => e.ID == id);
        }


    }
}
