using CSharpReact.Entities.Models;
using FluentValidation;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class ArticleValidator : AbstractValidator<Article>
    {
        public ArticleValidator()
        {
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.Body).NotEmpty();
            RuleFor(x => x.DateCreated).NotEmpty();
        }
    }
}
