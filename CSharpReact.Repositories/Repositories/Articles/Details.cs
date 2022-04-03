using AutoMapper;
using AutoMapper.QueryableExtensions;
using CSharpReact.Data;
using CSharpReact.Entities.Models;
using CSharpReact.Repositories.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class Details
    {
        public class Query : IRequest<Result<ArticleDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<ArticleDto>>
        {
            private readonly AppDbContext _context;
            private readonly IMapper _mapper;
            public Handler(AppDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<ArticleDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var article = await _context.Articles
                    .ProjectTo<ArticleDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<ArticleDto>.Success(article);
            }
        }
    }
}
