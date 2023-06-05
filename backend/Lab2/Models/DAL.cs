using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;

namespace Lab2.Models
{
    public class DAL
    {
        public Response register(Users users, SqlConnection connection)
        {
            Response response = new Response();

            SqlCommand cmd = new SqlCommand("AddUser", connection);
            cmd.CommandType = CommandType.StoredProcedure;

            SqlParameter paramFirstName = new SqlParameter("@FirstName", SqlDbType.NVarChar, 50);
            paramFirstName.Value = users.FirstName;
            cmd.Parameters.Add(paramFirstName);

            SqlParameter paramLastName = new SqlParameter("@LastName", SqlDbType.NVarChar, 50);
            paramLastName.Value = users.LastName;
            cmd.Parameters.Add(paramLastName);

            SqlParameter paramPassword = new SqlParameter("@Password", SqlDbType.NVarChar, 50);
            paramPassword.Value = users.Password;
            cmd.Parameters.Add(paramPassword);

            SqlParameter paramEmail = new SqlParameter("@Email", SqlDbType.NVarChar, 100);
            paramEmail.Value = users.Email;
            cmd.Parameters.Add(paramEmail);

            SqlParameter paramFund = new SqlParameter("@Fund", SqlDbType.Decimal);
            paramFund.Value = 0;
            cmd.Parameters.Add(paramFund);

            SqlParameter paramType = new SqlParameter("@Type", SqlDbType.NVarChar, 50);
            paramType.Value = "Users";
            cmd.Parameters.Add(paramType);

            SqlParameter paramStatus = new SqlParameter("@Status", SqlDbType.NVarChar, 50);
            paramStatus.Value = "Pending";
            cmd.Parameters.Add(paramStatus);

            SqlParameter paramCreatedOn = new SqlParameter("@CreatedOn", SqlDbType.DateTime);
            paramCreatedOn.Value = DateTime.Now;
            cmd.Parameters.Add(paramCreatedOn);

            SqlParameter paramUserID = new SqlParameter("@UserID", SqlDbType.Int);
            paramUserID.Direction = ParameterDirection.Output;
            cmd.Parameters.Add(paramUserID);

            connection.Open();
            int result = cmd.ExecuteNonQuery();
            connection.Close();

            if (result > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "User registered successfully";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "User registration failed";
            }

            return response;
        }

        
        
        public Response login(Users users, SqlConnection connection)
        {
            SqlDataAdapter da = new SqlDataAdapter("sp_login", connection);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.SelectCommand.Parameters.AddWithValue("@Email", users.Email);
            da.SelectCommand.Parameters.AddWithValue("@Password", users.Password);
            DataTable dt = new DataTable();
            da.Fill(dt);
            Response response = new Response();
            Users user = new Users();
            if (dt.Rows.Count>0)
            {
                user.ID = Convert.ToInt32(dt.Rows[0]["ID"]);
                user.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
                user.LastName = Convert.ToString(dt.Rows[0]["LastName"]);
                user.Email = Convert.ToString(dt.Rows[0]["Email"]);
                user.Type = Convert.ToString(dt.Rows[0]["Type"]);
                response.StatusCode = 200;
                response.StatusMessage = "User is  valid";
                response.user = user;
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "User is  invalid";
                response.user =null;
            }
            return response;
        }

        public Response viewUser(Users users, SqlConnection connection)
        {
            SqlDataAdapter da = new SqlDataAdapter("p_viewUsers",connection);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.SelectCommand.Parameters.AddWithValue("@ID", users.ID);
            DataTable dt = new DataTable();
            da.Fill(dt);
            Users user = new Users();
            Response response = new Response();
            if (dt.Rows.Count > 0)
            {

                user.ID = Convert.ToInt32(dt.Rows[0]["ID"]);
                user.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
                user.LastName = Convert.ToString(dt.Rows[0]["LastName"]);
                user.Email = Convert.ToString(dt.Rows[0]["Email"]);
                user.Type = Convert.ToString(dt.Rows[0]["Type"]);
                user.Fund = Convert.ToDecimal(dt.Rows[0]["Fund"]);
                user.CreatedOn = Convert.ToDateTime(dt.Rows[0]["CreatedOn"]);
                response.StatusCode = 200;
                response.StatusMessage = "User dosent exist";
                
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "User  does not exist";
                response.user = user;

            }
                return response;
        }

        public Response updateProfile(Users users, SqlConnection connecition)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("sp_updateProfile", connecition);
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@FirstName", users.FirstName);
            cmd.Parameters.AddWithValue("@LastName", users.LastName);
            cmd.Parameters.AddWithValue("@Password", users.Password);
            cmd.Parameters.AddWithValue("@Email", users.Email);
            connecition.Open();
            int i = cmd.ExecuteNonQuery();
            connecition.Close();
            if(i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Record updated sucessfuly";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Some errorr occured. Try after sometime";
            }


            return response;
        }

        public Response  addToCart (Cart cart , SqlConnection connection)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("sp_AddToCart", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@UserId", cart.UserID);
            cmd.Parameters.AddWithValue("@MedicineID", cart.MedicineID);
            cmd.Parameters.AddWithValue("@UnitPrice", cart.UnitPrice);
            cmd.Parameters.AddWithValue("@Discount", cart.Discount);
            cmd.Parameters.AddWithValue("@Quantity", cart.Quantity);
            cmd.Parameters.AddWithValue("@TotalPrice", cart.TotalPrice);
            connection.Open();

            int i = cmd.ExecuteNonQuery();
            if(i>0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Item addedd";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Item is not addedd, an error accured";
            }
            return response;
        }

        public Response placeOrder(Users users,SqlConnection connection)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("sp_PlaseOrder", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ID", users.ID);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Order has been plased   successfully";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Order canot be plased  ";
            }

            return response;
        }
        public Response orderList(Users users, SqlConnection connection)
        {
            Response response = new Response();
            List<Orders> listOrder = new List<Orders>();
            SqlDataAdapter da = new SqlDataAdapter("sp_OrderList", connection);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;

            da.SelectCommand.Parameters.AddWithValue("@Type", users.Type);
            da.SelectCommand.Parameters.AddWithValue("@ID", users.ID);
            da.SelectCommand.Parameters.AddWithValue("@Type", users.Type);

            DataTable dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                for (int e = 0; e < dt.Rows.Count; e++)
                {
                    Orders order = new Orders();
                    order.ID = Convert.ToInt32(dt.Rows[e]["ID"]);
                    order.OrderNo = Convert.ToString(dt.Rows[e]["OrderNo"]);
                    order.OrderTotal= Convert.ToDecimal(dt.Rows[e]["OrderTotal"]);
                    order.OrderStatus = Convert.ToString(dt.Rows[e]["OrderStatus"]);
                    listOrder.Add(order);
                }
                if(listOrder.Count>0)
                {
                    response.StatusCode = 200;
                    response.StatusMessage = "Order  detail fetched";
                    response.listOrders = listOrder;
                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "Order canot be plased  ";
                    response.listOrders = null;
                }

                
            }else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Order canot be plased  ";
                response.listOrders = null;
            }
            return response; ;

        }


    }

}
