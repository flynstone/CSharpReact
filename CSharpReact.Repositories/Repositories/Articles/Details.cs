using CSharpReact.Entities;
using CSharpReact.Entities.Models;
using CSharpReact.Repositories.Core;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class Details
    {
        public class Query : IRequest<Result<Article>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Article>>
        {
            private readonly AppDbContext _context;
            public Handler(AppDbContext context)
            {
                _context = context;
            }

            public async Task<Result<Article>> Handle(Query request, CancellationToken cancellationToken)
            {
                var article = await _context.Articles.FindAsync(request.Id);

                return Result<Article>.Success(article);
            }
        }
    }
}
