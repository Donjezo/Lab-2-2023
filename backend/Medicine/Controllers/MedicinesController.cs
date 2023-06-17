using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PostimetFinale.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicinesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MedicinesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Medicines
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Medicines>>> GetMedicines()
        {
            var medicines = await _context.Medicines.ToListAsync();

            if (medicines == null)
            {
                return NotFound();
            }

            foreach (var medicine in medicines)
            {
                if (medicine.Id == null)
                {
                    // Handle the case where ID is null
                    // Return an appropriate response or handle it as needed
                    return BadRequest("ID is null for one or more medicines");
                }
            }

            return medicines;
        }


        // GET: api/Medicines/5
        // GET: api/Medicines/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Medicines>> GetMedicines(int id)
        {
            var medicines = await _context.Medicines.FindAsync(id);

            if (medicines == null)
            {
                return NotFound();
            }

            if (medicines.Id == null)
            {
                // Handle the case where ID is null
                // Return an appropriate response or handle it as needed
                return BadRequest("ID is null for the requested medicine");
            }

            return medicines;
        }


        // POST: api/Medicines
        [HttpPost]
        public async Task<ActionResult<Medicines>> CreateMedicines(Medicines medicines)
        {
            _context.Medicines.Add(medicines);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMedicines), new { id = medicines.Id }, medicines);
        }

        // PUT: api/Medicines/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMedicines(int id, Medicines medicines)
        {
            if (id != medicines.Id)
            {
                return BadRequest();
            }

            _context.Entry(medicines).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MedicinesExists(id))
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

        // DELETE: api/Medicines/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicines(int id)
        {
            var medicines = await _context.Medicines.FindAsync(id);
            if (medicines == null)
            {
                return NotFound();
            }

            _context.Medicines.Remove(medicines);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MedicinesExists(int id)
        {
            return _context.Medicines.Any(p => p.Id == id);
        }
    }
}
