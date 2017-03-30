using Microsoft.SqlServer.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Angular.Models
{
    public abstract class SearchPagedBase
    {
        public abstract Boolean HasResults { get; }
    }
    public class SearchPagedList<TCriteria, TResult> : SearchPagedBase
    {
        public virtual TCriteria Criteria { get; set; }
        public virtual IEnumerable<TResult> Results { get; set; }

        public SearchPagedList()
        {
            this.Criteria = Activator.CreateInstance<TCriteria>();
        }
        public SearchPagedList(TCriteria criteria, IEnumerable<TResult> results = null)
        {
            this.Criteria = criteria;
            this.Results = results;
        }

        public override bool HasResults
        {
            get { return this.Results != null && this.Results.Any(); }
        }
    }
}
