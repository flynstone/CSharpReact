using AutoMapper;
using AutoMapper.QueryableExtensions;
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
        public class Query : IRequest<Result<List<ArticleDto>>> {}

        public class Handler : IRequestHandler<Query, Result<List<ArticleDto>>>
        {
            private readonly AppDbContext _context;
            private readonly IMapper _mapper;
            public Handler(AppDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<List<ArticleDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var articles = await _context.Articles
                    .ProjectTo<ArticleDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return Result<List<ArticleDto>>.Success(articles);
            }
        }
    }
}
