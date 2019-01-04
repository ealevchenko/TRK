using ClientOPCTRK;
using EFAZS.Abstract;
using EFAZS.Entities;
using EFFC.Concrete;
using EFFC.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebUI.Controllers.api
{
    [RoutePrefix("api/rfid")]
    public class RFIDController : ApiController
    {
        protected IOPC_RFID ef_rfid;

        public RFIDController(IOPC_RFID rfid)
        {
            this.ef_rfid = rfid;
        }

        private ClientOPCTRK.Cards GetCardsOfNum(int hi, int lo)
        {
            try
            {
                EFazsCards ef_card = new EFazsCards();
                EFazsDeparts ef_departs = new EFazsDeparts();
                if (hi > 0 && lo > 0)
                {
                    string num = hi.ToString("000") + "," + lo.ToString("00000");
                    azsCards card = ef_card.Database.SqlQuery<azsCards>("SELECT * FROM [KRR-PA-CNT-Oil].[dbo].[azsCards] where [Number]=N'"+num+"'").ToList().FirstOrDefault();
                    azsDeparts departs = null;
                    if (card != null)
                    {
                        departs = ef_departs.Get().Where(d => d.id == ((int)card.House).ToString("000")).FirstOrDefault();
                    }
                    ClientOPCTRK.Cards cards = new ClientOPCTRK.Cards()
                    {
                        Id = card.Id,
                        Number = card.Number,
                        DriverName = card.DriverName,
                        AutoNumber = card.AutoNumber,
                        Debitor = card.Debitor,
                        Sn1 = card.Sn1,
                        Sn2 = card.Sn2,
                        AutoModel = card.AutoModel,
                        Street = card.Street,
                        House = card.House,
                        CreateDate = card.CreateDate,
                        CreateTime = card.CreateTime,
                        UpdateDate = card.UpdateDate,
                        UpdateTime = card.UpdateTime,
                        Owner = card.Owner,
                        Active = card.Active,
                        Name = departs != null && departs.name != null ? departs.name : "?",
                    };
                    return cards;
                }
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        // GET: api/rfid/db
        [Route("db")]
        [ResponseType(typeof(RFID))]
        public IHttpActionResult GetRFIDOfDB()
        {
            try
            {
                List<int> list = this.ef_rfid.Database.SqlQuery<int>("SELECT max([id]) as id FROM [ASU_AZSoperations].[dbo].[OPC_RFID] group by [num_trk],[side]").ToList();
                if (list==null) return NotFound();
                List<RFID> result_list = new List<RFID>();
                foreach (int id in list) {
                    OPC_RFID rfid = this.ef_rfid.GetOPC_RFID(id);
                    if (rfid != null)
                    {
                        result_list.Add(new RFID { num_trk = rfid.num_trk, side = rfid.side ? 1 : 0, card = GetCardsOfNum(rfid.id_hi, rfid.id_lo), hi = (uint?)rfid.id_hi, lo = (uint?)rfid.id_lo });
                    }
                }
                if (result_list == null)
                {
                    return NotFound();
                }
                return Ok(result_list);
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }

    }
}
