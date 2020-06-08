using System;

namespace VegDatabaseFront.Data
{
    public class WeatherForecast
    {
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string Summary { get; set; }
    }
    public class AnalyzeResult1
    {
        public string VegClass { get; set; }
        public int TotleSize { get; set; }
        public float TotleWeight { get; set; }
    }
    public class AnalyzeResult2
    {
        public string Year { get; set; }
        public string VegName { get; set; }
        public string VegClass { get; set; }
        public int TotleSize { get; set; }
        public float TotleWeight { get; set; }
    }
    public class AnalyzeResult3
    {
        public string VegName { get; set; }
        public int TotleNum { get; set; }
    }
    public class Ex1
    {
        public string VegClass { get; set; }
        public float TotleWeight { get; set; }
        public int TotleSize { get; set; }
        public string Year { get; set; }
    }
    public class JoinedClass1
    {
        public char ClassId { get; set; }
        public string ClassName { get; set; }
        public int VegId { get; set; }
        public string VegName { get; set; }
        public string Nutrition { get; set; }
    }
    public class JoinedClass2
    {
        public char ClassId { get; set; }
        public string ClassName { get; set; }
        public int VegId { get; set; }
        public string VegName { get; set; }
        public string Nutrition { get; set; }
        public int Id { get; set; }
        public int Area { get; set; }
        public float Weight { get; set; }
        public string Year { get; set; }
    }
}
