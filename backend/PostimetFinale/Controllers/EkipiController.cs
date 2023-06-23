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
    public class EkipiController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EkipiController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Ekipi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ekipi>>> GetEkipet()
        {
            var ekipet = await _context.Ekipi.Include(e => e.Liga).ToListAsync();
            return ekipet;
        }

        // GET: api/Ekipi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ekipi>> GetEkipi(int ID)
        {
            var ekipi = await _context.Ekipi.Include(e => e.Liga).FirstOrDefaultAsync(e => e.ID == ID);

            if (ekipi == null)
            {
                return NotFound();
            }

            return ekipi;
        }

        // POST: api/Ekipi
        [HttpPost]
        public async Task<ActionResult<Ekipi>> PostEkipi(Ekipi ekipi)
        {
            _context.Ekipi.Add(ekipi);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEkipi", new { id = ekipi.ID }, ekipi);
        }

        // PUT: api/Ekipi/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEkipi(int id, Ekipi ekipi)
        {
            if (id != ekipi.ID)
            {
                return BadRequest();
            }

            _context.Entry(ekipi).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EkipiExists(id))
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

        // DELETE: api/Ekipi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEkipi(int id)
        {
            var ekipi = await _context.Ekipi.FindAsync(id);
            if (ekipi == null)
            {
                return NotFound();
            }

            _context.Ekipi.Remove(ekipi);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EkipiExists(int id)
        {
            return _context.Ekipi.Any(e => e.ID == id);
        }
    }
}
