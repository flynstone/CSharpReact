using CSharpReact.Entities.Models;
using CSharpReact.Data.Seeds;
using Microsoft.EntityFrameworkCore;

namespace CSharpReact.Data
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
