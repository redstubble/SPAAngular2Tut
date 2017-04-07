using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular.Models;

namespace WebApplicationBasic.Controllers
{

    [Route("api/[controller]")]
    public class TrackingController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<DropDownList> GetReaderOrgs()
        {
            var orgs = new string[] { "Any", "Air NZ", "Alaska", "Core", "NZ Post", "Delta" };

            return Enumerable.Range(0, 4).Select(index => new DropDownList {
                Value = index,
                Text = orgs[index]
             });
        }
    
        public String[] Orgs { get; set; }

        public class DropDownList
        {
            public string Text { get; set; }
            public int Value{ get; set; }
        }

        //private static string[] Summaries = new[]
        //{
        //    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        //};

        //[HttpGet("[action]")]
        //public IEnumerable<WeatherForecast> WeatherForecasts()
        //{
        //    var rng = new Random();
        //    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //    {
        //        DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
        //        TemperatureC = rng.Next(-20, 55),
        //        Summary = Summaries[rng.Next(Summaries.Length)]
        //    });
        //}

        //public class WeatherForecast
        //{
        //    public string DateFormatted { get; set; }
        //    public int TemperatureC { get; set; }
        //    public string Summary { get; set; }

        //    public int TemperatureF
        //    {
        //        get
        //        {
        //            return 32 + (int)(TemperatureC / 0.5556);
        //        }
        //    }
        //}
    }
}
