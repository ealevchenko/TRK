using EFAZS.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAZS.Abstract
{
    public interface ITRKLogs
    {
        Database Database { get; }
        IQueryable<TRKLogs> TRKLogs { get; }
        IQueryable<TRKLogs> GetTRKLogs();
        TRKLogs GetTRKLogs(long ID);
        IQueryable<TRKLogs> GetTRKLogsLastLines(int lines);
        long AddTRKLogs(TRKLogs TRKLogs);
    }
}
