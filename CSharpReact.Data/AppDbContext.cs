using CSharpReact.Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace CSharpReact.Data
{
    public class AppDbContext : IdentityDbContext<AppUser>
    {
        public AppDbContext(DbContextOptions options): base(options)
        {
        }

        public DbSet<Article> Articles { get; set; }
        public DbSet<ArticleContributor> ArticleContributors { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<UserFollowing> UserFollowings { get; set; }


        protected override void OnModelCreating(ModelBuilder builder) 
        {
            base.OnModelCreating(builder);

            // Create primary key for many to many
            builder.Entity<ArticleContributor>(x => x.HasKey(y => new {y.AppUserId, y.ArticleId}));

            // Create many-to-many
            builder.Entity<ArticleContributor>()
                .HasOne(u => u.AppUser)
                .WithMany(a => a.Articles)
                .HasForeignKey(y => y.AppUserId);

            // Create many-to-many
            builder.Entity<ArticleContributor>()
                .HasOne(u => u.Article)
                .WithMany(a => a.Contributors)
                .HasForeignKey(y => y.ArticleId);

            builder.Entity<Comment>()
                .HasOne(a => a.Article)
                .WithMany(c => c.Comments)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<UserFollowing>(b =>
            {
                b.HasKey(k => new { k.ObserverId, k.TargetId });

                b.HasOne(o => o.Observer)
                    .WithMany(f => f.Followings)
                    .HasForeignKey(o => o.ObserverId)
                    .OnDelete(DeleteBehavior.Cascade);

                b.HasOne(o => o.Target)
                    .WithMany(f => f.Followers)
                    .HasForeignKey(o => o.TargetId)
                    .OnDelete(DeleteBehavior.Cascade);
            });
        }
    }
}
