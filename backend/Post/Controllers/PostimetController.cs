using Lab2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Post.Controllers
{
    [Route("post/getUser")]
    [ApiController]
    public class PostController : ControllerBase

    {
        private string connectionString = "Server=.; Database=Epatient; Trusted_Connection=True;TrustServerCertificate=True;";
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            List<Users> users = new List<Users>();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand("SELECT * FROM post", connection);
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

    }
}
