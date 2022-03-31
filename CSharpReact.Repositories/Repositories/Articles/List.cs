using CSharpReact.Data;
using CSharpReact.Entities.Models;
using CSharpReact.Repositories.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class List
    {
        public class Query : IRequest<Result<List<Article>>> {}

        public class Handler : IRequestHandler<Query, Result<List<Article>>>
        {
            private readonly AppDbContext _context;
            public Handler(AppDbContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Article>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Article>>.Success(await _context.Articles.ToListAsync(cancellationToken));
            }
        }
    }
}
