using AutoMapper;
using AutoMapper.QueryableExtensions;
using CSharpReact.Data;
using CSharpReact.Repositories.Core;
using CSharpReact.Repositories.Interfaces;
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
            private readonly IUserAccessor _userAccessor;
            public Handler(AppDbContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                _context = context;
                _mapper = mapper;
                _userAccessor = userAccessor;
            }

            public async Task<Result<List<ArticleDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var articles = await _context.Articles
                    .ProjectTo<ArticleDto>(_mapper.ConfigurationProvider, new { currentUsername = _userAccessor.GetUsername() })
                    .ToListAsync(cancellationToken);

                return Result<List<ArticleDto>>.Success(articles);
            }
        }
    }
}
