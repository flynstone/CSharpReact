﻿using CSharpReact.Entities.Models;
using CSharpReact.Repositories.Core;
using CSharpReact.Repositories.Repositories.Articles;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace CSharpReact.Api.Controllers
{
    public class ArticlesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetArticles([FromQuery]PagingParams param)
        {
            return HandlePagedResult(await Mediator.Send(new List.Query { Params = param }));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetArticle(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateArticle(Article article)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Article = article }));
        }

        [Authorize(Policy = "IsArticleCreator")]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditArticle(Guid id, Article article)
        {
            article.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Article = article }));
        }

        [Authorize(Policy = "IsArticleCreator")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArticle(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }

        [HttpPost("{id}/contribute")]
        public async Task<IActionResult> Contribute(Guid id)
        {
            return HandleResult(await Mediator.Send(new UpdateContribution.Command { Id = id }));
        }
    }
}
