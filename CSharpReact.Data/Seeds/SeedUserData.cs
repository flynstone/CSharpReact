using CSharpReact.Entities.Models;
using Microsoft.AspNetCore.Identity;
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
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    // Create new user
                    new AppUser
                    {
                        DisplayName = "Guest",
                        UserName = "guest",
                        Email = "guest@test.com",
                    },
                    new AppUser
                    {
                        DisplayName = "Test",
                        UserName = "test",
                        Email = "test@mail.com"
                    }
                };

                foreach(var user in users)
                {
                    await userManager.CreateAsync(user, "P@ssw0rd");
                }
            }
        }
    }
}
