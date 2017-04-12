using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using System.Data;
using Microsoft.AspNetCore.Http;

namespace Angular.Models
{
    public class OU
    {
        public Int32 OUID { get; set; }
        public String DisplayName { get; set; }
        public String Name { get; set; }
        public String OUTypeCode { get; set; }
        public String IATACode { get; set; }
        public String ICAOCode { get; set; }
        public String EmailSendAddress { get; set; }
        public String EmailDefaultSubject { get; set; }
        public String EmailFooter { get; set; }

        public String AirlinePrefix { get; set; }
        public String AlertEmails { get; set; }
        public String ContactName { get; set; }
        public Byte[] Logo { get; set; }
        public String SiteTheme { get; set; }
        public String NoPricingMessage { get; set; }
        public String CargoUOM { get; set; }
        public Int32 DimWeightFactor { get; set; }
    }
}
