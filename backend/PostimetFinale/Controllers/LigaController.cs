using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PostimetFinale.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PostimetFinale.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LigaController : ControllerBase
    {
        private readonly ApplicationDbContext _context; // Replace "YourDbContext" with your actual DbContext name

        public LigaController(ApplicationDbContext context) // Replace "YourDbContext" with your actual DbContext name
        {
            _context = context;
        }

        // GET: api/Liga
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Liga>>> GetLigat()
        {
            return await _context.Liga.ToListAsync();
        }

        // GET: api/Liga/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Liga>> GetLiga(int id)
        {
            var liga = await _context.Liga.FindAsync(id);

            if (liga == null)
            {
                return NotFound();
            }

            return liga;
        }

        // POST: api/Liga
        [HttpPost]
        public async Task<ActionResult<Liga>> PostLiga(Liga liga)
        {
            _context.Liga.Add(liga);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLiga", new { id = liga.ID }, liga);
        }

        // PUT: api/Liga/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLiga(int id, Liga liga)
        {
            if (id != liga.ID)
            {
                return BadRequest();
            }

            _context.Entry(liga).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LigaExists(id))
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

        // DELETE: api/Liga/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLiga(int id)
        {
            var liga = await _context.Liga.FindAsync(id);
            if (liga == null)
            {
                return NotFound();
            }

            _context.Liga.Remove(liga);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LigaExists(int id)
        {
            return _context.Liga.Any(e => e.ID == id);
        }
    }
}
