﻿using CSharpReact.Repositories.Followers;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CSharpReact.Api.Controllers
{
    public class FollowController : BaseApiController
    {
        [HttpPost("{username}")]
        public async Task<IActionResult> Follow(string username)
        {
            return HandleResult(await Mediator.Send(new FollowToggle.Command { TargetUsername = username }));
        }
    }
}
