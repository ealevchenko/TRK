using EFAZS.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAZS.Abstract
{
    public interface IOPC_RFID
    {
        Database Database { get; }
        IQueryable<OPC_RFID> OPC_RFID { get; }
        IQueryable<OPC_RFID> GetOPC_RFID();
        OPC_RFID GetOPC_RFID(int id);
        int AddOPC_RFID(int num_trk, bool side, int? id_card, int id_hi, int id_lo);
    }
}
