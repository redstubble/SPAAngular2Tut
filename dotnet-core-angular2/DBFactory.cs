using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationBasic;

namespace Angular
{
    public enum Database { Site, Common }
    public class DbFactory : Controller
    {
        private readonly ConnectionString _connectionString;

        public DbFactory(IOptions<ConnectionString> subOptionsAccessor)
        {
            _connectionString = subOptionsAccessor.Value;
        }

        public IDbConnection CreateOpenConnection(Database database)
        {
            var connection = new SqlConnection(_connectionString.Cargo);
            if (connection.State != ConnectionState.Open)
                connection.Open();
            return connection;
        }

        //IDatabase _db = new Database(new SqlConnection(_connectionString),
        //                     DatabaseType.SqlServer2012, SqlClientFactory.Instance);
        //_db.Single<string>("SELECT Username FROM dbo.Member")
    }
}
