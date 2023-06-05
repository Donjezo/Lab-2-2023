using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab2.Models
{
    public class Response
    {
        public int StatusCode { get; set; } 

        public string StatusMessage { get; set; }

        public List<Users> listUsers { get; set; }

        public Users user { get; set; }

        public List<Medicines>listMedicines { get; set; }

        public Medicines medicines { get; set; }

        public List<Cart> listCart { get; set; }

        public List<Orders> listOrders { get; set; }
        public Orders order { get; set; }
        public List<OrderItems> listItem { get; set; }
        public OrderItems orderItem { get; set; }


    }
}
