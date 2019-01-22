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
        public virtual DbSet<FuelSale> FuelSale { get; set; }
        public virtual DbSet<SAP_Buffer> SAP_Buffer { get; set; }
        public virtual DbSet<Cat_Debitor> Cat_Debitor { get; set; }
        public virtual DbSet<Cat_OZM_GSM> Cat_OZM_GSM { get; set; }
        public virtual DbSet<UsersActions> UsersActions { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cat_Werks>()
            .HasMany(e => e.Cat_Depots)
            .WithRequired(e => e.Cat_Werks)
            .HasForeignKey(e => e.parent_id)
            .WillCascadeOnDelete(false);

            modelBuilder.Entity<FuelSale>()
            .Property(e => e.dose)
            .HasPrecision(9, 3);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.passage)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.volume)
                .HasPrecision(9, 3);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.mass)
                .HasPrecision(9, 3);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.start_level)
                .HasPrecision(7, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.start_volume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.start_density)
                .HasPrecision(4, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.start_mass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.start_temp)
                .HasPrecision(3, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.start_water_level)
                .HasPrecision(6, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.stop_level)
                .HasPrecision(7, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.stop_volume)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.stop_density)
                .HasPrecision(4, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.stop_mass)
                .HasPrecision(9, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.stop_temp)
                .HasPrecision(3, 1);

            modelBuilder.Entity<FuelSale>()
                .Property(e => e.stop_water_level)
                .HasPrecision(6, 1);

            modelBuilder.Entity<SAP_Buffer>()
                .HasMany(e => e.FuelSale)
                .WithOptional(e => e.SAP_Buffer)
                .HasForeignKey(e => e.id_sap);

        }
    }
}
