using CSharpReact.Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace CSharpReact.Data.Seeds
{
    public class ArticlesConfiguration : IEntityTypeConfiguration<Article>
    {
        public void Configure(EntityTypeBuilder<Article> builder)
        {
            builder.HasData(
                new Article
                {
                    Id = Guid.NewGuid(),
                    Title = "What is Lorem Ipsum?",
                    Body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    DateCreated = DateTime.Now,
                },
                new Article
                {
                    Id = Guid.NewGuid(),
                    Title = "Where does it come from?",
                    Body = "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                    DateCreated = DateTime.Now,
                },
                new Article
                {
                    Id = Guid.NewGuid(),
                    Title = "Why do we use it?",
                    Body = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                    DateCreated = DateTime.Now,
                },
                new Article
                {
                    Id = Guid.NewGuid(),
                    Title = "Where can I get some?",
                    Body = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
                    DateCreated = DateTime.Now,
                });
        }
    }
}
