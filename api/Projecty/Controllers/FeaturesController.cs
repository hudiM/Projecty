﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using AutoMapper;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Projecty.Data.Models;

namespace Projecty.Pages.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeaturesController : ControllerBase
    {
        private readonly DatabaseContext _context;
        private readonly IMapper _mapper;

        public FeaturesController(DatabaseContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Features
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Feature>>> GetFeatures()
        {
            return await _context.Features
                .Include(feature => feature.Status)
                .Include(feature => feature.Tasks)
                .Include(feature => feature.Tags)
                .ToListAsync();
        }

        // GET: api/Features/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Feature>> GetFeature(int id)
        {
            var feature = await _context.Features
                .Include(feature => feature.Status)
                .Include(feature => feature.Tasks)
                .Include(feature => feature.Tags)
                .FirstOrDefaultAsync(feature => feature.Id == id);

            if (feature == null)
            {
                return NotFound();
            }

            return feature;
        }

        // PUT: api/Features/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFeature(int id, Feature feature)
        {
            if (id != feature.Id)
            {
                return BadRequest();
            }

            _context.Entry(feature).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FeatureExists(id))
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

        // POST: api/Features
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Feature>> PostFeature(Feature feature)
        {
            feature.Status = null;
            _context.Features.Add(feature);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFeature", new { id = feature.Id }, feature);
        }

        // DELETE: api/Features/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Feature>> DeleteFeature(int id)
        {
            var feature = await _context.Features.FindAsync(id);
            if (feature == null)
            {
                return NotFound();
            }

            _context.Features.Remove(feature);
            await _context.SaveChangesAsync();

            return feature;
        }

        private bool FeatureExists(int id)
        {
            return _context.Features.Any(e => e.Id == id);
        }
    }
}
