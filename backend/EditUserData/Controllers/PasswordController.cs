using System;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace YourNamespace.Controllers
{
    [Route("api/User")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ChangePassword(int id, [FromBody] PasswordChangeModel model)
        {
            try
            {
                // Validate the incoming data
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                // TODO: Perform authentication and authorization checks here
                // Example: Check if the user with the provided ID exists and is authenticated

                // Connect to your database and update the user's password
                using (var connection = new SqlConnection(_configuration.GetConnectionString("YourConnectionString")))
                {
                    await connection.OpenAsync();

                    // Update the user's password in the database using the provided ID
                    string updateQuery = "UPDATE Users SET Password = @NewPassword WHERE Id = @Id";
                    using (var command = new SqlCommand(updateQuery, connection))
                    {
                        command.Parameters.AddWithValue("@NewPassword", model.NewPassword);
                        command.Parameters.AddWithValue("@Id", id);

                        await command.ExecuteNonQueryAsync();
                    }
                }

                return Ok(new { message = "Password changed successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "An error occurred while changing the password" });
            }
        }
    }

    public class PasswordChangeModel
    {
        public string CurrentPassword { get; set; }
        public string NewPassword { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
