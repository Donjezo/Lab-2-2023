using System;

namespace PostimetFinale.Models
{
    public class Smundja
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int SpecializimiId { get; set; }
        public Specializimi Specializimi { get; set; }
    }
}