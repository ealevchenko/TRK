namespace EFAZS.Concrete
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using EFAZS.Entities;

    public partial class EFTDbContext : DbContext
    {
        public EFTDbContext()
            : base("name=AZS_Tank")
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {


        }
    }
}
