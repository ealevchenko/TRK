namespace EFAZS.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class OPC_RFID
    {
        public int id { get; set; }

        public DateTime datetime { get; set; }

        public int num_trk { get; set; }

        public bool side { get; set; }

        public int? id_card { get; set; }

        public int id_hi { get; set; }

        public int id_lo { get; set; }
    }
}
