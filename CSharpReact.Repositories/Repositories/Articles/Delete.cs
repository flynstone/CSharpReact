using CSharpReact.Entities;
using CSharpReact.Repositories.Core;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class Delete
    {
        // Not returning a result using ** Unit from MediatR
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler: IRequestHandler<Command, Result<Unit>>
        {
            private readonly AppDbContext _context;
            public Handler(AppDbContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var article = await _context.Articles.FindAsync(request.Id);

                if (article == null) return null;

                _context.Remove(article);

                // Return true or false if the result is found or not
                var result = await _context.SaveChangesAsync() > 0;

                // Handle not found
                if (!result) return Result<Unit>.Failure("Failed to delete the article");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
