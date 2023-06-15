namespace Post.Controllers
{
    internal class Postimet
    {
        public int ID { get; set; }
        public int AutorId { get; set; }
        public string AutorName { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int Likes { get; set; }
    }
}