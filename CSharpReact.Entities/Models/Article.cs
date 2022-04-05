using System;
using System.Collections.Generic;

namespace CSharpReact.Entities.Models
{
    public class Article
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime DateCreated { get; set; }
        public bool IsClosed { get; set; }
        public ICollection<ArticleContributor> Contributors { get; set; } = new List<ArticleContributor>();
        public ICollection<Comment> Comments { get; set; } = new List<Comment>();
    }
}
