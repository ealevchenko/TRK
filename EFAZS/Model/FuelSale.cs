namespace EFAZS.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("FuelSale")]
    public partial class FuelSale
    {
        public int id { get; set; }

        [Required]
        [StringLength(50)]
        public string operator_name { get; set; }

        public int smena_num { get; set; }

        public DateTime smena_datetime { get; set; }

        public int trk_num { get; set; }

        public bool side { get; set; }

        public int num { get; set; }

        public int fuel_type { get; set; }

        [Required]
        [StringLength(200)]
        public string tank_num { get; set; }

        public int id_card { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? dose { get; set; }

        [Required]
        [StringLength(1)]
        public string passage { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? volume { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? mass { get; set; }

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

        public int start_counter { get; set; }

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

        public int? stop_counter { get; set; }

        public DateTime? close { get; set; }

        public int? id_sap { get; set; }

        public DateTime? sending { get; set; }

        public virtual SAP_Buffer SAP_Buffer { get; set; }
    }
}
