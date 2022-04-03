using CSharpReact.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace CSharpReact.Infrastructure.Security
{
    public class IsCreatorRequirement : IAuthorizationRequirement
    {
    }

    public class IsCreatorRequirementHandler : AuthorizationHandler<IsCreatorRequirement>
    {
        private readonly AppDbContext _dbContext;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public IsCreatorRequirementHandler(AppDbContext dbContext, IHttpContextAccessor httpContextAccessor)
        {
            _dbContext = dbContext;
            _httpContextAccessor = httpContextAccessor;
        }

        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsCreatorRequirement requirement)
        {
            // Get user by id
            var userId = context.User.FindFirstValue(ClaimTypes.NameIdentifier);

            // Handle user not found
            if (userId == null) return Task.CompletedTask;

            // Get article id by parsing its id
            var articleId = Guid.Parse(_httpContextAccessor.HttpContext?.Request.RouteValues.SingleOrDefault(x => x.Key == "id").Value?.ToString());

            // Get ArticleContributor object
            var contributor = _dbContext.ArticleContributors
                .AsNoTracking()
                .SingleOrDefaultAsync(x => x.AppUserId == userId && x.ArticleId == articleId).Result;

            // Handle null object
            if (contributor == null) return Task.CompletedTask;

            if (contributor.IsCreator) context.Succeed(requirement);
            
            return Task.CompletedTask;
        }
    }
}
