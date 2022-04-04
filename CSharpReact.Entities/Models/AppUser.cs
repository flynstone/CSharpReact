using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace CSharpReact.Entities.Models
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public string Bio { get; set; }
        public ICollection<ArticleContributor> Articles { get; set; }
        public ICollection<Photo> Photos { get; set; } 
    }
}
