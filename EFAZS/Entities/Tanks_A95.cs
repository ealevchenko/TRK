namespace EFAZS.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Tanks_A95
    {
        public int id { get; set; }

        public DateTime changed { get; set; }

        [Required]
        [StringLength(50)]
        public string user { get; set; }

        public bool B17 { get; set; }

        public bool B18 { get; set; }

        public bool B19 { get; set; }

        public bool B20 { get; set; }
    }
}
