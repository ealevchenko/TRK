namespace EFAZS.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ReceivingFuel")]
    public partial class ReceivingFuel
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ReceivingFuel()
        {
            ReceivingFuelTanks = new HashSet<ReceivingFuelTanks>();
        }

        public int id { get; set; }

        [Required]
        [StringLength(50)]
        public string operator_name { get; set; }

        public int smena_num { get; set; }

        public DateTime smena_datetime { get; set; }

        public int type { get; set; }

        public int fuel { get; set; }

        [StringLength(20)]
        public string truck_num_nak { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? truck_weight { get; set; }

        [StringLength(200)]
        public string truck_provider { get; set; }

        [StringLength(20)]
        public string railway_num_nak { get; set; }

        public int? railway_num_tanker { get; set; }

        [StringLength(200)]
        public string railway_provider { get; set; }

        [StringLength(10)]
        public string railway_type_capacity { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? railway_nak_volume { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? railway_nak_dens { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? railway_nak_mass { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? railway_manual_level { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? railway_manual_volume { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? railway_manual_dens { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? railway_manual_mass { get; set; }

        public DateTime start_datetime { get; set; }

        public DateTime? stop_datetime { get; set; }

        public DateTime? close { get; set; }

        public DateTime? sending { get; set; } 

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ReceivingFuelTanks> ReceivingFuelTanks { get; set; }
    }
}
