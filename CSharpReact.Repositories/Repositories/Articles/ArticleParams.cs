using CSharpReact.Repositories.Core;
using System;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class ArticleParams : PagingParams
    {
        public bool IsContributor { get; set; }
        public bool IsCreator { get; set; }
        public DateTime StartDate { get; set; } = DateTime.UtcNow;

    }
}
