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
        public bool? online { get; set; }
        public bool? ready { get; set; }
        public int? status { get; set; }
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

    //public class TRK
    //{
    //    public RFID[] cards { get; set; }
    //    public Gun[] guns { get; set; }
    //}

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

    public class Risers { 
        public UInt16[] Counter { get; set; } // 4
        public UInt16[] CounterResetable { get; set; } // 4
        public UInt16[] CountOn { get; set; } // 2
        public UInt16? Error { get; set; } // 
        public UInt16[] Flow { get; set; } // 2
        public float? Flow2 { get; set; } // 
        public UInt16? Freq { get; set; } // 
        public UInt16? PiontsCount { get; set; } // 
        public UInt16? Status { get; set; } // 
        public float? Temp { get; set; } // 
        public UInt16[] TimerLiveOn { get; set; } // 4
        public UInt16[] TimerOn { get; set; } // 2
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
        /// Добавить строки тегов RFID
        /// </summary>
        /// <param name="items"></param>
        /// <param name="i"></param>
        /// <param name="num"></param>
        /// <param name="side"></param>
        public void AddRFID(ref Opc.Da.Item[] items, ref int i, int num, int side)
        {
            try
            {
                if (num < 10)
                {
                    items[i] = new Opc.Da.Item();
                    items[i].ItemName = "RFID.Rfid0" + num + "_" + side + ".IdHi";
                    i++;
                    items[i] = new Opc.Da.Item();
                    items[i].ItemName = "RFID.Rfid0" + num + "_" + side + ".IdLo";
                    i++;
                    items[i] = new Opc.Da.Item();
                    items[i].ItemName = "RFID.Rfid0" + num + "_" + side + ".Online";
                    i++;
                    items[i] = new Opc.Da.Item();
                    items[i].ItemName = "RFID.Rfid0" + num + "_" + side + ".Ready";
                    i++;
                    items[i] = new Opc.Da.Item();
                    items[i].ItemName = "RFID.Rfid0" + num + "_" + side + ".Rfid0" + num + "_" + side + "_status";
                    i++;
                };
                if (num >= 10 && num <= 12)
                {
                    items[i] = new Opc.Da.Item();
                    items[i].ItemName = "RFID.Rfid" + num + ".IdHi";
                    i++;
                    items[i] = new Opc.Da.Item();
                    items[i].ItemName = "RFID.Rfid" + num + ".IdLo";
                    i++;
                    items[i] = new Opc.Da.Item();
                    items[i].ItemName = "RFID.Rfid" + num + ".Online";
                    i++;
                    items[i] = new Opc.Da.Item();
                    items[i].ItemName = "RFID.Rfid" + num + ".Ready";
                    i++;
                    items[i] = new Opc.Da.Item();
                    items[i].ItemName = "RFID.Rfid" + num + ".Rfid" + num + "status";
                    i++;
                };
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода AddRFID(items={0}, i={1}, num={2}, side={3})", items, i, num, side).SaveError(e);
            }
        }
        /// <summary>
        /// Получить значение тегов RFID
        /// </summary>
        /// <param name="num"></param>
        /// <param name="side"></param>
        /// <param name="hi"></param>
        /// <param name="lo"></param>
        /// <returns></returns>
        private RFID GetRFIDOfNum(int num, int side, ItemValueResult[] list, ref int i, bool identify_card)
        {
            try
            {

                RFID rfid = new RFID()
                {
                    num_trk = num,
                    side = side
                };
                if (list != null)
                {
                    uint? hi = list[i].Value != null ? list[i].Value as uint? : null; //if (i == 50) { hi = 10006; }; //if (i == 55) { hi = 10006; }
                    i++;
                    uint? lo = list[i].Value != null ? list[i].Value as uint? : null; //if (i == 51) { lo = 54273; }; //if(i == 56) { lo = 54273; }
                    i++;
                    rfid.online = list[i].Value != null ? list[i].Value as bool? : null;
                    i++;
                    rfid.ready = list[i].Value != null ? list[i].Value as bool? : null;
                    i++;
                    rfid.status = list[i].Value != null ? list[i].Value as int? : null;
                    i++;
                    EFazsCards ef_card = new EFazsCards();
                    EFazsDeparts ef_departs = new EFazsDeparts();
                    if (hi != null && lo != null)
                    {
                        rfid.hi = (uint)hi;
                        rfid.lo = (uint)lo;
                        if (hi > 0 && lo > 0)
                        {

                            //Console.WriteLine("hi={0}, lo={1}",hi,lo);
                            byte[] data_hi = BitConverter.GetBytes((uint)hi);
                            byte[] data_lo = BitConverter.GetBytes((uint)lo);

                            if (data_hi != null && data_lo != null && data_hi.Count() >= 2 && data_lo.Count() >= 2)
                            {
                                int code1 = data_hi[1];
                                int code2 = (data_hi[0] * 256) + data_lo[1];
                                rfid.hi = (uint)code1;
                                rfid.lo = (uint)code2;
                                if (identify_card)
                                {
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
                        }
                    }


                }
                return rfid;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetRFIDOfNum(num_trk={0}, side={1}, list={3}, start={4})", num, side, list, i).SaveError(e);
                return null;
            }
        }
        /// <summary>
        /// Получить значения тегов пистолетов
        /// </summary>
        /// <param name="num_trk"></param>
        /// <param name="num_gun"></param>
        /// <param name="site"></param>
        /// <param name="list"></param>
        /// <param name="start"></param>
        /// <returns></returns>
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
        public List<RFID> ReadTagsOPSOfRFID(bool identify_card)
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
                Opc.Da.Item[] items = new Opc.Da.Item[20 * 5];
                int i = 0;
                AddRFID(ref items, ref i, 1, 1);
                AddRFID(ref items, ref i, 1, 2);
                AddRFID(ref items, ref i, 2, 1);
                AddRFID(ref items, ref i, 2, 2);
                AddRFID(ref items, ref i, 3, 1);
                AddRFID(ref items, ref i, 3, 2);
                AddRFID(ref items, ref i, 4, 1);
                AddRFID(ref items, ref i, 4, 2);
                AddRFID(ref items, ref i, 5, 1);
                AddRFID(ref items, ref i, 5, 2);
                AddRFID(ref items, ref i, 6, 1);
                AddRFID(ref items, ref i, 6, 2);
                AddRFID(ref items, ref i, 7, 1);
                AddRFID(ref items, ref i, 7, 2);
                AddRFID(ref items, ref i, 8, 1);
                AddRFID(ref items, ref i, 8, 2);
                AddRFID(ref items, ref i, 9, 1);
                AddRFID(ref items, ref i, 10, 0);
                AddRFID(ref items, ref i, 11, 0);
                AddRFID(ref items, ref i, 12, 0);

                items = group.AddItems(items);
                List<RFID> result_list = new List<RFID>();
                ItemValueResult[] res = group.Read(items);

                i = 0;
                result_list.Add(GetRFIDOfNum(1, 0, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(1, 1, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(2, 0, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(2, 1, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(3, 0, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(3, 1, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(4, 0, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(4, 1, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(5, 0, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(5, 1, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(6, 0, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(6, 1, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(7, 0, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(7, 1, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(8, 0, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(8, 1, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(9, 0, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(10, 0, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(11, 0, res, ref i, identify_card));
                result_list.Add(GetRFIDOfNum(12, 0, res, ref i, identify_card));
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
                Opc.Da.Item[] items = new Opc.Da.Item[14 + 14];
                int i = 0;
                AddGun(ref items, ref i, 6, 0); // левая
                AddGun(ref items, ref i, 6, 5); // правая

                items = group.AddItems(items);


                List<Gun> result_list = new List<Gun>();

                ItemValueResult[] res = group.Read(items);
                i = 0;
                result_list.Add(GetGun(6, 11, 0, res, i)); // пистолет 11
                i += 14;
                result_list.Add(GetGun(6, 12, 1, res, i)); // пистолет 12

                return result_list;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода ReadTagOPCOfGun()").SaveError(e);
                return null;
            }
        }

        public List<Risers> ReadTagOPCOfRisers()
        {
            try
            {
                Console.WriteLine("TS.C2.Counter - start >");
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
                Opc.Da.Item[] items = new Opc.Da.Item[12];
                items[0] = new Opc.Da.Item();
                items[0].ItemName = "TS.C2.Counter"; //UInt16[4]

                items[1] = new Opc.Da.Item();
                items[1].ItemName = "TS.C2.CounterResetable"; //UInt16[4]

                items[2] = new Opc.Da.Item();
                items[2].ItemName = "TS.C2.CountOn"; //UInt16[2]

                items[3] = new Opc.Da.Item();
                items[3].ItemName = "TS.C2.Error"; //UInt16

                items[4] = new Opc.Da.Item();
                items[4].ItemName = "TS.C2.Flow"; //UInt16[2]

                items[5] = new Opc.Da.Item();
                items[5].ItemName = "TS.C2.Flow2"; //float

                items[6] = new Opc.Da.Item();
                items[6].ItemName = "TS.C2.Freq"; //UInt16

                items[7] = new Opc.Da.Item();
                items[7].ItemName = "TS.C2.PiontsCount"; //UInt16

                items[8] = new Opc.Da.Item();
                items[8].ItemName = "TS.C2.Status"; //UInt16

                items[9] = new Opc.Da.Item();
                items[9].ItemName = "TS.C2.Temp"; //float

                items[10] = new Opc.Da.Item();
                items[10].ItemName = "TS.C2.TimerLiveOn"; //UInt16[4]

                items[11] = new Opc.Da.Item();
                items[11].ItemName = "TS.C2.TimerOn"; //UInt16[2]

                items = group.AddItems(items);

                ItemValueResult[] res = group.Read(items);

                List<Risers> list_result = new List<Risers>();
                list_result.Add(new Risers()
                {
                    Counter = res[0].Value != null ? res[0].Value as UInt16[] : null,
                    CounterResetable = res[1].Value != null ? res[1].Value as UInt16[] : null,
                    CountOn = res[2].Value != null ? res[2].Value as UInt16[] : null,
                    Error = res[3].Value != null ? res[3].Value as UInt16? : null,
                    Flow = res[4].Value != null ? res[4].Value as UInt16[] : null,
                    Flow2 = res[5].Value != null ? res[5].Value as float? : null,
                    Freq = res[6].Value != null ? res[6].Value as UInt16? : null,
                    PiontsCount = res[7].Value != null ? res[7].Value as UInt16? : null,
                    Status = res[8].Value != null ? res[8].Value as UInt16? : null,
                    Temp = res[9].Value != null ? res[9].Value as float? : null,
                    TimerLiveOn = res[10].Value != null ? res[10].Value as UInt16[] : null,
                    TimerOn = res[11].Value != null ? res[11].Value as UInt16[] : null,
                });
                return list_result;


            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода ReadTagOPCOfRisers()").SaveError(e);
                return null;
            }
        }

    }
}
