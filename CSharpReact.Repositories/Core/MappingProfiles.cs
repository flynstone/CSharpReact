using AutoMapper;
using CSharpReact.Entities.Models;
using CSharpReact.Repositories.Repositories.Articles;
using System.Linq;

namespace CSharpReact.Repositories.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Article, Article>();

            CreateMap<Article, ArticleDto>()
                .ForMember(x => x.CreatorUsername, opt => opt.MapFrom(y => y.Contributors
                    .FirstOrDefault(h => h.IsCreator).AppUser.UserName));

            CreateMap<ArticleContributor, Profiles.Profile>()
                .ForMember(x => x.DisplayName, opt => opt.MapFrom(y => y.AppUser.DisplayName))
                .ForMember(x => x.Username, opt => opt.MapFrom(y => y.AppUser.UserName))
                .ForMember(x => x.Bio, opt => opt.MapFrom(y => y.AppUser.Bio));
        }
    }
}
