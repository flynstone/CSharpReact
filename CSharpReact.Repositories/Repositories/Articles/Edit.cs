using AutoMapper;
using CSharpReact.Entities;
using CSharpReact.Entities.Models;
using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class Edit
    {
        public class Command : IRequest
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

        public class Handler : IRequestHandler<Command>
        {
            private readonly AppDbContext _context; 
            private readonly IMapper _mapper;
            public Handler(AppDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var article = await _context.Articles.FindAsync(request.Article.Id);

                _mapper.Map(request.Article, article);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
