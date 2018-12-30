using EFFC.Concrete;
using EFFC.Entities;
using Opc.Da;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClientOPCTRK
{
    public class Guns
    {
        public int gun_num { get; set; }
        public ItemValueResult[] item_gun { get; set; }
    }

    public class TRK_
    {
        public int trk_num { get; set; }
        public ItemValueResult[] leftRFID { get; set; }
        public ItemValueResult[] reghtRFID { get; set; }
        public Guns[] trk_guns { get; set; }
    }

    public class RFID
    {
        public int num_trk { get; set; }
        public int side { get; set; }
        public Cards card { get; set; }
    }

    public class Gun
    {
        public int num_trk { get; set; }
        public int num_gun { get; set; }
        public int side { get; set; }
        public uint? current_volume { get; set; }
        public uint? density { get; set; }
        public uint? last_out_volume { get; set; }
        public bool? online { get; set; }
        public bool? passage { get; set; }
        public UInt16? price_to_write { get; set; }
        public bool? start { get; set; }
        public int? state { get; set; }
        public bool? stop { get; set; }
        public bool? taken { get; set; }
        public uint? total_volume { get; set; }
        public int? status { get; set; }
        public uint? volume_to_write { get; set; }
        public bool? write_price { get; set; }
    }

    public class TRK
    {
        public RFID[] cards { get; set; }
        public Gun[] guns { get; set; }
    }

    public class Cards : azsCards
    {
        public Cards() : base() { }
        public string Name  { get; set; }
    }

    public class ClientTRK
    {
        private OpcCom.Factory fact = new OpcCom.Factory();
        private Opc.URL url;

        public ClientTRK()
        {
            url = new Opc.URL("opcda://localhost/Kepware.KEPServerEX.V6");
        }

        public ItemValueResult[] ReadOPC(int num)
        {
            try
            {
                Opc.Da.Server server = null;
                OpcCom.Factory fact = new OpcCom.Factory();
                server = new Opc.Da.Server(fact, null);

                server.Connect(url, new Opc.ConnectData(new System.Net.NetworkCredential()));

                //
                Opc.Da.Subscription group;
                Opc.Da.SubscriptionState groupState = new Opc.Da.SubscriptionState();
                groupState.Name = "group";
                groupState.Active = true;
                group = (Opc.Da.Subscription)server.CreateSubscription(groupState);

                //добавление айтемов в группу
                Opc.Da.Item[] items = new Opc.Da.Item[16];
                items[0] = new Opc.Da.Item();
                items[0].ItemName = "RFID.Rfid0" + num + "_1.IdHi";
                items[1] = new Opc.Da.Item();
                items[1].ItemName = "RFID.Rfid0" + num + "_1.IdLo";
                items[2] = new Opc.Da.Item();
                items[2].ItemName = "TRK.Trk0" + num + "_0.current_volume";
                items[3] = new Opc.Da.Item();
                items[3].ItemName = "TRK.Trk0" + num + "_0.density";
                items[4] = new Opc.Da.Item();
                items[4].ItemName = "TRK.Trk0" + num + "_0.last_out_volume";
                items[5] = new Opc.Da.Item();
                items[5].ItemName = "TRK.Trk0" + num + "_0.online";
                items[6] = new Opc.Da.Item();
                items[6].ItemName = "TRK.Trk0" + num + "_0.passage";
                items[7] = new Opc.Da.Item();
                items[7].ItemName = "TRK.Trk0" + num + "_0.price_to_write";
                items[8] = new Opc.Da.Item();
                items[8].ItemName = "TRK.Trk0" + num + "_0.start";
                items[9] = new Opc.Da.Item();
                items[9].ItemName = "TRK.Trk0" + num + "_0.state";
                items[10] = new Opc.Da.Item();
                items[10].ItemName = "TRK.Trk0" + num + "_0.stop";
                items[11] = new Opc.Da.Item();
                items[11].ItemName = "TRK.Trk0" + num + "_0.taken";
                items[12] = new Opc.Da.Item();
                items[12].ItemName = "TRK.Trk0" + num + "_0.total_volume";
                items[13] = new Opc.Da.Item();
                items[13].ItemName = "TRK.Trk0" + num + "_0.Trk06_0_status";
                items[14] = new Opc.Da.Item();
                items[14].ItemName = "TRK.Trk0" + num + "_0.volume_to_write";
                items[15] = new Opc.Da.Item();
                items[15].ItemName = "TRK.Trk0" + num + "_0.write_price";


                items = group.AddItems(items);

                //Opc.IRequest req;

                //IdentifiedResult[] res = group.Read(group.Items, 123, new Opc.Da.ReadCompleteEventHandler(ReadCompleteCallback), out req);

                ItemValueResult[] res = group.Read(items);
                return res;
                //List<object> list = new List<object>();
                //if (res != null) {
                //    foreach (ItemValueResult it in res) {
                //        list.Add(it.Value);
                //    }
                //}

                //return list;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public void AddGun(ref Opc.Da.Item[] items, ref int i, int num_trk, int num_gun)
        {

            i++;
            items[i] = new Opc.Da.Item();
            items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".current_volume";
            i++;
            items[i] = new Opc.Da.Item();
            items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".density";
            i++;
            items[i] = new Opc.Da.Item();
            items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".last_out_volume";
            i++;
            items[i] = new Opc.Da.Item();
            items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".online";
            i++;
            items[i] = new Opc.Da.Item();
            items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".passage";
            i++;
            items[i] = new Opc.Da.Item();
            items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".price_to_write";
            i++;
            items[i] = new Opc.Da.Item();
            items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".start";
            i++;
            items[i] = new Opc.Da.Item();
            items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".state";
            i++;
            items[i] = new Opc.Da.Item();
            items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".stop";
            i++;
            items[i] = new Opc.Da.Item();
            items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".taken";
            i++;
            items[i] = new Opc.Da.Item();
            items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".total_volume";
            i++;
            items[i] = new Opc.Da.Item();
            items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".Trk06_0_status";
            i++;
            items[i] = new Opc.Da.Item();
            items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".volume_to_write";
            i++;
            items[i] = new Opc.Da.Item();
            items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".write_price";
        }

        public List<TRK_> ReadOPC()
        {
            try
            {
                Opc.Da.Server server = null;
                OpcCom.Factory fact = new OpcCom.Factory();
                server = new Opc.Da.Server(fact, null);

                server.Connect(url, new Opc.ConnectData(new System.Net.NetworkCredential()));

                //
                Opc.Da.Subscription group;
                Opc.Da.SubscriptionState groupState = new Opc.Da.SubscriptionState();
                groupState.Name = "group";
                groupState.Active = true;
                group = (Opc.Da.Subscription)server.CreateSubscription(groupState);

                //добавление айтемов в группу
                Opc.Da.Item[] items = new Opc.Da.Item[48];
                items[0] = new Opc.Da.Item();
                items[0].ItemName = "RFID.Rfid01_1.IdHi";
                items[1] = new Opc.Da.Item();
                items[1].ItemName = "RFID.Rfid01_1.IdLo";

                items[2] = new Opc.Da.Item();
                items[2].ItemName = "RFID.Rfid01_2.IdHi";
                items[3] = new Opc.Da.Item();
                items[3].ItemName = "RFID.Rfid01_2.IdLo";

                items[4] = new Opc.Da.Item();
                items[4].ItemName = "RFID.Rfid02_1.IdHi";
                items[5] = new Opc.Da.Item();
                items[5].ItemName = "RFID.Rfid02_1.IdLo";

                items[6] = new Opc.Da.Item();
                items[6].ItemName = "RFID.Rfid02_2.IdHi";
                items[7] = new Opc.Da.Item();
                items[7].ItemName = "RFID.Rfid02_2.IdLo";

                items[8] = new Opc.Da.Item();
                items[8].ItemName = "RFID.Rfid03_1.IdHi";
                items[9] = new Opc.Da.Item();
                items[9].ItemName = "RFID.Rfid03_1.IdLo";

                items[10] = new Opc.Da.Item();
                items[10].ItemName = "RFID.Rfid03_2.IdHi";
                items[11] = new Opc.Da.Item();
                items[11].ItemName = "RFID.Rfid03_2.IdLo";

                items[12] = new Opc.Da.Item();
                items[12].ItemName = "RFID.Rfid04_1.IdHi";
                items[13] = new Opc.Da.Item();
                items[13].ItemName = "RFID.Rfid04_1.IdLo";

                items[14] = new Opc.Da.Item();
                items[14].ItemName = "RFID.Rfid04_2.IdHi";
                items[15] = new Opc.Da.Item();
                items[15].ItemName = "RFID.Rfid04_2.IdLo";

                items[16] = new Opc.Da.Item();
                items[16].ItemName = "RFID.Rfid05_1.IdHi";
                items[17] = new Opc.Da.Item();
                items[17].ItemName = "RFID.Rfid05_1.IdLo";

                items[18] = new Opc.Da.Item();
                items[18].ItemName = "RFID.Rfid05_2.IdHi";
                items[19] = new Opc.Da.Item();
                items[19].ItemName = "RFID.Rfid05_2.IdLo";

                items[20] = new Opc.Da.Item();
                items[20].ItemName = "RFID.Rfid06_1.IdHi";
                items[21] = new Opc.Da.Item();
                items[21].ItemName = "RFID.Rfid06_1.IdLo";

                items[22] = new Opc.Da.Item();
                items[22].ItemName = "RFID.Rfid06_2.IdHi";
                items[23] = new Opc.Da.Item();
                items[23].ItemName = "RFID.Rfid06_2.IdLo";

                items[24] = new Opc.Da.Item();
                items[24].ItemName = "RFID.Rfid07_1.IdHi";
                items[25] = new Opc.Da.Item();
                items[25].ItemName = "RFID.Rfid07_1.IdLo";

                items[26] = new Opc.Da.Item();
                items[26].ItemName = "RFID.Rfid07_2.IdHi";
                items[27] = new Opc.Da.Item();
                items[27].ItemName = "RFID.Rfid07_2.IdLo";

                items[28] = new Opc.Da.Item();
                items[28].ItemName = "RFID.Rfid08_1.IdHi";
                items[29] = new Opc.Da.Item();
                items[29].ItemName = "RFID.Rfid08_1.IdLo";

                items[30] = new Opc.Da.Item();
                items[30].ItemName = "RFID.Rfid08_2.IdHi";
                items[31] = new Opc.Da.Item();
                items[31].ItemName = "RFID.Rfid08_2.IdLo";

                items[32] = new Opc.Da.Item();
                items[32].ItemName = "RFID.Rfid09_1.IdHi";
                items[33] = new Opc.Da.Item();
                items[33].ItemName = "RFID.Rfid09_1.IdLo";
                int i = 33;
                AddGun(ref items, ref i, 6, 0);
                ////----------------
                //items[2] = new Opc.Da.Item();
                //items[2].ItemName = "TRK.Trk0" + num + "_0.current_volume";
                //items[3] = new Opc.Da.Item();
                //items[3].ItemName = "TRK.Trk0" + num + "_0.density";
                //items[4] = new Opc.Da.Item();
                //items[4].ItemName = "TRK.Trk0" + num + "_0.last_out_volume";
                //items[5] = new Opc.Da.Item();
                //items[5].ItemName = "TRK.Trk0" + num + "_0.online";
                //items[6] = new Opc.Da.Item();
                //items[6].ItemName = "TRK.Trk0" + num + "_0.passage";
                //items[7] = new Opc.Da.Item();
                //items[7].ItemName = "TRK.Trk0" + num + "_0.price_to_write";
                //items[8] = new Opc.Da.Item();
                //items[8].ItemName = "TRK.Trk0" + num + "_0.start";
                //items[9] = new Opc.Da.Item();
                //items[9].ItemName = "TRK.Trk0" + num + "_0.state";
                //items[10] = new Opc.Da.Item();
                //items[10].ItemName = "TRK.Trk0" + num + "_0.stop";
                //items[11] = new Opc.Da.Item();
                //items[11].ItemName = "TRK.Trk0" + num + "_0.taken";
                //items[12] = new Opc.Da.Item();
                //items[12].ItemName = "TRK.Trk0" + num + "_0.total_volume";
                //items[13] = new Opc.Da.Item();
                //items[13].ItemName = "TRK.Trk0" + num + "_0.Trk06_0_status";
                //items[14] = new Opc.Da.Item();
                //items[14].ItemName = "TRK.Trk0" + num + "_0.volume_to_write";
                //items[15] = new Opc.Da.Item();
                //items[15].ItemName = "TRK.Trk0" + num + "_0.write_price";


                items = group.AddItems(items);

                //Opc.IRequest req;

                //IdentifiedResult[] res = group.Read(group.Items, 123, new Opc.Da.ReadCompleteEventHandler(ReadCompleteCallback), out req);

                List<TRK_> result_list = new List<TRK_>();

                ItemValueResult[] res = group.Read(items);
                if (res != null && res.Count() > 0)
                {
                    result_list.Add(new TRK_() { trk_num = 1, leftRFID = new ItemValueResult[] { res[0], res[1] }, reghtRFID = new ItemValueResult[] { res[2], res[3] }, trk_guns = null });
                    result_list.Add(new TRK_() { trk_num = 2, leftRFID = new ItemValueResult[] { res[4], res[5] }, reghtRFID = new ItemValueResult[] { res[6], res[7] }, trk_guns = null });
                    result_list.Add(new TRK_() { trk_num = 3, leftRFID = new ItemValueResult[] { res[8], res[9] }, reghtRFID = new ItemValueResult[] { res[10], res[11] }, trk_guns = null });
                    result_list.Add(new TRK_() { trk_num = 4, leftRFID = new ItemValueResult[] { res[12], res[13] }, reghtRFID = new ItemValueResult[] { res[14], res[15] }, trk_guns = null });
                    result_list.Add(new TRK_() { trk_num = 5, leftRFID = new ItemValueResult[] { res[16], res[17] }, reghtRFID = new ItemValueResult[] { res[18], res[19] }, trk_guns = null });
                    result_list.Add(new TRK_()
                    {
                        trk_num = 6,
                        leftRFID = new ItemValueResult[] { res[20], res[21] },
                        reghtRFID = new ItemValueResult[] { res[22], res[23] },
                        trk_guns = new Guns[] {
                            new Guns() { gun_num = 11, item_gun = new ItemValueResult[] { res[34], res[35], res[36], res[37], res[38], res[39], res[40], res[41], res[41], res[43], res[44], res[45], res[46], res[47] } }
                        }

                    });
                    result_list.Add(new TRK_() { trk_num = 7, leftRFID = new ItemValueResult[] { res[24], res[25] }, reghtRFID = new ItemValueResult[] { res[26], res[27] }, trk_guns = null });
                    result_list.Add(new TRK_() { trk_num = 8, leftRFID = new ItemValueResult[] { res[28], res[29] }, reghtRFID = new ItemValueResult[] { res[30], res[31] }, trk_guns = null });
                    result_list.Add(new TRK_() { trk_num = 9, leftRFID = new ItemValueResult[] { res[32], res[33] }, reghtRFID = null, trk_guns = null });

                    //Guns g = new Guns() { gun_num = 11, item_gun = new ItemValueResult[] { res[34], res[35], res[36], res[37], res[38], res[39], res[40], res[41], res[41], res[43], res[44], res[45], res[46], res[47] } }
                }
                return result_list;

                //return res;
                ////List<object> list = new List<object>();
                ////if (res != null) {
                ////    foreach (ItemValueResult it in res) {
                ////        list.Add(it.Value);
                ////    }
                ////}

                ////return list;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        /// <summary>
        /// Вернуть карту
        /// </summary>
        /// <param name="hi"></param>
        /// <param name="lo"></param>
        /// <returns></returns>
        private Cards GetCardsOfNum(object hi, object lo)
        {
            try
            {
                EFazsCards ef_card = new EFazsCards();
                EFazsDeparts ef_departs = new EFazsDeparts();
                if (hi!=null && lo!=null)
                {
                    
                    azsCards card = ef_card.Get().Where(c => c.Number == hi.ToString() + "," + lo.ToString()).FirstOrDefault();
                    azsDeparts departs = null;
                    if (card != null) {
                        
                        departs = ef_departs.Get().Where(d=>d.id == ((int)card.House).ToString("000")).FirstOrDefault();
                    }
                    Cards cards = new Cards()
                    {
                        Id = card.Id,
                        Number =  card.Number,
                        DriverName =  card.DriverName,
                        AutoNumber =  card.AutoNumber,
                        Debitor =  card.Debitor,
                        Sn1 = card.Sn1, 
                        Sn2 =  card.Sn2,
                        AutoModel = card.AutoModel,
                        Street = card.Street,
                        House = card.House,
                        CreateDate = card.CreateDate,
                        CreateTime = card.CreateTime,
                        UpdateDate = card.UpdateDate,
                        UpdateTime = card.UpdateTime,
                        Owner = card.Owner,
                        Active = card.Active,
                        Name = departs.name!=null ? departs.name : "?",
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

        private Gun GetGun(int num_trk, int num_gun, int site, ItemValueResult[] list, int start)
        {
            try
            {
                //Console.WriteLine("current_volume = {0}:{1}", list[start].Value, list[start].Value.GetType());
                //Console.WriteLine("current_volume = {0}:{1}", list[start+4].Value, list[start+4].Value.GetType());
                //Console.WriteLine("current_volume = {0}:{1}", list[start+7].Value, list[start+7].Value.GetType());
                //Console.WriteLine("price_to_write = {0}:{1}", list[start+5].Value, list[start+5].Value.GetType());
                //Console.WriteLine("status = {0}:{1}", list[start+11].Value, list[start+11].Value.GetType());
                Gun gun = new Gun()
                {
                    num_trk = num_trk,
                    num_gun = num_gun,
                    side = site,
                    current_volume = list[start].Value != null ? list[start].Value as uint? : null,
                    density = list[start + 1].Value != null ? list[start + 1].Value as uint? : null,
                    last_out_volume = list[start + 2].Value != null ? list[start + 2].Value as uint? : null,
                    online = list[start + 3].Value != null ? list[start + 3].Value as bool? : null,
                    passage = list[start + 4].Value != null ? list[start + 4].Value as bool? : null,
                    price_to_write = list[start + 5].Value != null ? list[start + 5].Value as UInt16? : null,
                    start = list[start + 6].Value != null ? list[start + 6].Value as bool? : null,
                    state = list[start + 7].Value != null ? list[start + 7].Value as int? : null,
                    stop = list[start + 8].Value != null ? list[start + 8].Value as bool? : null,
                    taken = list[start + 9].Value != null ? list[start + 9].Value as bool? : null,
                    total_volume = list[start + 10].Value != null ? list[start + 10].Value as uint? : null,
                    status = list[start + 11].Value != null ? list[start + 11].Value as int? : null,
                    volume_to_write = list[start + 12].Value != null ? list[start + 12].Value as uint? : null,
                    write_price = list[start + 13].Value != null ? list[start + 13].Value as bool? : null,
                };
                //if (gun != null) {
                //    Console.WriteLine("online = {0}:{1}", gun.online, gun.online);
                //}
                return gun;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }

        }

        public TRK ReadTagOPC()
        {
            try
            {
                Opc.Da.Server server = null;
                OpcCom.Factory fact = new OpcCom.Factory();
                server = new Opc.Da.Server(fact, null);

                server.Connect(url, new Opc.ConnectData(new System.Net.NetworkCredential()));

                //
                Opc.Da.Subscription group;
                Opc.Da.SubscriptionState groupState = new Opc.Da.SubscriptionState();
                groupState.Name = "group";
                groupState.Active = true;
                group = (Opc.Da.Subscription)server.CreateSubscription(groupState);

                //добавление айтемов в группу
                Opc.Da.Item[] items = new Opc.Da.Item[48];
                items[0] = new Opc.Da.Item();
                items[0].ItemName = "RFID.Rfid01_1.IdHi";
                items[1] = new Opc.Da.Item();
                items[1].ItemName = "RFID.Rfid01_1.IdLo";

                items[2] = new Opc.Da.Item();
                items[2].ItemName = "RFID.Rfid01_2.IdHi";
                items[3] = new Opc.Da.Item();
                items[3].ItemName = "RFID.Rfid01_2.IdLo";

                items[4] = new Opc.Da.Item();
                items[4].ItemName = "RFID.Rfid02_1.IdHi";
                items[5] = new Opc.Da.Item();
                items[5].ItemName = "RFID.Rfid02_1.IdLo";

                items[6] = new Opc.Da.Item();
                items[6].ItemName = "RFID.Rfid02_2.IdHi";
                items[7] = new Opc.Da.Item();
                items[7].ItemName = "RFID.Rfid02_2.IdLo";

                items[8] = new Opc.Da.Item();
                items[8].ItemName = "RFID.Rfid03_1.IdHi";
                items[9] = new Opc.Da.Item();
                items[9].ItemName = "RFID.Rfid03_1.IdLo";

                items[10] = new Opc.Da.Item();
                items[10].ItemName = "RFID.Rfid03_2.IdHi";
                items[11] = new Opc.Da.Item();
                items[11].ItemName = "RFID.Rfid03_2.IdLo";

                items[12] = new Opc.Da.Item();
                items[12].ItemName = "RFID.Rfid04_1.IdHi";
                items[13] = new Opc.Da.Item();
                items[13].ItemName = "RFID.Rfid04_1.IdLo";

                items[14] = new Opc.Da.Item();
                items[14].ItemName = "RFID.Rfid04_2.IdHi";
                items[15] = new Opc.Da.Item();
                items[15].ItemName = "RFID.Rfid04_2.IdLo";

                items[16] = new Opc.Da.Item();
                items[16].ItemName = "RFID.Rfid05_1.IdHi";
                items[17] = new Opc.Da.Item();
                items[17].ItemName = "RFID.Rfid05_1.IdLo";

                items[18] = new Opc.Da.Item();
                items[18].ItemName = "RFID.Rfid05_2.IdHi";
                items[19] = new Opc.Da.Item();
                items[19].ItemName = "RFID.Rfid05_2.IdLo";

                items[20] = new Opc.Da.Item();
                items[20].ItemName = "RFID.Rfid06_1.IdHi";
                items[21] = new Opc.Da.Item();
                items[21].ItemName = "RFID.Rfid06_1.IdLo";

                items[22] = new Opc.Da.Item();
                items[22].ItemName = "RFID.Rfid06_2.IdHi";
                items[23] = new Opc.Da.Item();
                items[23].ItemName = "RFID.Rfid06_2.IdLo";

                items[24] = new Opc.Da.Item();
                items[24].ItemName = "RFID.Rfid07_1.IdHi";
                items[25] = new Opc.Da.Item();
                items[25].ItemName = "RFID.Rfid07_1.IdLo";

                items[26] = new Opc.Da.Item();
                items[26].ItemName = "RFID.Rfid07_2.IdHi";
                items[27] = new Opc.Da.Item();
                items[27].ItemName = "RFID.Rfid07_2.IdLo";

                items[28] = new Opc.Da.Item();
                items[28].ItemName = "RFID.Rfid08_1.IdHi";
                items[29] = new Opc.Da.Item();
                items[29].ItemName = "RFID.Rfid08_1.IdLo";

                items[30] = new Opc.Da.Item();
                items[30].ItemName = "RFID.Rfid08_2.IdHi";
                items[31] = new Opc.Da.Item();
                items[31].ItemName = "RFID.Rfid08_2.IdLo";

                items[32] = new Opc.Da.Item();
                items[32].ItemName = "RFID.Rfid09_1.IdHi";
                items[33] = new Opc.Da.Item();
                items[33].ItemName = "RFID.Rfid09_1.IdLo";
                int i = 33;
                AddGun(ref items, ref i, 6, 0);

                items = group.AddItems(items);


                TRK result_list = new TRK();

                ItemValueResult[] res = group.Read(items);
                if (res != null && res.Count() > 0)
                {
                    result_list.cards = new RFID[] {
                        // trk1
                        new RFID { num_trk = 1, side = 0, card = GetCardsOfNum(res[0].Value, res[1].Value)},
                        new RFID { num_trk = 1, side = 1, card = GetCardsOfNum(res[2].Value, res[3].Value)},
                        // trk2
                        new RFID { num_trk = 2, side = 0, card = GetCardsOfNum(res[4].Value, res[5].Value)},
                        new RFID { num_trk = 2, side = 1, card = GetCardsOfNum(res[6].Value, res[7].Value)},
                        // trk3
                        new RFID { num_trk = 3, side = 0, card = GetCardsOfNum(res[8].Value, res[9].Value)},
                        new RFID { num_trk = 3, side = 1, card = GetCardsOfNum(res[10].Value, res[11].Value)},
                        // trk4
                        new RFID { num_trk = 4, side = 0, card = GetCardsOfNum(res[12].Value, res[13].Value)},
                        new RFID { num_trk = 4, side = 1, card = GetCardsOfNum(res[14].Value, res[15].Value)},
                        // trk5
                        new RFID { num_trk = 5, side = 0, card = GetCardsOfNum(res[16].Value, res[17].Value)},
                        new RFID { num_trk = 5, side = 1, card = GetCardsOfNum(res[18].Value, res[19].Value)},
                        // trk6
                        //new RFID { num_trk = 6, site = 0, card = GetCardsOfNum(res[20].Value, res[21].Value)},
                        new RFID { num_trk = 6, side = 0, card = GetCardsOfNum("037", "50907") },
                        new RFID { num_trk = 6, side = 1, card = GetCardsOfNum(res[22].Value, res[23].Value)},
                        // trk7
                        new RFID { num_trk = 7, side = 0, card = GetCardsOfNum(res[24].Value, res[25].Value)},
                        new RFID { num_trk = 7, side = 1, card = GetCardsOfNum(res[26].Value, res[27].Value)},
                        // trk8
                        new RFID { num_trk = 8, side = 0, card = GetCardsOfNum(res[28].Value, res[29].Value)},
                        new RFID { num_trk = 8, side = 1, card = GetCardsOfNum(res[30].Value, res[31].Value)},
                        // trk9
                        new RFID { num_trk = 9, side = 0, card = GetCardsOfNum(res[32].Value, res[33].Value)},
                    };
                    result_list.guns = new Gun[]
                    {
                        // пистолет 11
                        GetGun(6,11,0,res,34),
                    };
                }
                return result_list;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

    }
}
