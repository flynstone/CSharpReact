using CSharpReact.Entities;
using CSharpReact.Entities.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class List
    {
        public class Query : IRequest<List<Article>> {}

        public class Handler : IRequestHandler<Query, List<Article>>
        {
            private readonly AppDbContext _context;
            public Handler(AppDbContext context)
            {
                _context = context;
            }

            public async Task<List<Article>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Articles.ToListAsync();
            }
        }
    }
}
