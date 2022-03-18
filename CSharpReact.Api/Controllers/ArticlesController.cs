using CSharpReact.Entities.Models;
using CSharpReact.Repositories.Repositories.Articles;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CSharpReact.Api.Controllers
{
    public class ArticlesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Article>>> GetArticles()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Article>> GetArticle(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateArticle(Article article)
        {
            return Ok(await Mediator.Send(new Create.Command { Article = article }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditArticle(Guid id, Article article)
        {
            article.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Article = article }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArticle(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}
