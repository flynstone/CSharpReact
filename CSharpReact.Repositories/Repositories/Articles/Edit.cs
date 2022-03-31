using AutoMapper;
using CSharpReact.Data;
using CSharpReact.Entities.Models;
using CSharpReact.Repositories.Core;
using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class Edit
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
            private readonly IMapper _mapper;
            public Handler(AppDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var article = await _context.Articles.FindAsync(request.Article.Id);

                // Handle null result
                if (article == null) return null;

                _mapper.Map(request.Article, article);

                // Return true or false if the result is found or not
                var result = await _context.SaveChangesAsync() > 0;

                // Handle not found
                if (!result) return Result<Unit>.Failure("Failed to update the article");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
