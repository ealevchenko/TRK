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
    public class EFOPC_RFID : IOPC_RFID
    {

        protected EFDbContext context = new EFDbContext();



        public IQueryable<OPC_RFID> OPC_RFID
        {
            get { return context.OPC_RFID; }
        }

        public Database Database
        {
            get { return context.Database; }
        }

        /// <summary>
        /// Добавить карту
        /// </summary>
        /// <param name="num_trk"></param>
        /// <param name="side"></param>
        /// <param name="id_card"></param>
        /// <param name="id_hi"></param>
        /// <param name="id_lo"></param>
        /// <returns></returns>
        public int AddOPC_RFID(int num_trk, bool side, int? id_card, int id_hi, int id_lo)
        {
            try
            {
                OPC_RFID new_opc_rfid = new OPC_RFID()
                {
                    id = 0,
                    datetime = DateTime.Now,
                    num_trk = num_trk,
                    side = side,
                    id_card = id_card,
                    id_hi = id_hi,
                    id_lo = id_lo
                };
                context.OPC_RFID.Add(new_opc_rfid);
                context.SaveChanges();
                return new_opc_rfid.id;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода AddOPC_RFID(num_trk={0}, side={1}, id_card={2}, id_hi={3}, id_lo={4})",num_trk,side,id_card,id_hi,id_lo).SaveError(e);
                return -1;
            }

        }

        public IQueryable<OPC_RFID> GetOPC_RFID()
        {
            try
            {
                return OPC_RFID;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetOPC_RFID()").SaveError(e);
                return null;
            }
        }

        public OPC_RFID GetOPC_RFID(int id)
        {
            try
            {
                return OPC_RFID.Where(c => c.id == id).FirstOrDefault();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetOPC_RFID(id={0})", id).SaveError(e);
                return null;
            }
        }
    }
}
