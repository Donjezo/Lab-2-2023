using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PostimetFinale.Models;


namespace PostimetFinale.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpecializimiController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SpecializimiController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Specializimi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Specializimi>>> GetSpecializimi()
        {
            var specializimiList = await _context.Specializimi.ToListAsync();

            return specializimiList;
        }

        // GET: api/Specializimi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Specializimi>> GetSpecializimiById(int id)
        {
            var specializimi = await _context.Specializimi.FindAsync(id);

            if (specializimi == null)
            {
                return NotFound();
            }

            return specializimi;
        }

        // POST: api/Specializimi
        [HttpPost]
        public async Task<ActionResult<Specializimi>> CreateSpecializimi(Specializimi specializimi)
        {
            _context.Specializimi.Add(specializimi);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSpecializimiById), new { id = specializimi.ID }, specializimi);
        }

        // PUT: api/Specializimi/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSpecializimi(int id, Specializimi specializimi)
        {
            if (id != specializimi.ID)
            {
                return BadRequest();
            }

            _context.Entry(specializimi).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpecializimiExists(id))
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

        // DELETE: api/Specializimi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpecializimi(int id)
        {
            var specializimi = await _context.Specializimi.FindAsync(id);
            if (specializimi == null)
            {
                return NotFound();
            }

            _context.Specializimi.Remove(specializimi);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SpecializimiExists(int id)
        {
            return _context.Specializimi.Any(e => e.ID == id);
        }
    }
}
