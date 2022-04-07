using AutoMapper;
using CSharpReact.Entities.Models;
using CSharpReact.Repositories.Comments;
using CSharpReact.Repositories.Repositories.Articles;
using System.Linq;

namespace CSharpReact.Repositories.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            string currentUsername = null;

            CreateMap<Article, Article>();

            CreateMap<Article, ArticleDto>()
                .ForMember(x => x.CreatorUsername, opt => opt.MapFrom(y => y.Contributors
                    .FirstOrDefault(h => h.IsCreator).AppUser.UserName));

            CreateMap<ArticleContributor, ContributorDto>()
                .ForMember(x => x.DisplayName, opt => opt.MapFrom(s => s.AppUser.DisplayName))
                .ForMember(x => x.Username, opt => opt.MapFrom(s => s.AppUser.UserName))
                .ForMember(x => x.Bio, opt => opt.MapFrom(s => s.AppUser.Bio))
                .ForMember(d => d.Image, opt => opt.MapFrom(s => s.AppUser.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(d => d.FollowersCount, opt => opt.MapFrom(s => s.AppUser.Followers.Count))
                .ForMember(d => d.FollowingCount, opt => opt.MapFrom(s => s.AppUser.Followings.Count))
                .ForMember(d => d.Following, opt => opt.MapFrom(s => s.AppUser.Followers.Any(x => x.Observer.UserName == currentUsername))); ;

            CreateMap<AppUser, Profiles.Profile>()
                .ForMember(d => d.Image, opt => opt.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(d => d.FollowersCount, opt => opt.MapFrom(s => s.Followers.Count))
                .ForMember(d => d.FollowingCount, opt => opt.MapFrom(s => s.Followings.Count))
                .ForMember(d => d.Following, opt => opt.MapFrom(s => s.Followers.Any(x => x.Observer.UserName == currentUsername)));

            CreateMap<Comment, CommentDto>()
                .ForMember(x => x.DisplayName, opt => opt.MapFrom(y => y.Author.DisplayName))
                .ForMember(x => x.Username, opt => opt.MapFrom(y => y.Author.UserName))
                .ForMember(d => d.Image, opt => opt.MapFrom(s => s.Author.Photos.FirstOrDefault(x => x.IsMain).Url));
        }
    }
}
