namespace EFAZS.Model
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=Model1")
        {
        }

        public virtual DbSet<FuelSale> FuelSale { get; set; }
        public virtual DbSet<SAP_Buffer> SAP_Buffer { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
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
