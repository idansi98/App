using WebApplication1.Models;

namespace WebApplication1.Services
{
    public interface IRatingsService
    {
        public Task<List<Rating>> GetRatingList();
        public Task<List<Rating>> GetRatingListWith(string query);
        public Task<List<Rating>> GetRatingListWith2(string query);
        public Task<List<Rating>> GetRatingListWith3(string query);
        public Task<Rating> FindRating(int? id);
        public Task<bool> CreateRating(Rating rating);
        public Task<bool> EditRating(Rating rating);
        public Task<bool> DeleteRating(int id);
    }
}
