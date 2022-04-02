using System;

namespace CSharpReact.Entities.Models
{
    public class ArticleContributor
    {
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
        public Guid ArticleId { get; set; }
        public Article Article { get; set; }
        public bool IsCreator { get; set; }
    }
}
