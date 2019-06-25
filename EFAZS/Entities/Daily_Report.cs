namespace EFAZS.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Daily_Report
    {
        public int id { get; set; }

        [StringLength(10)]
        public string type { get; set; }

        public DateTime? date_start { get; set; }

        public DateTime? date_stop { get; set; }

        public int? volume_start { get; set; }

        public double? mass_start { get; set; }

        public double? dens_start { get; set; }

        public int? volume_consumption { get; set; }

        public int? volume_coming { get; set; }

        public double? mass_consumption { get; set; }

        public double? mass_coming { get; set; }

        public int? volume_stop { get; set; }

        public double? mass_stop { get; set; }

        public double? dens_stop { get; set; }

        public DateTime? send { get; set; }
    }
}
