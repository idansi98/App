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
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    public class UsersController : Controller
    {
        private readonly ChatService _service;
        public UsersController()
        {
            _service = new ChatService();
        }

        // GET: Users
        public IActionResult Index()
        {
            return View(_service.GetAllUsers());
        }

        // GET: Users/Details/5
        public IActionResult Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = _service.GetUser(id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        // GET: Users/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Users/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create([Bind("ID,Password,DisplayName")] User user)
        {
            if (ModelState.IsValid)
            {
                _service.AddUser(user);
                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }

        // GET: Users/Edit/5
        public IActionResult Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = _service.GetUser(id);
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }

        

        private bool UserExists(string id)
        {
            if (_service.GetUser(id) == null)
            {
                return false;
            }
            return true;
        }
    }
}
