using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PostimetFinale.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostimetController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PostimetController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Postimet
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Postimet>>> GetPostimet()
        {
            return await _context.Postimet.ToListAsync();
        }

        [HttpGet("ByAuthor/{authorId}")]
        public async Task<ActionResult<IEnumerable<Postimet>>> GetPostimetByAuthor(int authorId)
        {
            var postimet = await _context.Postimet.Where(p => p.AutorId == authorId).ToListAsync();

            if (postimet == null || postimet.Count == 0)
            {
                return NotFound();
            }

            return postimet;
        }

        // GET: api/Postimet/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Postimet>> GetPostimet(int id)
        {
            var postimet = await _context.Postimet.FindAsync(id);

            if (postimet == null)
            {
                return NotFound();
            }

            return postimet;
        }

        // POST: api/Postimet
        [HttpPost]
        public async Task<ActionResult<Postimet>> CreatePostimet(Postimet postimet)
        {
            _context.Postimet.Add(postimet);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPostimet), new { id = postimet.ID }, postimet);
        }

        // PUT: api/Postimet/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePostimet(int id, Postimet postimet)
        {
            if (id != postimet.ID)
            {
                return BadRequest();
            }

            _context.Entry(postimet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostimetExists(id))
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

        // DELETE: api/Postimet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePostimet(int id)
        {
            var postimet = await _context.Postimet.FindAsync(id);
            if (postimet == null)
            {
                return NotFound();
            }

            _context.Postimet.Remove(postimet);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PostimetExists(int id)
        {
            return _context.Postimet.Any(p => p.ID == id);
        }
    }
}
