#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class TextMessagesController : Controller
    {
        private readonly WebApplication1Context _context;

        public TextMessagesController(WebApplication1Context context)
        {
            _context = context;
        }

        // GET: TextMessages
        public async Task<IActionResult> Index()
        {
            return View(await _context.TextMessage.ToListAsync());
        }

        // GET: TextMessages/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var textMessage = await _context.TextMessage
                .FirstOrDefaultAsync(m => m.ID == id);
            if (textMessage == null)
            {
                return NotFound();
            }

            return View(textMessage);
        }

        // GET: TextMessages/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: TextMessages/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ID,Text,UserSent,Time")] TextMessage textMessage)
        {
            if (ModelState.IsValid)
            {
                _context.Add(textMessage);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(textMessage);
        }

        // GET: TextMessages/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var textMessage = await _context.TextMessage.FindAsync(id);
            if (textMessage == null)
            {
                return NotFound();
            }
            return View(textMessage);
        }

        // POST: TextMessages/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,Text,UserSent,Time")] TextMessage textMessage)
        {
            if (id != textMessage.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(textMessage);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TextMessageExists(textMessage.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(textMessage);
        }

        // GET: TextMessages/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var textMessage = await _context.TextMessage
                .FirstOrDefaultAsync(m => m.ID == id);
            if (textMessage == null)
            {
                return NotFound();
            }

            return View(textMessage);
        }

        // POST: TextMessages/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var textMessage = await _context.TextMessage.FindAsync(id);
            _context.TextMessage.Remove(textMessage);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TextMessageExists(int id)
        {
            return _context.TextMessage.Any(e => e.ID == id);
        }
    }
}
