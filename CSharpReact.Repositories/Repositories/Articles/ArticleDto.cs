using CSharpReact.Repositories.Profiles;
using System;
using System.Collections.Generic;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class ArticleDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime DateCreated { get; set; }
        public string Body { get; set; }
        public string Category { get; set; }
        public string CreatorUsername { get; set; }
        public bool IsClosed { get; set; }
        public ICollection<ArticleDto> Contributors { get; set; }
    }
}
