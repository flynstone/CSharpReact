using CSharpReact.Data;
using CSharpReact.Repositories.Core;
using CSharpReact.Repositories.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CSharpReact.Repositories.Photos
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public string Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly AppDbContext _context;
            private readonly IPhotoAccessor _photoAccessor;
            private readonly IUserAccessor _userAccessor;
            public Handler(AppDbContext context, IPhotoAccessor photoAccessor, IUserAccessor userAccessor)
            {
                _context = context;
                _photoAccessor = photoAccessor;
                _userAccessor = userAccessor;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.Include(p => p.Photos)
                    .FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());

                // Handle null user
                if (user == null) return null;

                var photo = user.Photos.FirstOrDefault(x => x.Id == request.Id);

                // Handle null photo
                if (photo == null) return null;

                // Handle main photo delete
                if (photo.IsMain) return Result<Unit>.Failure("You can't delete your main photo");

                var result = await _photoAccessor.DeletePhoto(photo.Id);

                // 400 Bad request 
                if (result == null) return Result<Unit>.Failure("There was a problem deleting photo");

                // Remove photo then save
                user.Photos.Remove(photo);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Result<Unit>.Success(Unit.Value);

                return Result<Unit>.Failure("There was a problem deleting photo");
            }
        }
    }
}
