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
    public class EFTRK_Counters : IRepository<TRK_Counters>
    {

        private EFDbContext db;

        public EFTRK_Counters(EFDbContext db)
        {

            this.db = db;
        }

        public EFTRK_Counters()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<TRK_Counters> Get()
        {
            try
            {
                return db.Select<TRK_Counters>();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Get()").SaveError(e);
                return null;
            }
        }

        public TRK_Counters Get(int id)
        {
            try
            {
                return db.Select<TRK_Counters>(id);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Get(id={0})",id).SaveError(e);
                return null;
            }
        }

        public void Add(TRK_Counters item)
        {
            try
            {
                db.Insert<TRK_Counters>(item);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Add(item={0})", item).SaveError(e);
            }
        }

        public void Update(TRK_Counters item)
        {
            try
            {
                db.Update<TRK_Counters>(item);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Update(item={0})", item).SaveError(e);
            }
        }

        public void AddOrUpdate(TRK_Counters item)
        {
            try
            {
                TRK_Counters dbEntry = db.TRK_Counters.Find(item.ID);
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
                TRK_Counters item = db.Delete<TRK_Counters>(id);
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
                //String.Format("Ошибка InnerException выполнения метода Save()").SaveError(e.InnerException);
                //String.Format("Ошибка InnerException1 выполнения метода Save()").SaveError(e.InnerException.InnerException);
                return -1;
            }
        }

        public TRK_Counters Refresh(TRK_Counters item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<TRK_Counters>(item.ID);
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

    }
}
