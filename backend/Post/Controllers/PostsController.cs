using Lab2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data.SqlTypes;

namespace Post.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostimetController : ControllerBase
    {
        private string connectionString = "Server=.; Database=PostimetLab2; Trusted_Connection=True;TrustServerCertificate=True;";

        [HttpGet]
        public IActionResult GetAllPostimet()
        {
            List<Postimet> postimetList = new List<Postimet>();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string query = "SELECT ID, autorId, autorName, title, content, likes FROM Postimet";

                SqlCommand command = new SqlCommand(query, connection);

                connection.Open();
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    Postimet postimet = new Postimet()
                    {
                        ID = Convert.ToInt32(reader["ID"]),
                        AutorId = Convert.ToInt32(reader["autorId"]),
                        AutorName = reader["autorName"].ToString(),
                        Title = reader["title"].ToString(),
                        Content = reader["content"].ToString(),
                        Likes = Convert.ToInt32(reader["likes"])
                    };

                    postimetList.Add(postimet);
                }
            }

            return Ok(postimetList);
        }

        [HttpPost]
        public IActionResult CreatePostimet([FromBody] Postimet postimet)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string query = "INSERT INTO Postimet (autorId, autorName, title, content, likes) " +
                               "VALUES (@AutorId, @AutorName, @Title, @Content, @Likes)";

                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@AutorId", postimet.AutorId);
                command.Parameters.AddWithValue("@AutorName", postimet.AutorName);
                command.Parameters.AddWithValue("@Title", postimet.Title);
                command.Parameters.AddWithValue("@Content", postimet.Content);
                command.Parameters.AddWithValue("@Likes", postimet.Likes);

                connection.Open();
                command.ExecuteNonQuery();
            }

            return Ok("Postimet created successfully.");
        }

        [HttpPut("{id}")]
        public IActionResult UpdatePostimett(int id, [FromBody] Postimet postimet)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string query = "UPDATE Postimet SET autorId = @AutorId, autorName = @AutorName, " +
                               "title = @Title, content = @Content, likes = @Likes WHERE ID = @ID";

                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@AutorId", postimet.AutorId);
                command.Parameters.AddWithValue("@AutorName", postimet.AutorName);
                command.Parameters.AddWithValue("@Title", postimet.Title);
                command.Parameters.AddWithValue("@Content", postimet.Content);
                command.Parameters.AddWithValue("@Likes", postimet.Likes);
                command.Parameters.AddWithValue("@ID", id);

                connection.Open();
                int rowsAffected = command.ExecuteNonQuery();

                if (rowsAffected > 0)
                {
                    return Ok("Postimet updated successfully.");
                }
                else
                {
                    return NotFound("Postimet not found.");
                }
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePostimet(int id)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string query = "DELETE FROM Postimet WHERE ID = @ID";

                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@ID", id);

                connection.Open();
                int rowsAffected = command.ExecuteNonQuery();

                if (rowsAffected > 0)
                {
                    return Ok("Postimet deleted successfully.");
                }
                else
                {
                    return NotFound("Postimet not found.");
                }
            }
        }
    }
}
