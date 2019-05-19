using EFAZS.Abstract;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAZS.Concrete
{
    public class EFTanksLog : ITanksLog
    {
        private EFTDbContext db;

        public EFTanksLog(EFTDbContext db)
        {

            this.db = db;
        }

        public EFTanksLog()
        {

            this.db = new EFTDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }
    }
}
