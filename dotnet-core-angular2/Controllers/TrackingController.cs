using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular.Models;

namespace WebApplicationBasic.Controllers
{
    // TO DO Query database to get full result set

    [Route("api/[controller]")]
    public class TrackingController : Controller
    {
        public String[] Orgs { get; set; }

        [HttpGet("[action]")]
        public IEnumerable<DropDownList> GetReaderOrgs()
        {
            var orgs = new string[] {"Air NZ", "Alaska", "Core", "NZ Post", "Delta" };

            return Enumerable.Range(1, 4).Select(index => new DropDownList {
                Value = index,
                Text = orgs[index]
             });
        }

        [HttpGet("[action]")]
        public IEnumerable<DropDownList> GetSubLocations()
        {
            var orgs = new string[] { "Alpha Delivery", "Avion", "Bag Room", "Cargo", "Checkpoint" };

            return Enumerable.Range(1, 4).Select(index => new DropDownList
            {
                Value = index,
                Text = orgs[index]
            });
        }

    }

    public class DropDownList
    {
        public string Text { get; set; }
        public int Value { get; set; }
    }
}
