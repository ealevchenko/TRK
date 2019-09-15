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
    public class EFReceivingTank : IRepository<ReceivingTank>
    {

        private EFDbContext db;

        public EFReceivingTank(EFDbContext db)
        {

            this.db = db;
        }

        public EFReceivingTank()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<ReceivingTank> Get()
        {
            try
            {
                return db.Select<ReceivingTank>();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Get()").SaveError(e);
                return null;
            }
        }

        public ReceivingTank Get(int id)
        {
            try
            {
                return db.Select<ReceivingTank>(id);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Get(id={0})",id).SaveError(e);
                return null;
            }
        }

        public void Add(ReceivingTank item)
        {
            try
            {
                db.Insert<ReceivingTank>(item);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Add(item={0})", item).SaveError(e);
            }
        }

        public void Update(ReceivingTank item)
        {
            try
            {
                db.Update<ReceivingTank>(item);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Update(item={0})", item).SaveError(e);
            }
        }

        public void AddOrUpdate(ReceivingTank item)
        {
            try
            {
                ReceivingTank dbEntry = db.ReceivingTanks.Find(item.id);
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
                ReceivingTank item = db.Delete<ReceivingTank>(id);
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

        public ReceivingTank Refresh(ReceivingTank item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<ReceivingTank>(item.id);
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

        public int ADD_ReceivingTanks() {
            try
            {
                string sql = "EXEC [dbo].[ADD_ReceivingTanks]";
                int res = this.db.Database.ExecuteSqlCommand(sql);
                return res;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода ADD_ReceivingTanks()").SaveError(e);
                return -2;
            }
        }

    }
}
