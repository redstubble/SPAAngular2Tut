using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular.Models;
using Angular;
using Microsoft.Extensions.Options;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace WebApplicationBasic.Controllers
{
    // TO DO Query database to get full result set

    [Route("api/[controller]")]
    public class TrackingController : Controller
    {
        private readonly ConnectionString _connectionString;

        public TrackingController(IOptions<ConnectionString> subOptionsAccessor)
        {
           this._connectionString = subOptionsAccessor.Value;
        }

        public IDbConnection CreateOpenConnection(Database database)
        {
            var connection = new SqlConnection(_connectionString.Cargo);
            if (connection.State != ConnectionState.Open)
                connection.Open();
            return connection;
        }

        public String[] Orgs { get; set; }



        [HttpPost("[action]")]
        public IEnumerable<dynamic> SearchTracking([FromBody] TrackingSearchCriteria c)
        {
            var list = new List<dynamic>();
            //using (var cnn = CreateOpenConnection(Database.Site))
            //{
            //    list = cnn.Query("usp_EquipmentEvent_SearchTracking", new {
            //            OUID = 0,
            //            c.LocationOUID,
            //            c.Location,
            //            c.SubLocation,
            //            c.TagID,
            //            c.EquipmentCategory,
            //            c.EquipmentType,
            //            c.EquipmentNo,
            //            TimestampLFrom = c.FromDate,
            //            TimestampLTo = c.ToDate,
            //            TimeZone = 'Z'
            //        }, commandType: System.Data.CommandType.StoredProcedure).ToList();

            //};
            return list;

        }

        [HttpGet("[action]")]
        public IEnumerable<SelectListItem> GetReaderOrgs()
        {
            return List();
            //return l.Select(i => new DropDownList
            //{
            //    Value = i.OUID,
            //    Text = i.DisplayName
            //});
        }

        [HttpGet("[action]")]
        public IEnumerable<SelectListItem> GetSubLocations()
        {
            return SubLocationList();
            //var orgs = new string[] { "Alpha Delivery", "Avion", "Bag Room", "Cargo", "Checkpoint" };

            //return Enumerable.Range(1, 4).Select(index => new DropDownList
            //{
            //    Value = index,
            //    Text = orgs[index]
            //});
        }

        public List<SelectListItem> List()
        {
            var list = new List<OU>();
            using (var cnn = CreateOpenConnection(Database.Site))
            {
                list = cnn.Query<OU>("usp_OU_List", commandType: System.Data.CommandType.StoredProcedure).ToList();
                return list.Select(s => new SelectListItem
                {
                    Text = s.DisplayName,
                    Value = s.OUID.ToString()
                }).ToList(); ;
            };
        }


        public List<SelectListItem> SubLocationList(string defaultText = null)
        {
            var list = new List<SelectListItem>();
            using (var cnn = CreateOpenConnection(Database.Site))
            {
                list = cnn.Query("usp_SubLocation_List", commandType: CommandType.StoredProcedure).ToList().Select(s => new SelectListItem { Text = s.SubLocationProper, Value = s.SubLocation }).ToList();
            }
            //if (defaultText != null)
            //    list.Insert(0, new SelectListItem { Text = defaultText, Value = "" });
            return list;
        }

    }

    public class DropDownList
    {
        public string Text { get; set; }
        public int Value { get; set; }
    }




}
