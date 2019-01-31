namespace EFAZS.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Tanks_dt
    {
        public int id { get; set; }

        public DateTime changed { get; set; }

        [Required]
        [StringLength(50)]
        public string user { get; set; }

        [Column("1")]
        public bool C1 { get; set; }

        [Column("2")]
        public bool C2 { get; set; }

        [Column("3")]
        public bool C3 { get; set; }

        [Column("4")]
        public bool C4 { get; set; }

        [Column("5")]
        public bool C5 { get; set; }

        [Column("6")]
        public bool C6 { get; set; }

        [Column("7")]
        public bool C7 { get; set; }

        [Column("8")]
        public bool C8 { get; set; }

        [Column("9")]
        public bool C9 { get; set; }

        [Column("10")]
        public bool C10 { get; set; }

        [Column("11")]
        public bool C11 { get; set; }

        [Column("12")]
        public bool C12 { get; set; }

        [Column("13")]
        public bool C13 { get; set; }

        [Column("14")]
        public bool C14 { get; set; }

        [Column("15")]
        public bool C15 { get; set; }

        [Column("16")]
        public bool C16 { get; set; }

        [Column("17")]
        public bool C17 { get; set; }

        [Column("18")]
        public bool C18 { get; set; }

        [Column("19")]
        public bool C19 { get; set; }

        [Column("20")]
        public bool C20 { get; set; }

        [Column("21")]
        public bool C21 { get; set; }

        [Column("22")]
        public bool C22 { get; set; }

        [Column("23")]
        public bool C23 { get; set; }

        [Column("24")]
        public bool C24 { get; set; }

        [Column("25")]
        public bool C25 { get; set; }

        [Column("26")]
        public bool C26 { get; set; }

        [Column("27")]
        public bool C27 { get; set; }

        [Column("28")]
        public bool C28 { get; set; }

        [Column("29")]
        public bool C29 { get; set; }

        [Column("30")]
        public bool C30 { get; set; }

        [Column("31")]
        public bool C31 { get; set; }

        [Column("32")]
        public bool C32 { get; set; }
    }
}
