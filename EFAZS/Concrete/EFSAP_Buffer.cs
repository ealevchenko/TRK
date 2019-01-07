using EFAZS.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EFAZS.Entities;
using MessageLog;
using System.Data.Entity;

namespace EFAZS.Concrete
{
    public class EFSAP_Buffer : IRepository<SAP_Buffer>
    {

        private EFDbContext db;

        public EFSAP_Buffer(EFDbContext db)
        {

            this.db = db;
        }

        public EFSAP_Buffer()
        {

            this.db = new EFDbContext();
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IEnumerable<SAP_Buffer> Get()
        {
            try
            {
                return db.Select<SAP_Buffer>();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Get()").SaveError(e);
                return null;
            }
        }

        public SAP_Buffer Get(int id)
        {
            try
            {
                return db.Select<SAP_Buffer>(id);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Get(id={0})", id).SaveError(e);
                return null;
            }
        }

        public void Add(SAP_Buffer item)
        {
            try
            {
                db.Insert<SAP_Buffer>(item);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Add(item={0})", item).SaveError(e);
            }
        }

        public void Update(SAP_Buffer item)
        {
            try
            {
                db.Update<SAP_Buffer>(item);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода Update(item={0})", item).SaveError(e);
            }
        }

        public void AddOrUpdate(SAP_Buffer item)
        {
            try
            {
                SAP_Buffer dbEntry = db.SAP_Buffer.Find(item.id);
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
                SAP_Buffer item = db.Delete<SAP_Buffer>(id);
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

        public SAP_Buffer Refresh(SAP_Buffer item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<SAP_Buffer>(item.id);
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

    //public class EFSAP_Buffer : ISAP_Buffer
    //{

    //    protected EFDbContext context = new EFDbContext();

    //    public Database Database
    //    {
    //        get { return context.Database; }
    //    }

    //    public IQueryable<SAP_Buffer> SAP_Buffer
    //    {
    //        get { return context.SAP_Buffer; }
    //    }

    //    public IQueryable<SAP_Buffer> GetSAP_Buffer()
    //    {
    //        try
    //        {
    //            return SAP_Buffer;
    //        }
    //        catch (Exception e)
    //        {
    //            String.Format("Ошибка выполнения метода GetSAP_Buffer()").SaveError(e);
    //            return null;
    //        }
    //    }

    //    public SAP_Buffer GetSAP_Buffer(int id)
    //    {
    //        try
    //        {
    //            return SAP_Buffer.Where(c => c.id == id).FirstOrDefault();
    //        }
    //        catch (Exception e)
    //        {
    //            String.Format("Ошибка выполнения метода GetSAP_Buffer(id={0})", id).SaveError(e);
    //            return null;
    //        }
    //    }

    //    public int AddSAP_Buffer(DateTime start, string LOGIN_R, string N_BAK, string OZM_BAK, string OZM_TREB, string FLAG_R, string PLOTNOST, string LOGIN_EXP, string N_POST, string TRANSP_FAKT, string N_DEB, string N_TREB, string LGORT, string WERKS)
    //    {
    //        SAP_Buffer new_sap_buffer = new SAP_Buffer()
    //        {
    //            id = 0,
    //            DateTime = ,
    //            TimeSpan TIME = ,
    //            LOGIN_R = ,
    //            N_BAK = ,
    //            OZM_BAK = ,
    //            OZM_TREB = ,
    //            FLAG_R = ,
    //            PLOTNOST = ,
    //            VOLUME = ,
    //            MASS = ,
    //            LOGIN_EXP = ,
    //            N_POST = ,
    //            TRANSP_FAKT = ,
    //            N_DEB = ,
    //            N_TREB = ,
    //            LGORT = ,
    //            WERKS =
    //        };
    //    }

    //    public int CloseSAP_Buffer(DateTime close)
    //    {
    //        throw new NotImplementedException();
    //    }










    //    ///// <summary>
    //    ///// Добавить карту
    //    ///// </summary>
    //    ///// <param name="num_trk"></param>
    //    ///// <param name="side"></param>
    //    ///// <param name="id_card"></param>
    //    ///// <param name="id_hi"></param>
    //    ///// <param name="id_lo"></param>
    //    ///// <returns></returns>
    //    //public int AddOPC_RFID(int num_trk, bool side, int? id_card, int id_hi, int id_lo)
    //    //{
    //    //    try
    //    //    {
    //    //        OPC_RFID new_opc_rfid = new OPC_RFID()
    //    //        {
    //    //            id = 0,
    //    //            datetime = DateTime.Now,
    //    //            num_trk = num_trk,
    //    //            side = side,
    //    //            id_card = id_card,
    //    //            id_hi = id_hi,
    //    //            id_lo = id_lo
    //    //        };
    //    //        context.OPC_RFID.Add(new_opc_rfid);
    //    //        context.SaveChanges();
    //    //        return new_opc_rfid.id;
    //    //    }
    //    //    catch (Exception e)
    //    //    {
    //    //        String.Format("Ошибка выполнения метода AddOPC_RFID(num_trk={0}, side={1}, id_card={2}, id_hi={3}, id_lo={4})",num_trk,side,id_card,id_hi,id_lo).SaveError(e);
    //    //        return -1;
    //    //    }

    //    //}

    //}
}
