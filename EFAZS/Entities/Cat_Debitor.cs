namespace EFAZS.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Cat_Debitor
    {
        [Key]
        [StringLength(10)]
        public string kunnr { get; set; }

        [Required]
        [StringLength(50)]
        public string name { get; set; }
    }
}
