using EFAZS.Abstract;
using EFAZS.Entities;
using MessageLog;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAZS.Concrete
{
    public class EFTRKLogs: ITRKLogs
    {
        protected EFDbContext context = new EFDbContext();

        public Database Database
        {
            get { return context.Database; }
        }

        public IQueryable<TRKLogs> TRKLogs
        {
            get { return context.TRKLogs; }
        }


        public long AddTRKLogs(TRKLogs TRKLogs)
        {
            try
            {
                TRKLogs new_TRKLogs = new TRKLogs()
                {
                    ID = 0,
                    DateTime = TRKLogs.DateTime,
                    UserName = TRKLogs.UserName,
                    Level =TRKLogs.Level,
                    Log = TRKLogs.Log
                };
                context.TRKLogs.Add(new_TRKLogs);
                context.SaveChanges();
                return new_TRKLogs.ID;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода AddTRKLogs(TRKLogs={0})", TRKLogs).SaveError(e);
                return -1;
            }
        }

        public IQueryable<TRKLogs> GetTRKLogs()
        {
            try
            {
                return TRKLogs;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetTRKLogs()").SaveError(e);
                return null;
            }
        }

        public IQueryable<TRKLogs> GetTRKLogsLastLines(int lines)
        {
            try
            {
                return TRKLogs.OrderByDescending(l=>l.ID).Take(lines);
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetTRKLogs(lines={0})", lines).SaveError(e);
                return null;
            }
        }

        public TRKLogs GetTRKLogs(long ID)
        {
            try
            {
                return TRKLogs.Where(c => c.ID == ID).FirstOrDefault();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetTRKLogs(ID={0})", ID).SaveError(e);
                return null;
            }
        }
    }
}
