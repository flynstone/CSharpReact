using CSharpReact.Entities;
using CSharpReact.Entities.Models;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class Details
    {
        public class Query : IRequest<Article>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Article>
        {
            private readonly AppDbContext _context;
            public Handler(AppDbContext context)
            {
                _context = context;
            }

            public async Task<Article> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Articles.FindAsync(request.Id);
            }
        }
    }
}
