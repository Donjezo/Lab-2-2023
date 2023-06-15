using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PostimetFinale
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Add DbSet properties to represent your database tables
        public DbSet<Postimet> Postimet { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure table relationships and other model-specific configurations
        }
    }
}