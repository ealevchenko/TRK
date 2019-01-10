using EFFC.Concrete;
using EFFC.Entities;
using Opc.Da;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MessageLog;

namespace ClientOPCTRK
{

    public class RFID
    {
        public int num_trk { get; set; }
        public int side { get; set; }
        public uint? hi { get; set; }
        public uint? lo { get; set; }
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
        public int type_fuel { get; set; }
    }

    public class TRK
    {
        public RFID[] cards { get; set; }
        public Gun[] guns { get; set; }
    }

    public class Cards : azsCards
    {
        public Cards() : base() { }
        public string Name { get; set; }
    }

    public class Tank
    {
        public string num_tank { get; set; }
        public double? dens { get; set; }
        public double? fill_percent { get; set; }
        public int? level { get; set; }
        public double? mass { get; set; }
        public byte? status1 { get; set; }
        public byte? status2 { get; set; }
        public int? status { get; set; }
        public int? temp { get; set; }
        public int? ullage { get; set; }
        public string unit { get; set; }
        public int? volume { get; set; }
        public int? water_level { get; set; }
        public int? water_volume { get; set; }
    }

    public class ClientTRK
    {
        private OpcCom.Factory fact = new OpcCom.Factory();
        private Opc.URL url;

        public ClientTRK()
        {
            url = new Opc.URL("opcda://localhost/Kepware.KEPServerEX.V6");
        }

