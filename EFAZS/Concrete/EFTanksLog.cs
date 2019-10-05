using EFAZS.Abstract;
using MessageLog;
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

        public int Delete_Tanks()
        {
            try
            {
                string sql = "EXEC [dbo].[Delete_Tanks]";
                int res = this.db.Database.ExecuteSqlCommand(sql);
                return res;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Delete_Tanks()").SaveError(e);
                return -2;
            }
        }
    }
}
