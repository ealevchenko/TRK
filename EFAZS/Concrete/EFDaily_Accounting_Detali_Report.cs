using EFAZS.Abstract;
using EFAZS.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MessageLog;

namespace EFAZS.Concrete
{
    public class EFDaily_Accounting_Detali_Report : IRepository<Daily_Accounting_Detali_Report>
    {

        private EFDbContext db;

        public EFDaily_Accounting_Detali_Report(EFDbContext db)
        {

            this.db = db;
        }

        public EFDaily_Accounting_Detali_Report()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<Daily_Accounting_Detali_Report> Get()
        {
            try
            {
                return db.Select<Daily_Accounting_Detali_Report>();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Get()").SaveError(e);
                return null;
            }
        }

        public Daily_Accounting_Detali_Report Get(int id)
        {
            try
            {
                return db.Select<Daily_Accounting_Detali_Report>(id);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Get(id={0})",id).SaveError(e);
                return null;
            }
        }

        public void Add(Daily_Accounting_Detali_Report item)
        {
            try
            {
                db.Insert<Daily_Accounting_Detali_Report>(item);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Add(item={0})", item).SaveError(e);
            }
        }

        public void Update(Daily_Accounting_Detali_Report item)
        {
            try
            {
                db.Update<Daily_Accounting_Detali_Report>(item);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Update(item={0})", item).SaveError(e);
            }
        }

        public void AddOrUpdate(Daily_Accounting_Detali_Report item)
        {
            try
            {
                Daily_Accounting_Detali_Report dbEntry = db.Daily_Accounting_Detali_Report.Find(item.id);
                if (dbEntry == null)
                {
                    Add(item);
                }
                else
                {
                    Update(item);
                }
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода AddOrUpdate(item={0})", item).SaveError(e);
            }

        }

        public void Delete(int id)
        {
            try
            {
                Daily_Accounting_Detali_Report item = db.Delete<Daily_Accounting_Detali_Report>(id);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Delete(id={0})", id).SaveError(e);
            }
        }

        public int Save()
        {
            try
            {
                return db.SaveChanges();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Save()").SaveError(e);
                return -1;
            }
        }

        public Daily_Accounting_Detali_Report Refresh(Daily_Accounting_Detali_Report item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<Daily_Accounting_Detali_Report>(item.id);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Refresh(item={0})", item).SaveError(e);
                return null;
            }
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    db.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public int AddDailyAccountingDetaliReport() {
            try
            {
                string sql = "EXEC [dbo].[ADD_DailyAccountingDetaliReport]";
                int res = this.db.Database.ExecuteSqlCommand(sql);
                return res;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода AddDaily_Accounting_Detali_Report()").SaveError(e);
                return -2;
            }
        }
    }
}
