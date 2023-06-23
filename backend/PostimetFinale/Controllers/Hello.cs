using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PostimetFinale;
using PostimetFinale.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HelloFinale.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HelloController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public HelloController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Hello
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hello>>> GetHello()
        {
            return await _context.Hello.ToListAsync();
        }

      

        // GET: api/Hello/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Hello>> GetHello(int id)
        {
            var hello = await _context.Hello.FindAsync(id);

            if (hello == null)
            {
                return NotFound();
            }

            return hello;
        }

        // POST: api/Hello
        [HttpPost]
        public async Task<ActionResult<Hello>> CreateHello(Hello hello)
        {
            _context.Hello.Add(hello);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetHello), new { id = hello.Id }, hello);
        }

        // PUT: api/Hello/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateHello(int id, Hello hello)
        {
            if (id != hello.Id)
            {
                return BadRequest();
            }

            _context.Entry(hello).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HelloExists(id))
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

        // DELETE: api/Hello/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHello(int id)
        {
            var hello = await _context.Hello.FindAsync(id);
            if (hello == null)
            {
                return NotFound();
            }

            _context.Hello.Remove(hello);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HelloExists(int id)
        {
            return _context.Hello.Any(p => p.Id == id);
        }
    }
}
