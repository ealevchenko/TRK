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
    public class EFReceivingFuel : IRepository<ReceivingFuel>
    {

        private EFDbContext db;

        public EFReceivingFuel(EFDbContext db)
        {

            this.db = db;
        }

        public EFReceivingFuel()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<ReceivingFuel> Get()
        {
            try
            {
                return db.Select<ReceivingFuel>();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Get()").SaveError(e);
                return null;
            }
        }

        public ReceivingFuel Get(int id)
        {
            try
            {
                return db.Select<ReceivingFuel>(id);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Get(id={0})",id).SaveError(e);
                return null;
            }
        }

        public void Add(ReceivingFuel item)
        {
            try
            {
                db.Insert<ReceivingFuel>(item);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Add(item={0})", item).SaveError(e);
            }
        }

        public void Update(ReceivingFuel item)
        {
            try
            {
                db.Update<ReceivingFuel>(item);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Update(item={0})", item).SaveError(e);
            }
        }

        public void AddOrUpdate(ReceivingFuel item)
        {
            try
            {
                ReceivingFuel dbEntry = db.ReceivingFuel.Find(item.id);
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
                ReceivingFuel item = db.Delete<ReceivingFuel>(id);
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

        public ReceivingFuel Refresh(ReceivingFuel item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<ReceivingFuel>(item.id);
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
