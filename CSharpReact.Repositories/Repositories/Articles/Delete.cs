using CSharpReact.Entities;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler: IRequestHandler<Command>
        {
            private readonly AppDbContext _context;
            public Handler(AppDbContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var article = await _context.Articles.FindAsync(request.Id);

                _context.Remove(article);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
