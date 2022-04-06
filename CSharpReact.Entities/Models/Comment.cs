using System;

namespace CSharpReact.Entities.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public AppUser Author { get; set; }
        public Article Article { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
