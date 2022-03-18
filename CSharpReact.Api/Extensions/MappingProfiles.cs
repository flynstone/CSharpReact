using AutoMapper;
using CSharpReact.Entities.Models;

namespace CSharpReact.Api.Extensions
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Article, Article>();
        }
    }
}
