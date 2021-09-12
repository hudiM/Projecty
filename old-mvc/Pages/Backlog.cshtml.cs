using System;
using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

using Projecty.Enums;
using Projecty.Models;

namespace Projecty.Pages
{
    public class BacklogModel : PageModel
    {
        private DatabaseContext _context;

        public BacklogModel(DatabaseContext _context)
        {
            this._context = _context;
        }

        [BindProperty]
        public List<Feature> Features { get; set; } = new List<Feature>();

        public void OnGet()
        {
            try
            {
                Features = _context.Features.Include(f => f.Tasks)
                                    .AsNoTracking().ToList();
            }
            catch (System.Exception ex)
            {
                Console.WriteLine(ex);
            }
        }
    }
}