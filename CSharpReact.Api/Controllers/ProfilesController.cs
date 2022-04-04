﻿using CSharpReact.Repositories.Profiles;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CSharpReact.Api.Controllers
{
    public class ProfilesController : BaseApiController
    {
        
        [HttpGet("{username}")]
        public async Task<IActionResult> GetProfile(string username)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Username = username }));
        }
    }
}
