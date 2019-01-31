namespace EFAZS.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Tanks_A92
    {
        public int id { get; set; }

        public DateTime changed { get; set; }

        [Required]
        [StringLength(50)]
        public string user { get; set; }

        public bool B2 { get; set; }

        public bool B3 { get; set; }

        public bool B9 { get; set; }

        public bool B11 { get; set; }

        public bool B16 { get; set; }
    }
}
