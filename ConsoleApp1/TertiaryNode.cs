namespace VegDatabaseCS
{
    public class TertiaryNode
    {
        public TertiaryNode()
        {

        }
        public TertiaryNode(int id,int area,float weight, string year)
        {
            Id = id;
            Area = area;
            Weight = weight;
            Year = year;
        }
        public int VegId { get; set; }
        public int Id { get; set; }
        public int Area { get; set; }
        public float Weight { get; set; }
        public string Year { get; set; }
    }
}
