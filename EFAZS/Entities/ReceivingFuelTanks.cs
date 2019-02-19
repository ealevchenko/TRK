namespace EFAZS.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class ReceivingFuelTanks
    {
        public int id { get; set; }

        public int id_receiving_fuel { get; set; }

        [Required]
        [StringLength(5)]
        public string num { get; set; }

        public int fuel { get; set; }

        public DateTime start_datetime { get; set; }

        [Column(TypeName = "numeric")]
        public decimal start_level { get; set; }

        [Column(TypeName = "numeric")]
        public decimal start_volume { get; set; }

        [Column(TypeName = "numeric")]
        public decimal start_density { get; set; }

        [Column(TypeName = "numeric")]
        public decimal start_mass { get; set; }

        [Column(TypeName = "numeric")]
        public decimal start_temp { get; set; }

        [Column(TypeName = "numeric")]
        public decimal start_water_level { get; set; }

        public DateTime? stop_datetime { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? stop_level { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? stop_volume { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? stop_density { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? stop_mass { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? stop_temp { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? stop_water_level { get; set; }

        public DateTime? close { get; set; }

        public virtual ReceivingFuel ReceivingFuel { get; set; }
    }
}
