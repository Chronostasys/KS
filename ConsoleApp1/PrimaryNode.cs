using System.Collections.Generic;

namespace VegDatabaseCS
{
    public class PrimaryNode
    {
        public PrimaryNode()
        {
            ClassId = new char();
            ClassName = "";
            SecondaryList = new List<SecondaryNode>();
        }
        public PrimaryNode(char id, string name):this()
        {
            ClassId = id;
            ClassName = name;
        }
        public char ClassId { get; set; }
        public string ClassName { get; set; }
        public List<SecondaryNode> SecondaryList { get; set; }
    }
}
