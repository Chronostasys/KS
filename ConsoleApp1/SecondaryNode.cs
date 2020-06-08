using System.Collections.Generic;

namespace VegDatabaseCS
{
    public class SecondaryNode
    {
        public SecondaryNode()
        {

        }
        public SecondaryNode(int id, string name, string nutrition, char classId)
        {
            ClassId = classId;
            VegId = id;
            VegName = name;
            Nutrition = nutrition;
            TertiarieList = new List<TertiaryNode>();
        }
        public char ClassId { get; set; }
        public int VegId { get; set; }
        public string VegName { get; set; }
        public string Nutrition { get; set; }
        public List<TertiaryNode> TertiarieList { get; set; }
    }
}
