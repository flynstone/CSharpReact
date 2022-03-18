using CSharpReact.Entities.Models;
using CSharpReact.Entities.Seeds;
using Microsoft.EntityFrameworkCore;

namespace CSharpReact.Entities
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options): base(options)
        {
        }

        public DbSet<Article> Articles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) 
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new ArticlesConfiguration());
        }
    }
}
