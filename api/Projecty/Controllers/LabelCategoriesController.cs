using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Projecty;
using Projecty.Data.Models;

namespace Projecty.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LabelCategoriesController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public LabelCategoriesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/LabelCategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LabelCategory>>> GetLabelCategories()
        {
            return await _context.LabelCategories.ToListAsync();
        }

        // GET: api/LabelCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LabelCategory>> GetLabelCategory(int id)
        {
            var labelCategory = await _context.LabelCategories.FindAsync(id);

            if (labelCategory == null)
            {
                return NotFound();
            }

            return labelCategory;
        }

        // PUT: api/LabelCategories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLabelCategory(int id, LabelCategory labelCategory)
        {
            if (id != labelCategory.Id)
            {
                return BadRequest();
            }

            _context.Entry(labelCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LabelCategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/LabelCategories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<LabelCategory>> PostLabelCategory(LabelCategory labelCategory)
        {
            _context.LabelCategories.Add(labelCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLabelCategory", new { id = labelCategory.Id }, labelCategory);
        }

        // DELETE: api/LabelCategories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLabelCategory(int id)
        {
            var labelCategory = await _context.LabelCategories.FindAsync(id);
            if (labelCategory == null)
            {
                return NotFound();
            }

            _context.LabelCategories.Remove(labelCategory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LabelCategoryExists(int id)
        {
            return _context.LabelCategories.Any(e => e.Id == id);
        }
    }
}
