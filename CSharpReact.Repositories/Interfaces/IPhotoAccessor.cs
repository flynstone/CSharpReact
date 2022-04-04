using CSharpReact.Repositories.Photos;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace CSharpReact.Repositories.Interfaces
{
    public interface IPhotoAccessor
    {
        Task<PhotoUploadResult> AddPhoto(IFormFile file);
        Task<string> DeletePhoto(string publicId);
    }
}
