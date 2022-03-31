using CSharpReact.Entities.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CSharpReact.Data.Seeds
{
    public class Seed
    {
       public static async Task SeedUserData(AppDbContext context, UserManager<AppUser> userManager)
        {
            // If no users exist in the database, create
            if (!userManager.Users.Any() && !context.Articles.Any())
            {
                var users = new List<AppUser>
                {
                    // Create new user
                    new AppUser
                    {
                        Id = "86fdb32b-e0a8-4d04-95ed-13889be52d59",
                        DisplayName = "Guest",
                        UserName = "guest",
                        Email = "guest@test.com",
                    },
                    new AppUser
                    {
                        Id = "b4d1f4aa-e95c-49b9-95c9-4bdabd0f5d86",
                        DisplayName = "Test",
                        UserName = "test",
                        Email = "test@mail.com"
                    }
                };

                foreach(var user in users)
                {
                    await userManager.CreateAsync(user, "P@$$w0rd");
                }

                var articles = new List<Article>
                {
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
                    }
                };

                await context.Articles.AddRangeAsync(articles);
                await context.SaveChangesAsync();
            }
        }
    }
}
