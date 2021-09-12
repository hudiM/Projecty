using Microsoft.EntityFrameworkCore;

using Projecty.Models;

namespace Projecty
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        public DbSet<Feature> Features { get; set; }
        public DbSet<Task> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Feature>()
                .Property(f => f.Id)
                .ValueGeneratedOnAdd();
            modelBuilder.Entity<Task>()
                .Property(f => f.Id)
                .ValueGeneratedOnAdd();
        }
    }
}
