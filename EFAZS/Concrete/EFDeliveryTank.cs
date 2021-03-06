﻿using EFAZS.Abstract;
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
    public class EFDeliveryTanks : IRepository<DeliveryTanks>
    {

        private EFDbContext db;

        public EFDeliveryTanks(EFDbContext db)
        {

            this.db = db;
        }

        public EFDeliveryTanks()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<DeliveryTanks> Get()
        {
            try
            {
                return db.Select<DeliveryTanks>();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Get()").SaveError(e);
                return null;
            }
        }

        public DeliveryTanks Get(int id)
        {
            try
            {
                return db.Select<DeliveryTanks>(id);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Get(id={0})",id).SaveError(e);
                return null;
            }
        }

        public void Add(DeliveryTanks item)
        {
            try
            {
                db.Insert<DeliveryTanks>(item);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Add(item={0})", item).SaveError(e);
            }
        }

        public void Update(DeliveryTanks item)
        {
            try
            {
                db.Update<DeliveryTanks>(item);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Update(item={0})", item).SaveError(e);
            }
        }

        public void AddOrUpdate(DeliveryTanks item)
        {
            try
            {
                DeliveryTanks dbEntry = db.DeliveryTanks.Find(item.id);
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
                DeliveryTanks item = db.Delete<DeliveryTanks>(id);
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

        public DeliveryTanks Refresh(DeliveryTanks item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<DeliveryTanks>(item.id);
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

        public int ADD_DeliveryTanks_Report() {
            try
            {
                string sql = "EXEC [dbo].[ADD_DeliveryTanks]";
                int res = this.db.Database.ExecuteSqlCommand(sql);
                return res;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода ADD_DeliveryTanks_Report()").SaveError(e);
                return -2;
            }
        }

    }
}
