using Microsoft.EntityFrameworkCore;
using PostimetFinale.Models;
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
        public DbSet<Hello> Hello { get; set; }
        public DbSet<Mausi> Mausi { get; set; }

        public DbSet<Liga> Liga { get; set; }
        public DbSet<Ekipi> Ekipi { get; set; }
        public DbSet<Specializimi> Specializimi { get; set; }
        public DbSet<Smundja> Smundja { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }

        internal object Entry()
        {
            throw new NotImplementedException();
        }
    }
}