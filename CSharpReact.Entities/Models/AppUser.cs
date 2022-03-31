using Microsoft.AspNetCore.Identity;

namespace CSharpReact.Entities.Models
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public string Bio { get; set; }
    }
}
