using Lab2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;

namespace Lab2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicinesController : ControllerBase
    {
        private string connectionString = "Server=.; Database=Epatient; Trusted_Connection=True;TrustServerCertificate=True;";

        [HttpGet]
        public IActionResult GetAllMedicines()
        {
            try
            {
                List<Medicines> medicines = new List<Medicines>();

                using (SqlConnection connection = new SqlConnection(connectionString))
                using (SqlCommand command = new SqlCommand("SELECT * FROM Medicines", connection))
                {
                    connection.Open();
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Medicines medicine = new Medicines
                            {
                                ID = (int)reader["ID"],
                                Name = reader["Name"].ToString(),
                                Manufacturer = reader["Manufacturer"].ToString(),
                                UnitPrice = (decimal)reader["UnitPrice"],
                                Discount = (decimal)reader["Discount"],
                                Quantity = (int)reader["Quantity"],
                                ExoDate = (DateTime)reader["ExoDate"],
                                ImageUrl = reader["ImageUrl"].ToString(),
                                Status = (int)reader["Status"]
                            };

                            medicines.Add(medicine);
                        }
                    }
                }

                return Ok(medicines);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while retrieving the medicines.");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetMedicineById(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                using (SqlCommand command = new SqlCommand("SELECT * FROM Medicines WHERE ID = @Id", connection))
                {
                    command.Parameters.AddWithValue("@Id", id);

                    connection.Open();
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            Medicines medicine = new Medicines
                            {
                                ID = (int)reader["ID"],
                                Name = reader["Name"].ToString(),
                                Manufacturer = reader["Manufacturer"].ToString(),
                                UnitPrice = (decimal)reader["UnitPrice"],
                                Discount = (decimal)reader["Discount"],
                                Quantity = (int)reader["Quantity"],
                                ExoDate = (DateTime)reader["ExoDate"],
                                ImageUrl = reader["ImageUrl"].ToString(),
                                Status = (int)reader["Status"]
                            };

                            return Ok(medicine);
                        }
                        else
                        {
                            return NotFound("Medicine not found.");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while retrieving the medicine.");
            }
        }

        [HttpPost]
        public IActionResult CreateMedicine([FromBody] Medicines medicine)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                using (SqlCommand command = new SqlCommand("INSERT INTO Medicines (Name, Manufacturer, UnitPrice, Discount, Quantity, ExoDate, ImageUrl, Status) " +
                                                        "VALUES (@Name, @Manufacturer, @UnitPrice, @Discount, @Quantity, @ExoDate, @ImageUrl, @Status)", connection))
                {
                    command.Parameters.AddWithValue("@Name", medicine.Name);
                    command.Parameters.AddWithValue("@Manufacturer", medicine.Manufacturer);
                    command.Parameters.AddWithValue("@UnitPrice", medicine.UnitPrice);
                    command.Parameters.AddWithValue("@Discount", medicine.Discount);
                    command.Parameters.AddWithValue("@Quantity", medicine.Quantity);
                    command.Parameters.AddWithValue("@ExoDate", medicine.ExoDate);
                    command.Parameters.AddWithValue("@ImageUrl", medicine.ImageUrl);
                    command.Parameters.AddWithValue("@Status", medicine.Status);

                    connection.Open();
                    int rowsAffected = command.ExecuteNonQuery();

                    if (rowsAffected > 0)
                    {
                        return Ok("Medicine created successfully.");
                    }
                    else
                    {
                        return BadRequest("Failed to create medicine.");
                    }
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while creating the medicine.");
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateMedicine(int id, [FromBody] Medicines medicine)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                using (SqlCommand command = new SqlCommand("UPDATE Medicines SET Name = @Name, Manufacturer = @Manufacturer, " +
                                                        "UnitPrice = @UnitPrice, Discount = @Discount, Quantity = @Quantity, " +
                                                        "ExoDate = @ExoDate, ImageUrl = @ImageUrl, Status = @Status WHERE ID = @Id", connection))
                {
                    command.Parameters.AddWithValue("@Id", id);
                    command.Parameters.AddWithValue("@Name", medicine.Name);
                    command.Parameters.AddWithValue("@Manufacturer", medicine.Manufacturer);
                    command.Parameters.AddWithValue("@UnitPrice", medicine.UnitPrice);
                    command.Parameters.AddWithValue("@Discount", medicine.Discount);
                    command.Parameters.AddWithValue("@Quantity", medicine.Quantity);
                    command.Parameters.AddWithValue("@ExoDate", medicine.ExoDate);
                    command.Parameters.AddWithValue("@ImageUrl", medicine.ImageUrl);
                    command.Parameters.AddWithValue("@Status", medicine.Status);

                    connection.Open();
                    int rowsAffected = command.ExecuteNonQuery();

                    if (rowsAffected > 0)
                    {
                        return Ok("Medicine updated successfully.");
                    }
                    else
                    {
                        return NotFound("Medicine not found.");
                    }
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while updating the medicine.");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteMedicine(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                using (SqlCommand command = new SqlCommand("DELETE FROM Medicines WHERE ID = @Id", connection))
                {
                    command.Parameters.AddWithValue("@Id", id);

                    connection.Open();
                    int rowsAffected = command.ExecuteNonQuery();

                    if (rowsAffected > 0)
                    {
                        return Ok("Medicine deleted successfully.");
                    }
                    else
                    {
                        return NotFound("Medicine not found.");
                    }
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while deleting the medicine.");
            }
        }
    }
}
