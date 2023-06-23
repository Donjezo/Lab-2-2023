using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PostimetFinale.Models
{
    public class Ekipi
    {
        public int ID { get; set; }
        public string Emri { get; set; }
        public string Qyteti { get; set; }
        public int LigaID { get; set; }

        public Liga Liga { get; set; }
    }
}
