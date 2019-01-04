namespace EFAZS.Concrete
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using EFAZS.Entities;

    public partial class EFDbContext : DbContext
    {
        public EFDbContext()
            : base("name=AZS")
        {
        }

        public virtual DbSet<Cat_Depots> Cat_Depots { get; set; }
        public virtual DbSet<Cat_OZM> Cat_OZM { get; set; }
        public virtual DbSet<Cat_Werks> Cat_Werks { get; set; }
        public virtual DbSet<OPC_RFID> OPC_RFID { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cat_Werks>()
            .HasMany(e => e.Cat_Depots)
            .WithRequired(e => e.Cat_Werks)
            .HasForeignKey(e => e.parent_id)
            .WillCascadeOnDelete(false);

        }
    }
}
