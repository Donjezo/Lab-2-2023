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
    public class SmundjaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SmundjaController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Smundja
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Smundja>>> GetSmundja()
        {
            var smundjaList = await _context.Smundja.Include(s => s.Specializimi).ToListAsync();

            return smundjaList;
        }

        // GET: api/Smundja/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Smundja>> GetSmundjaById(int id)
        {
            var smundja = await _context.Smundja.Include(s => s.Specializimi).FirstOrDefaultAsync(s => s.ID == id);

            if (smundja == null)
            {
                return NotFound();
            }

            return smundja;
        }

        // POST: api/Smundja
        [HttpPost]
        public async Task<ActionResult<Smundja>> CreateSmundja(Smundja smundja)
        {
            _context.Smundja.Add(smundja);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSmundjaById), new { id = smundja.ID }, smundja);
        }

        // PUT: api/Smundja/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSmundja(int id, Smundja smundja)
        {
            if (id != smundja.ID)
            {
                return BadRequest();
            }

            _context.Entry(smundja).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SmundjaExists(id))
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

        // DELETE: api/Smundja/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSmundja(int id)
        {
            var smundja = await _context.Smundja.FindAsync(id);
            if (smundja == null)
            {
                return NotFound();
            }

            _context.Smundja.Remove(smundja);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SmundjaExists(int id)
        {
            return _context.Smundja.Any(e => e.ID == id);
        }
    }
}
