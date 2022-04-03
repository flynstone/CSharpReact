using CSharpReact.Data;
using CSharpReact.Entities.Models;
using CSharpReact.Repositories.Core;
using CSharpReact.Repositories.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CSharpReact.Repositories.Repositories.Articles
{
    public class UpdateContribution
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly AppDbContext _context;
            private readonly IUserAccessor _userAccessor;
            public Handler(AppDbContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                // Database request
                var article = await _context.Articles
                    .Include(a => a.Contributors).ThenInclude(u => u.AppUser)
                    .SingleOrDefaultAsync(x => x.Id == request.Id);

                // Handle 404 request
                if (article == null) return null;

                // Get user by username, store it in variable "user"
                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());

                var creatorUsername = article.Contributors.FirstOrDefault(x => x.IsCreator)?.AppUser?.UserName;
                var contributor = article.Contributors.FirstOrDefault(x => x.AppUser.UserName == user.UserName);

                if (contributor != null && creatorUsername == user.UserName)
                    article.IsClosed = !article.IsClosed;

                if (contributor != null && creatorUsername != user.UserName)
                    article.Contributors.Remove(contributor);

                // If there is no contribution from user, create a new one
                if (contributor == null)
                {
                    contributor = new ArticleContributor
                    {
                        AppUser = user,
                        Article = article,
                        IsCreator = false
                    };

                    article.Contributors.Add(contributor);
                }

                var result = await _context.SaveChangesAsync() > 0;

                return result ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Problem updating attendance");
            }
        }
    }
}
