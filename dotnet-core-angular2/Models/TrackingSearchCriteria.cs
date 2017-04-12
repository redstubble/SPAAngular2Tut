using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace Angular.Models
{
    public class TrackingSearchCriteria
    {
        [Display(Name = "Reader Organization")]
        public Int32 LocationOUID { get; set; }

        [StringLength(3)]
        public String Location { get; set; }

        public String SubLocation { get; set; }
        public String subLocation { get; set; }

        [Display(Name = "Tag ID")]
        [Range(1, Int32.MaxValue, ErrorMessage = "Tag ID is invalid")]
        public Int32? TagID { get; set; }

        [Display(Name = "Equipment Category")]
        [DataType("EquipmentCategory")]
        public string EquipmentCategory { get; set; }

        [Display(Name = "Equipment Type")]
        [DataType("EquipmentType")]
        public String EquipmentType { get; set; }

        [Display(Name = "Equipment No")]
        public String EquipmentNo { get; set; }

        [DataType(DataType.DateTime)]
        [Display(Name = "From")]
        [Required(ErrorMessage = "The From Date is required.")]
        public DateTime FromDate { get; set; }

        [DataType(DataType.DateTime)]
        [Display(Name = "To")]
        [Required(ErrorMessage = "The To Date is required.")]
        public DateTime ToDate { get; set; }

        [DataType(DataType.Time)]
        [Display(Name = "First Seen")]
        public DateTime FirstSeen { get; set; }

        [DataType(DataType.Time)]
        [Display(Name = "Last Seen")]
        public DateTime LastSeen { get; set; }

        [DataType(DataType.Time)]
        [Display(Name = "Dwell Time")]
        public TimeSpan DwellTime { get; set; }

        public bool DrillDown { get; set; }
    }
}
