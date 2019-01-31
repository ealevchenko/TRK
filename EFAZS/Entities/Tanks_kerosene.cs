namespace EFAZS.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Tanks_kerosene
    {
        public int id { get; set; }

        public DateTime changed { get; set; }

        [Required]
        [StringLength(50)]
        public string user { get; set; }

        [Column("33")]
        public bool C33 { get; set; }

        [Column("38")]
        public bool C38 { get; set; }

        [Column("39")]
        public bool C39 { get; set; }
    }
}
