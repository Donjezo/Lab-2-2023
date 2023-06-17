using Lab2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Linq;
using System.Threading.Tasks;

namespace EditUserData.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EditUserDataController : ControllerBase
    {
        public class UserController : ControllerBase
        {
            private string connectionString = "Server=.; Database=Epatient; Trusted_Connection=True;TrustServerCertificate=True;";

            [HttpGet]
            public IActionResult GetAllUsers()
            {
                List<Users> users = new List<Users>();

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("SELECT * FROM Users", connection);
                    connection.Open();

                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        Users user = new Users
                        {
                            ID = (int)reader["ID"],
                            FirstName = reader["FirstName"].ToString(),
                            LastName = reader["LastName"].ToString(),
                            Password = reader["Password"].ToString(),
                            Email = reader["Email"].ToString(),
                            Fund = (decimal)reader["Fund"],
                            Type = reader["Type"].ToString(),
                            Status = (int)reader["Status"],
                            CreatedOn = (DateTime)reader["CreatedOn"]
                        };

                        users.Add(user);
                    }

                    connection.Close();
                }

                return Ok(users);
            }

            [HttpPost]
            public IActionResult CreateUser([FromBody] Users user)
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    // Check if the email already exists in the database
                    SqlCommand checkEmailCommand = new SqlCommand("SELECT COUNT(*) FROM Users WHERE Email = @Email", connection);
                    checkEmailCommand.Parameters.AddWithValue("@Email", user.Email);

                    connection.Open();
                    int emailCount = (int)checkEmailCommand.ExecuteScalar();

                    if (emailCount > 0)
                    {
                        return BadRequest("User with the same email already exists.");
                    }

                    // Continue with user creation if the email is unique
                    SqlCommand insertCommand = new SqlCommand("INSERT INTO Users (FirstName, LastName, Password, Email, Fund, Type, Status, CreatedOn) " +
                                                            "VALUES (@FirstName, @LastName, @Password, @Email, @Fund, @Type, @Status, @CreatedOn)", connection);
                    insertCommand.Parameters.AddWithValue("@FirstName", user.FirstName);
                    insertCommand.Parameters.AddWithValue("@LastName", user.LastName);
                    insertCommand.Parameters.AddWithValue("@Password", user.Password);
                    insertCommand.Parameters.AddWithValue("@Email", user.Email);
                    insertCommand.Parameters.AddWithValue("@Fund", user.Fund);
                    insertCommand.Parameters.AddWithValue("@Type", user.Type);
                    insertCommand.Parameters.AddWithValue("@Status", user.Status);

                    // Check if CreatedOn value is within the allowed range
                    DateTime createdOn = user.CreatedOn < SqlDateTime.MinValue.Value || user.CreatedOn > SqlDateTime.MaxValue.Value
                        ? DateTime.Now
                        : user.CreatedOn;

                    insertCommand.Parameters.AddWithValue("@CreatedOn", createdOn);

                    int rowsAffected = insertCommand.ExecuteNonQuery();
                    connection.Close();

                    if (rowsAffected > 0)
                    {
                        // Return a JSON response instead of a string message
                        return Ok(new { message = "User created successfully." });
                    }
                    else
                    {
                        return BadRequest(new { message = "Failed to create user." });
                    }
                }
            }



            [HttpGet("{id}")]
            public IActionResult GetUserById(int id)
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("SELECT * FROM Users WHERE ID = @Id", connection);
                    command.Parameters.AddWithValue("@Id", id);

                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();

                    if (reader.Read())
                    {
                        Users user = new Users
                        {
                            ID = (int)reader["ID"],
                            FirstName = reader["FirstName"].ToString(),
                            LastName = reader["LastName"].ToString(),
                            Password = reader["Password"].ToString(),
                            Email = reader["Email"].ToString(),
                            Fund = (decimal)reader["Fund"],
                            Type = reader["Type"].ToString(),
                            Status = (int)reader["Status"],
                            CreatedOn = (DateTime)reader["CreatedOn"]
                        };

                        return Ok(user);
                    }
                    else
                    {
                        return NotFound("User not found.");
                    }
                }
            }

            [HttpPut("{id}")]
            public IActionResult UpdateUser(int id, [FromBody] Users user)
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("UPDATE Users SET FirstName = @FirstName, LastName = @LastName, " +
                                                        "Password = @Password, Email = @Email, Fund = @Fund, Type = @Type, " +
                                                        "Status = @Status, CreatedOn = @CreatedOn WHERE ID = @Id", connection);
                    command.Parameters.AddWithValue("@Id", id);
                    command.Parameters.AddWithValue("@FirstName", user.FirstName);
                    command.Parameters.AddWithValue("@LastName", user.LastName);
                    command.Parameters.AddWithValue("@Password", user.Password);
                    command.Parameters.AddWithValue("@Email", user.Email);
                    command.Parameters.AddWithValue("@Fund", user.Fund);
                    command.Parameters.AddWithValue("@Type", user.Type);
                    command.Parameters.AddWithValue("@Status", user.Status);

                    // Check if CreatedOn value is within the allowed range
                    DateTime createdOn = user.CreatedOn < SqlDateTime.MinValue.Value || user.CreatedOn > SqlDateTime.MaxValue.Value
                        ? DateTime.Now
                        : user.CreatedOn;

                    command.Parameters.AddWithValue("@CreatedOn", createdOn);

                    connection.Open();
                    int rowsAffected = command.ExecuteNonQuery();
                    connection.Close();

                    if (rowsAffected > 0)
                    {
                        return Ok("User updated successfully.");
                    }
                    else
                    {
                        return NotFound("User not found.");
                    }
                }
            }


        }
    }
}
