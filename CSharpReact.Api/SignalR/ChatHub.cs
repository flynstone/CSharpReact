using CSharpReact.Repositories.Comments;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace CSharpReact.Api.SignalR
{
    public class ChatHub : Hub
    {
        private readonly IMediator _mediator;
        public ChatHub(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task SendComment(Create.Command command)
        {
            var comment = await _mediator.Send(command);
            
            await Clients.Group(command.ArticleId.ToString())
                .SendAsync("ReceiveComment", comment.Value);
        }

        // Setting the comments to the article with SignalR
        public override async Task OnConnectedAsync()
        {
            var httpContext = Context.GetHttpContext();
            var articleId = httpContext.Request.Query["articleId"];
            await Groups.AddToGroupAsync(Context.ConnectionId, articleId);
            var result = await _mediator.Send(new List.Query { ArticleId = Guid.Parse(articleId) });
            await Clients.Caller.SendAsync("LoadComments", result.Value);
        }
    }
}
