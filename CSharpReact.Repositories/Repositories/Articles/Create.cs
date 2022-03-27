using CSharpReact.Entities;
using CSharpReact.Entities.Models;
using CSharpReact.Repositories.Core;
using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class Create
    {
        // Not returning a result using ** Unit from MediatR
        public class Command : IRequest<Result<Unit>>
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

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly AppDbContext _context;
            public Handler(AppDbContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Articles.Add(request.Article);

                // Return true or false if the result is found or not
                var result = await _context.SaveChangesAsync() > 0;

                // Handle not found
                if (!result) return Result<Unit>.Failure("Failed to create article");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
