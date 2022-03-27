using CSharpReact.Entities;
using CSharpReact.Entities.Models;
using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class Create
    {
        public class Command : IRequest
        {
            public Article Article { get; set; }
        }

        // Using FluentValidation
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Article).SetValidator(new ArticleValidator());
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly AppDbContext _context;
            public Handler(AppDbContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Articles.Add(request.Article);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
