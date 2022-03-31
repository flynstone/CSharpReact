using System.ComponentModel.DataAnnotations;

namespace CSharpReact.Api.DataTransferObjects
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }
        
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        
        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$", ErrorMessage = "Password must be contain a lower case, an uppercase, a number, and be between 8 and 12 characters")]
        public string Password { get; set; }

        [Required]
        public string Username { get; set; }
    }
}
