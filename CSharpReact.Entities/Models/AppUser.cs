using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using static CSharpReact.Entities.Models.ResetToken;

namespace CSharpReact.Entities.Models
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public string Bio { get; set; }
        public ICollection<ArticleContributor> Articles { get; set; }
        public ICollection<Photo> Photos { get; set; } 
        public ICollection<UserFollowing> Followings { get; set; }
        public ICollection<UserFollowing> Followers { get; set; }
        public ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();
    }
}
