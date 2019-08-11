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
            //Database.CommandTimeout = 300;
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

        public virtual DbSet<Tanks_A92> Tanks_A92 { get; set; }
        public virtual DbSet<Tanks_A95> Tanks_A95 { get; set; }
        public virtual DbSet<Tanks_dt> Tanks_dt { get; set; }
        public virtual DbSet<Tanks_kerosene> Tanks_kerosene { get; set; }

        public virtual DbSet<ReceivingFuel> ReceivingFuel { get; set; }
        public virtual DbSet<ReceivingFuelTanks> ReceivingFuelTanks { get; set; }

        public virtual DbSet<TRKLogs> TRKLogs { get; set; }

        public virtual DbSet<Daily_Report> Daily_Report { get; set; }

        public virtual DbSet<Daily_Report_15> Daily_Report_15 { get; set; }

        public virtual DbSet<GunsCnts> GunsCnts { get; set; }

        public virtual DbSet<TRK_Counters> TRK_Counters { get; set; }

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
                .HasPrecision(9, 5);

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
                .HasPrecision(9, 5);

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

            modelBuilder.Entity<ReceivingFuel>()
                .Property(e => e.railway_nak_volume)
                .HasPrecision(10, 2);

            modelBuilder.Entity<ReceivingFuel>()
                .Property(e => e.railway_nak_dens)
                .HasPrecision(9, 5);

            modelBuilder.Entity<ReceivingFuel>()
                .Property(e => e.railway_nak_mass)
                .HasPrecision(10, 2);

            modelBuilder.Entity<ReceivingFuel>()
                .Property(e => e.railway_manual_level)
                .HasPrecision(10, 2);

            modelBuilder.Entity<ReceivingFuel>()
                .Property(e => e.railway_manual_volume)
                .HasPrecision(10, 2);

            modelBuilder.Entity<ReceivingFuel>()
                .Property(e => e.railway_manual_dens)
                .HasPrecision(9, 5);

            modelBuilder.Entity<ReceivingFuel>()
                .Property(e => e.railway_manual_mass)
                .HasPrecision(10, 2);

            modelBuilder.Entity<ReceivingFuel>()
                .HasMany(e => e.ReceivingFuelTanks)
                .WithRequired(e => e.ReceivingFuel)
                .HasForeignKey(e => e.id_receiving_fuel)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ReceivingFuelTanks>()
                .Property(e => e.start_level)
                .HasPrecision(8, 2);

            modelBuilder.Entity<ReceivingFuelTanks>()
                .Property(e => e.start_volume)
                .HasPrecision(10, 2);

            modelBuilder.Entity<ReceivingFuelTanks>()
                .Property(e => e.start_density)
                .HasPrecision(9, 5);

            modelBuilder.Entity<ReceivingFuelTanks>()
                .Property(e => e.start_mass)
                .HasPrecision(10, 2);

            modelBuilder.Entity<ReceivingFuelTanks>()
                .Property(e => e.start_temp)
                .HasPrecision(4, 2);

            modelBuilder.Entity<ReceivingFuelTanks>()
                .Property(e => e.start_water_level)
                .HasPrecision(7, 2);

            modelBuilder.Entity<ReceivingFuelTanks>()
                .Property(e => e.stop_level)
                .HasPrecision(8, 2);

            modelBuilder.Entity<ReceivingFuelTanks>()
                .Property(e => e.stop_volume)
                .HasPrecision(10, 2);

            modelBuilder.Entity<ReceivingFuelTanks>()
                .Property(e => e.stop_density)
                .HasPrecision(9, 5);

            modelBuilder.Entity<ReceivingFuelTanks>()
                .Property(e => e.stop_mass)
                .HasPrecision(10, 2);

            modelBuilder.Entity<ReceivingFuelTanks>()
                .Property(e => e.stop_temp)
                .HasPrecision(4, 2);

            modelBuilder.Entity<ReceivingFuelTanks>()
                .Property(e => e.stop_water_level)
                .HasPrecision(7, 2);

        }
    }
}
