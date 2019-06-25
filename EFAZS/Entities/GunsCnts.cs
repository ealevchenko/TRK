namespace EFAZS.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class GunsCnts
    {
        public int ID { get; set; }

        public DateTime? TimeStamp { get; set; }

        [StringLength(50)]
        public string Operator { get; set; }

        public int? SmenaID { get; set; }

        [Column("1-1")]
        public int? C1_1 { get; set; }

        [Column("1-2")]
        public int? C1_2 { get; set; }

        [Column("2-1")]
        public int? C2_1 { get; set; }

        [Column("2-2")]
        public int? C2_2 { get; set; }

        [Column("3-1")]
        public int? C3_1 { get; set; }

        [Column("3-2")]
        public int? C3_2 { get; set; }

        [Column("4-1")]
        public int? C4_1 { get; set; }

        [Column("4-2")]
        public int? C4_2 { get; set; }

        [Column("5-1")]
        public int? C5_1 { get; set; }

        [Column("5-2")]
        public int? C5_2 { get; set; }

        [Column("6-1")]
        public int? C6_1 { get; set; }

        [Column("6-2")]
        public int? C6_2 { get; set; }

        [Column("7-1")]
        public int? C7_1 { get; set; }

        [Column("7-2")]
        public int? C7_2 { get; set; }

        [Column("7-3")]
        public int? C7_3 { get; set; }

        [Column("7-4")]
        public int? C7_4 { get; set; }

        [Column("7-5")]
        public int? C7_5 { get; set; }

        [Column("7-6")]
        public int? C7_6 { get; set; }

        [Column("7-7")]
        public int? C7_7 { get; set; }

        [Column("7-8")]
        public int? C7_8 { get; set; }

        [Column("8-1")]
        public int? C8_1 { get; set; }

        [Column("8-2")]
        public int? C8_2 { get; set; }

        [Column("8-3")]
        public int? C8_3 { get; set; }

        [Column("8-4")]
        public int? C8_4 { get; set; }

        [Column("8-5")]
        public int? C8_5 { get; set; }

        [Column("8-6")]
        public int? C8_6 { get; set; }

        [Column("8-7")]
        public int? C8_7 { get; set; }

        [Column("8-8")]
        public int? C8_8 { get; set; }

        [Column("9-1")]
        public int? C9_1 { get; set; }
    }
}
