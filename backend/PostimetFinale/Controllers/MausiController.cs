using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PostimetFinale;
using PostimetFinale.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MausiFinale.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MausiController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MausiController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Mausi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Mausi>>> GetMausi()
        {
            return await _context.Mausi.ToListAsync();
        }

       

        // GET: api/Mausi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Mausi>> GetMausi(int id)
        {
            var mausi = await _context.Mausi.FindAsync(id);

            if (mausi == null)
            {
                return NotFound();
            }

            return mausi;
        }

        // POST: api/Mausi
        [HttpPost]
        public async Task<ActionResult<Mausi>> CreateMausi(Mausi mausi)
        {
            _context.Mausi.Add(mausi);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMausi), new { id = mausi.Id }, mausi);
        }

        // PUT: api/Mausi/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMausi(int id, Mausi mausi)
        {
            if (id != mausi.Id)
            {
                return BadRequest();
            }

            _context.Entry(mausi).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MausiExists(id))
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

        // DELETE: api/Mausi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMausi(int id)
        {
            var mausi = await _context.Mausi.FindAsync(id);
            if (mausi == null)
            {
                return NotFound();
            }

            _context.Mausi.Remove(mausi);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MausiExists(int id)
        {
            return _context.Mausi.Any(p => p.Id == id);
        }
    }
}
