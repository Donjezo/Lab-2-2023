using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Post
{
    public class Post
    {
        public int ID { get; set; }
        public int AutorId { get; set; }
        public string AutorName { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int Likes { get; set; }
    }
}
