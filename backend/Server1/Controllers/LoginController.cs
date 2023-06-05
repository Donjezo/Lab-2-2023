using IdentityServer4.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Server1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private string _dbContext = "Server=.; Database=Epatient; Trusted_Connection=True;TrustServerCertificate=True;";
     
        private readonly IIdentityServerInteractionService _interactionService;

        public LoginController(YourDbContext dbContext, IIdentityServerInteractionService interactionService)
        {
            _dbContext = dbContext;
            _interactionService = interactionService;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            // Validate the login request
            var context = await _interactionService.GetAuthorizationContextAsync(request.ReturnUrl);
            if (context == null)
            {
                ModelState.AddModelError("", "Invalid login request");
                return BadRequest(new { Error = "Invalid login request" });
            }

            // Validate the user credentials against the database
            var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (user == null || !VerifyPassword(request.Password, user.Password))
            {
                ModelState.AddModelError("", "Invalid email or password");
                return BadRequest(new { Error = "Invalid email or password" });
            }

            // Generate a token
            var tokenResponse = await _interactionService.CreateTokenResponseAsync(new TokenRequest
            {
                GrantType = GrantTypes.Password,
                UserName = request.Email,
                Password = request.Password,
                ValidatedRequest = new ValidatedRequest(context, request)
            });

            if (tokenResponse.IsError)
            {
                ModelState.AddModelError("", "Invalid email or password");
                return BadRequest(new { Error = "Invalid email or password" });
            }

            return Ok(tokenResponse);
        }

        private bool VerifyPassword(string enteredPassword, string storedPassword)
        {
            // Implement your password verification logic here
            // You can use a hashing algorithm and compare the hashed passwords
            // Example: return HashingHelper.VerifyPassword(enteredPassword, storedPassword);
            // Replace HashingHelper with your own helper class or library

            // For demonstration purposes, this example compares the passwords directly
            return enteredPassword == storedPassword;
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string ReturnUrl { get; set; }
    }
}