        public void AddGun(ref Opc.Da.Item[] items, ref int i, int num_trk, int num_gun)
        {
            try
            {
                //i++;
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
                items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".Trk0" + num_trk + "_" + num_gun + "_status";
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".volume_to_write";
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "TRK.Trk0" + num_trk + "_" + num_gun + ".write_price";
                i++;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода AddGun(items={0}, i={1}, num_trk={2}, num_gun={3})", items, i, num_trk, num_gun).SaveError(e);
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
                if (hi != null && lo != null && (uint)hi > 0 && (uint)lo > 0)
                {
                    //Console.WriteLine("hi={0}, lo={1}",hi,lo);
                    byte[] data_hi = BitConverter.GetBytes((uint)hi);
                    byte[] data_lo = BitConverter.GetBytes((uint)lo);

                    if (data_hi != null && data_lo != null && data_hi.Count() >= 2 && data_lo.Count() >= 2)
                    {
                        int code1 = data_hi[1];
                        int code2 = (data_hi[0] * 256) + data_lo[1];
                        azsCards card = ef_card.Get().Where(c => c.Number == (code1).ToString("000") + "," + (code2).ToString("00000")).FirstOrDefault();
                        azsDeparts departs = null;
                        if (card != null)
                        {
                            departs = ef_departs.Get().Where(d => d.id == ((int)card.House).ToString("000")).FirstOrDefault();
                        }
                        Cards cards = new Cards()
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
                }
                return null;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetCardsOfNum(hi={0}, lo={1})", hi, lo).SaveError(e);
                return null;
            }
        }

        private RFID GetRFIDOfNum(int num_trk, int side, object hi, object lo)
        {
            try
            {
                RFID rfid = new RFID()
                {
                     num_trk= num_trk, side = side
                };

                EFazsCards ef_card = new EFazsCards();
                EFazsDeparts ef_departs = new EFazsDeparts();
                if (hi != null && lo != null && (uint)hi > 0 && (uint)lo > 0)
                {
                    rfid.hi = (uint)hi;
                    rfid.lo = (uint)lo;
                    //Console.WriteLine("hi={0}, lo={1}",hi,lo);
                    byte[] data_hi = BitConverter.GetBytes((uint)hi);
                    byte[] data_lo = BitConverter.GetBytes((uint)lo);

                    if (data_hi != null && data_lo != null && data_hi.Count() >= 2 && data_lo.Count() >= 2)
                    {
                        int code1 = data_hi[1];
                        int code2 = (data_hi[0] * 256) + data_lo[1];
                        rfid.hi = (uint)code1;
                        rfid.lo = (uint)code2;
                        azsCards card = ef_card.Get().Where(c => c.Number == (code1).ToString("000") + "," + (code2).ToString("00000")).FirstOrDefault();
                        azsDeparts departs = null;
                        if (card != null)
                        {
                            departs = ef_departs.Get().Where(d => d.id == ((int)card.House).ToString("000")).FirstOrDefault();
                            Cards cards = new Cards()
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
                            rfid.card = cards;
                        }
                    }
                }
                return rfid;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetRFIDOfNum(num_trk={0}, side={1}, hi={2}, lo={3})", num_trk, side, hi, lo).SaveError(e);
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
                int type_fuel = 0;

                switch (num_gun)
                {
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 17:
                    case 18:
                    case 23:
                    case 24:
                    case 27:
                    case 28:
                        type_fuel = 107000022; // А92
                        break;
                    case 15:
                    case 16:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 25:
                    case 26:
                        type_fuel = 107000023; // А95
                        break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 29:
                        type_fuel = 107000024; // ДТ
                        break;
                        //case 4:
                        //    type_fuel = 107000027; // Керосин
                        //    break;
                }

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
                    type_fuel = type_fuel
                };
                //if (gun != null) {
                //    Console.WriteLine("online = {0}:{1}", gun.online, gun.online);
                //}
                return gun;

            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetGun(num_trk={0}, num_gun={1}, site={2}, list={3}, start={4})", num_trk, num_gun, site, list, start).SaveError(e);
                return null;
            }

        }
        /// <summary>
        /// Получить все теги колонки
        /// </summary>
        /// <returns></returns>
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
                        new RFID { num_trk = 1, side = 0, card = GetCardsOfNum(res[0].Value, res[1].Value), hi = res[0].Value != null ? res[0].Value as uint? : null, lo = res[1].Value != null ? res[1].Value as uint? : null },
                        new RFID { num_trk = 1, side = 1, card = GetCardsOfNum(res[2].Value, res[3].Value), hi = res[2].Value != null ? res[2].Value as uint? : null, lo = res[3].Value != null ? res[3].Value as uint? : null},
                        // trk2
                        new RFID { num_trk = 2, side = 0, card = GetCardsOfNum(res[4].Value, res[5].Value), hi = res[4].Value != null ? res[4].Value as uint? : null, lo = res[5].Value != null ? res[5].Value as uint? : null},
                        new RFID { num_trk = 2, side = 1, card = GetCardsOfNum(res[6].Value, res[7].Value), hi = res[6].Value != null ? res[6].Value as uint? : null, lo = res[7].Value != null ? res[7].Value as uint? : null},
                        // trk3
                        new RFID { num_trk = 3, side = 0, card = GetCardsOfNum(res[8].Value, res[9].Value), hi = res[8].Value != null ? res[8].Value as uint? : null, lo = res[9].Value != null ? res[9].Value as uint? : null},
                        new RFID { num_trk = 3, side = 1, card = GetCardsOfNum(res[10].Value, res[11].Value), hi = res[10].Value != null ? res[10].Value as uint? : null, lo = res[11].Value != null ? res[11].Value as uint? : null},
                        // trk4
                        new RFID { num_trk = 4, side = 0, card = GetCardsOfNum(res[12].Value, res[13].Value), hi = res[12].Value != null ? res[12].Value as uint? : null, lo = res[13].Value != null ? res[13].Value as uint? : null},
                        new RFID { num_trk = 4, side = 1, card = GetCardsOfNum(res[14].Value, res[15].Value), hi = res[14].Value != null ? res[14].Value as uint? : null, lo = res[15].Value != null ? res[15].Value as uint? : null},
                        // trk5
                        new RFID { num_trk = 5, side = 0, card = GetCardsOfNum(res[16].Value, res[17].Value), hi = res[16].Value != null ? res[16].Value as uint? : null, lo = res[17].Value != null ? res[17].Value as uint? : null},
                        new RFID { num_trk = 5, side = 1, card = GetCardsOfNum(res[18].Value, res[19].Value), hi = res[18].Value != null ? res[18].Value as uint? : null, lo = res[19].Value != null ? res[19].Value as uint? : null},
                        // trk6
                        //new RFID { num_trk = 6, site = 0, card = GetCardsOfNum(res[20].Value, res[21].Value), hi = res[20].Value != null ? res[20].Value as uint? : null, lo = res[21].Value != null ? res[21].Value as uint? : null},
                        new RFID { num_trk = 6, side = 0, card = GetCardsOfNum((uint)37, (uint)50907) , lo = 37, hi = 50907},
                        new RFID { num_trk = 6, side = 1, card = GetCardsOfNum(res[22].Value, res[23].Value), hi = res[22].Value != null ? res[22].Value as uint? : null, lo = res[23].Value != null ? res[23].Value as uint? : null},
                        // trk7
                        new RFID { num_trk = 7, side = 0, card = GetCardsOfNum(res[24].Value, res[25].Value), hi = res[24].Value != null ? res[24].Value as uint? : null, lo = res[25].Value != null ? res[25].Value as uint? : null},
                        new RFID { num_trk = 7, side = 1, card = GetCardsOfNum(res[26].Value, res[27].Value), hi = res[26].Value != null ? res[26].Value as uint? : null, lo = res[27].Value != null ? res[27].Value as uint? : null},
                        // trk8
                        new RFID { num_trk = 8, side = 0, card = GetCardsOfNum(res[28].Value, res[29].Value), hi = res[28].Value != null ? res[28].Value as uint? : null, lo = res[29].Value != null ? res[29].Value as uint? : null},
                        new RFID { num_trk = 8, side = 1, card = GetCardsOfNum(res[30].Value, res[31].Value), hi = res[30].Value != null ? res[30].Value as uint? : null, lo = res[31].Value != null ? res[31].Value as uint? : null},
                        // trk9
                        new RFID { num_trk = 9, side = 0, card = GetCardsOfNum(res[32].Value, res[33].Value), hi = res[32].Value != null ? res[32].Value as uint? : null, lo = res[33].Value != null ? res[33].Value as uint? : null},
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
                String.Format("Ошибка выполнения метода ReadTagOPC()").SaveError(e);
                return null;
            }
        }
        /// <summary>
        /// Получить теги Бака
        /// </summary>
        /// <param name="num_tank"></param>
        /// <returns></returns>
        public Tank ReadTagsOPSOfTank(string num_tank)
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
                Opc.Da.Item[] items = new Opc.Da.Item[13];
                items[0] = new Opc.Da.Item();
                items[0].ItemName = "OWN.tank" + num_tank + ".dens";
                items[1] = new Opc.Da.Item();
                items[1].ItemName = "OWN.tank" + num_tank + ".fill_percent";
                items[2] = new Opc.Da.Item();
                items[2].ItemName = "OWN.tank" + num_tank + ".level";
                items[3] = new Opc.Da.Item();
                items[3].ItemName = "OWN.tank" + num_tank + ".mass";
                items[4] = new Opc.Da.Item();
                items[4].ItemName = "OWN.tank" + num_tank + ".status1";
                items[5] = new Opc.Da.Item();
                items[5].ItemName = "OWN.tank" + num_tank + ".status2";
                items[6] = new Opc.Da.Item();
                items[6].ItemName = "OWN.tank" + num_tank + ".tank" + num_tank + "_status";
                items[7] = new Opc.Da.Item();
                items[7].ItemName = "OWN.tank" + num_tank + ".temp";
                items[8] = new Opc.Da.Item();
                items[8].ItemName = "OWN.tank" + num_tank + ".ullage";
                items[9] = new Opc.Da.Item();
                items[9].ItemName = "OWN.tank" + num_tank + ".unit";
                items[10] = new Opc.Da.Item();
                items[10].ItemName = "OWN.tank" + num_tank + ".volume";
                items[11] = new Opc.Da.Item();
                items[11].ItemName = "OWN.tank" + num_tank + ".water_level";
                items[12] = new Opc.Da.Item();
                items[12].ItemName = "OWN.tank" + num_tank + ".water_volume";
                items = group.AddItems(items);


                ItemValueResult[] res = group.Read(items);
                if (res != null && res.Count() > 0)
                {
                    Tank tank = new Tank()
                    {
                        num_tank = num_tank,
                        dens = res[0].Value != null ? res[0].Value as double? : null,
                        fill_percent = res[1].Value != null ? res[1].Value as double? : null,
                        level = res[2].Value != null ? res[2].Value as int? : null,
                        mass = res[3].Value != null ? res[3].Value as double? : null,
                        status1 = res[4].Value != null ? res[4].Value as byte? : null,
                        status2 = res[5].Value != null ? res[5].Value as byte? : null,
                        status = res[6].Value != null ? res[6].Value as int? : null,
                        temp = res[7].Value != null ? res[7].Value as int? : null,
                        ullage = res[8].Value != null ? res[8].Value as int? : null,
                        unit = res[9].Value != null ? res[9].Value as string : null,
                        volume = res[10].Value != null ? res[10].Value as int? : null,
                        water_level = res[11].Value != null ? res[11].Value as int? : null,
                        water_volume = res[12].Value != null ? res[12].Value as int? : null,
                    };
                    return tank;
                }
                return null;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода ReadTagsOPSOfTank(num_tank={0})", num_tank).SaveError(e);
                return null;
            }
        }
        /// <summary>
        /// Прочесть RFID
        /// </summary>
        /// <returns></returns>
        public List<RFID> ReadTagsOPSOfRFID() {
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
                Opc.Da.Item[] items = new Opc.Da.Item[34];
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

                items = group.AddItems(items);
                List<RFID> result_list = new List<RFID>();
                ItemValueResult[] res = group.Read(items);

                result_list.Add(GetRFIDOfNum(1, 0, res[0].Value, res[1].Value));
                result_list.Add(GetRFIDOfNum(1, 1, res[2].Value, res[3].Value));

                result_list.Add(GetRFIDOfNum(2, 0, res[4].Value, res[5].Value));
                result_list.Add(GetRFIDOfNum(2, 1, res[6].Value, res[7].Value));

                result_list.Add(GetRFIDOfNum(3, 0, res[8].Value, res[9].Value));
                result_list.Add(GetRFIDOfNum(3, 1, res[10].Value, res[11].Value));

                result_list.Add(GetRFIDOfNum(4, 0, res[12].Value, res[13].Value));
                result_list.Add(GetRFIDOfNum(4, 1, res[14].Value, res[15].Value));

                result_list.Add(GetRFIDOfNum(5, 0, res[16].Value, res[17].Value));
                result_list.Add(GetRFIDOfNum(5, 1, res[18].Value, res[19].Value));

                result_list.Add(GetRFIDOfNum(6, 0, res[20].Value, res[21].Value));
                //result_list.Add(GetRFIDOfNum(6, 0, (uint)10006, (uint)54273));
                result_list.Add(GetRFIDOfNum(6, 1, res[22].Value, res[23].Value));

                result_list.Add(GetRFIDOfNum(7, 0, res[24].Value, res[25].Value));
                result_list.Add(GetRFIDOfNum(7, 1, res[26].Value, res[27].Value));

                result_list.Add(GetRFIDOfNum(8, 0, res[28].Value, res[29].Value));
                result_list.Add(GetRFIDOfNum(8, 1, res[30].Value, res[31].Value));

                result_list.Add(GetRFIDOfNum(9, 0, res[32].Value, res[33].Value));

                return result_list;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода ReadTagsOPSOfRFID()").SaveError(e);
                return null;
            }
        }
        /// <summary>
        /// Прочесть теги пистолетов
        /// </summary>
        /// <returns></returns>
        public List<Gun> ReadTagOPCOfGun()
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
                Opc.Da.Item[] items = new Opc.Da.Item[14+14];
                int i = 0;
                AddGun(ref items, ref i, 6, 0); // левая
                AddGun(ref items, ref i, 6, 5); // правая

                items = group.AddItems(items);


                List<Gun> result_list = new List<Gun>();

                ItemValueResult[] res = group.Read(items);
                i = 0;
                result_list.Add(GetGun(6,11,0,res,i)); // пистолет 11
                i += 14;
                result_list.Add(GetGun(6,12,1,res,i)); // пистолет 12

                return result_list;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода ReadTagOPCOfGun()").SaveError(e);
                return null;
            }
        }

    }
}
