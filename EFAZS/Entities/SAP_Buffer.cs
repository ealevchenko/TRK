namespace EFAZS.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class SAP_Buffer
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SAP_Buffer()
        {
            FuelSale = new HashSet<FuelSale>();
        }
        public int id { get; set; }

        [Column(TypeName = "date")]
        public DateTime DATE { get; set; }

        public TimeSpan TIME { get; set; }

        [Required]
        [StringLength(40)]
        public string LOGIN_R { get; set; }

        [Required]
        [StringLength(200)]
        public string N_BAK { get; set; }

        [Required]
        [StringLength(18)]
        public string OZM_BAK { get; set; }

        [Required]
        [StringLength(18)]
        public string OZM_TREB { get; set; }

        [Required]
        [StringLength(1)]
        public string FLAG_R { get; set; }

        [StringLength(40)]
        public string PLOTNOST { get; set; }

        public double? VOLUME { get; set; }

        public double? MASS { get; set; }

        [StringLength(20)]
        public string LOGIN_EXP { get; set; }

        [StringLength(2)]
        public string N_POST { get; set; }

        [Required]
        [StringLength(40)]
        public string TRANSP_FAKT { get; set; }

        [StringLength(10)]
        public string N_DEB { get; set; }

        [Required]
        [StringLength(40)]
        public string N_TREB { get; set; }

        [StringLength(4)]
        public string LGORT { get; set; }

        [StringLength(4)]
        public string WERKS { get; set; }

        public DateTime? sending { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<FuelSale> FuelSale { get; set; }
    }
}
