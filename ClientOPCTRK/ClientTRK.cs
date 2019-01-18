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
        public double? level { get; set; }
        public double? mass { get; set; }
        public byte? status1 { get; set; }
        public byte? status2 { get; set; }
        public int? status { get; set; }
        public double? temp { get; set; }
        public int? ullage { get; set; }
        public string unit { get; set; }
        public double? volume { get; set; }
        public double? water_level { get; set; }
        public double? water_volume { get; set; }
    }

    public class DIORisers
    {
        public int num { get; set; }
        public int type_fuel { get; set; }
        public ulong? Counter { get; set; } // UInt16[4]
        public ulong? CounterResetable { get; set; } // UInt16[4]
        public ulong? CountOn { get; set; } // UInt16[2]
        public UInt16? Error { get; set; } // 
        public ulong? Flow { get; set; } // UInt16[2]
        public float? Flow2 { get; set; } // 
        public UInt16? Freq { get; set; } // 
        public UInt16? PiontsCount { get; set; } // 
        public UInt16? Status { get; set; } // 
        public float? Temp { get; set; } // 
        public ulong? TimerLiveOn { get; set; } // UInt16[4]
        public ulong? TimerOn { get; set; } // UInt16[2]
    }

    public class Risers {
        public int num { get; set; }
        public int type_fuel { get; set; }
        public bool? door { get; set; }
        public bool? power { get; set; }
        public bool? flg_kv1 { get; set; }  // Флаг(4) управления контактором включения слива (ФУКВС
        public bool? flg_kv2 { get; set; }  // Flg_SHBUS_KV4 - Флаг(4) реле предельного уровня слива 1(в баке,скада)
        public bool? inp_km { get; set; }   // Inp_SHBUS_KM1 - (Inp)Состояние контактора включения насоса 1
        public bool? inp_kvq1 { get; set; } //Inp_SHBUS_KVQ1_1 - (Inp)Контроль перелива стояка 1
        public bool? inp_kvq2 { get; set; } //Inp_SHBUS_KVQ2_1 - (Inp)Контроль заземления автоцистерны стояка 1
        public bool? inp_sa2 { get; set; }  //Inp_SHBUS_SA2_1 - (Inp)Выбор режима управления насосом стояка 1
        public bool? out_kv1 { get; set; }  //Out_SHBUS_KV - (OUT)Реле управления контактором включения насоса стояка 1
        public bool? out_kv2 { get; set; }  //Out_SHBUS_KV - (OUT)Реле предельного уровня в резервуарах стояка 1
    }

    public class ClientTRK
    {
        private OpcCom.Factory fact = new OpcCom.Factory();
        private Opc.URL url;

        public ClientTRK()
        {
            url = new Opc.URL("opcda://localhost/Kepware.KEPServerEX.V6");
        }
        /// <summary>
        /// Добавить строки тегов пистолетов
        /// </summary>
        /// <param name="items"></param>
        /// <param name="i"></param>
        /// <param name="num_trk"></param>
        /// <param name="num_gun"></param>
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
        /// Добавить строки тегов датчика счетчика оборотов наливных стояков
        /// </summary>
        /// <param name="items"></param>
        /// <param name="i"></param>
        /// <param name="num"></param>
        public void AddDIORisers(ref Opc.Da.Item[] items, ref int i, int num) {
            try
            {
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "TS.C" + num + ".Counter"; //UInt16[4]
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "TS.C" + num + ".CounterResetable"; //UInt16[4]
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "TS.C" + num + ".CountOn"; //UInt16[2]
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "TS.C" + num + ".Error"; //UInt16
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "TS.C" + num + ".Flow"; //UInt16[2]
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "TS.C" + num + ".Flow2"; //float
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "TS.C" + num + ".Freq"; //UInt16
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "TS.C" + num + ".PiontsCount"; //UInt16
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "TS.C" + num + ".Status"; //UInt16
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "TS.C" + num + ".Temp"; //float
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "TS.C" + num + ".TimerLiveOn"; //UInt16[4]
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "TS.C" + num + ".TimerOn"; //UInt16[2]
                i++;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода AddDIORisers(items={0}, i={1}, num={2})", items, i, num).SaveError(e);
            }
        }
        /// <summary>
        /// Добавить строки тегов контакторов наливных стояков 
        /// </summary>
        /// <param name="items"></param>
        /// <param name="i"></param>
        /// <param name="num"></param>
        public void AddRisers(ref Opc.Da.Item[] items, ref int i, int num) {
            try
            {
                
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "AZS_SHBUS.SHBUS.Inp_SHBUS_Door"; // Inp_SHBUS_Door 
                i++;             
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "AZS_SHBUS.SHBUS.Inp_SHBUS_Power"; // Inp_SHBUS_Power 
                i++;     
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "AZS_SHBUS.SHBUS.Flg_SHBUS_KV" + num; //Флаг(01) управления контактором включения слива 1
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "AZS_SHBUS.SHBUS.Flg_SHBUS_KV" + (3 + num).ToString(); // Flg_SHBUS_KV4 - Флаг(4) реле предельного уровня слива 1(в баке,скада)
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "AZS_SHBUS.SHBUS.Inp_SHBUS_KM" + num; //Inp_SHBUS_KM1 - (Inp)Состояние контактора включения насоса 1
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "AZS_SHBUS.SHBUS.Inp_SHBUS_KVQ1_" + num; //Inp_SHBUS_KVQ1_1 - (Inp)Контроль перелива стояка 1
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "AZS_SHBUS.SHBUS.Inp_SHBUS_KVQ2_" + num; //Inp_SHBUS_KVQ2_1 - (Inp)Контроль заземления автоцистерны стояка 1
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "AZS_SHBUS.SHBUS.Inp_SHBUS_SA2_" + num; //Inp_SHBUS_SA2_1 - (Inp)Выбор режима управления насосом стояка 1
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "AZS_SHBUS.SHBUS.Out_SHBUS_KV" + num; //Out_SHBUS_KV - (OUT)Реле управления контактором включения насоса стояка 1
                i++;
                items[i] = new Opc.Da.Item();
                items[i].ItemName = "AZS_SHBUS.SHBUS.Out_SHBUS_KV" + (3 + num).ToString(); // Out_SHBUS_KV4 - (OUT)Реле предельного уровня в резервуарах стояка 1
                i++;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода AddRisers(items={0}, i={1}, num={2})", items, i, num).SaveError(e);
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
                                    String.Format("Определим ID=карты code1={0}, code2={1}", code1, code2).SaveInformation();
                                    azsCards card = ef_card.Get().Where(c => c.Number == (code1).ToString("000") + "," + (code2).ToString("00000")).FirstOrDefault();
                                    azsDeparts departs = null;
                                    if (card != null)
                                    {
                                        String.Format("При code1={0}, code2={1} id_card ={2}", code1, code2, card.Id).SaveInformation();
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
                                    } else {
                                        String.Format("При code1={0}, code2={1} id_card - не определен.", code1, code2).SaveInformation();
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
                String.Format("Ошибка выполнения метода GetRFIDOfNum(num={0}, side={1}, list={2}, i={3}, identify_card={4})", num, side, list, i, identify_card).SaveError(e);
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

        private ulong? ArrUInt16ToULong(object val)
        {
            try
            {
                UInt16[] value = val != null ? val as UInt16[] : null;
                ulong? Result = 0;
                if (value == null) return null;
                int count = value.Count()-1;
                ulong ind = 65536;
                Result += value[count];
                count--;
                while (count >= 0)
                {
                    Result += (value[count] * ind);
                    count--;
                    ind = ind * 65536;
                }
                return Result;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода ArrUInt16ToULong(val={0})", val).SaveError(e);
                return null;
            }
        }
        /// <summary>
        ///  Получить значения тегов счетчика наливных стояков
        /// </summary>
        /// <param name="num"></param>
        /// <param name="list"></param>
        /// <param name="start"></param>
        /// <returns></returns>
        private DIORisers GetDIORisers(int num, ItemValueResult[] list, int start)
        {
            try
            {
                int type_fuel = 0;
                switch (num) {
                    case 1: type_fuel = 107000024; break;
                    case 2: type_fuel = 107000027; break;
                    case 3: type_fuel = 107000022; break;
                }

                DIORisers risers = new DIORisers()
                {
                    num = num,
                    type_fuel = type_fuel,
                    Counter = ArrUInt16ToULong(list[start].Value),
                    CounterResetable = ArrUInt16ToULong(list[start+1].Value),
                    CountOn = ArrUInt16ToULong(list[start+2].Value),
                    Error = list[start + 3].Value != null ? list[start + 3].Value as UInt16? : null,
                    Flow = ArrUInt16ToULong(list[start+4].Value),
                    Flow2 = list[start + 5].Value != null ? list[start + 5].Value as float? : null,
                    Freq = list[start + 6].Value != null ? list[start + 6].Value as UInt16? : null,
                    PiontsCount = list[start + 7].Value != null ? list[start + 7].Value as UInt16? : null,
                    Status = list[start + 8].Value != null ? list[start + 8].Value as UInt16? : null,
                    Temp = list[start + 9].Value != null ? list[start + 9].Value as float? : null,
                    TimerLiveOn = ArrUInt16ToULong(list[start+10].Value),
                    TimerOn = ArrUInt16ToULong(list[start+11].Value),
                };
                return risers;

            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода DIORisers(num={0}, list={1}, start={2})", num, list, start).SaveError(e);
                return null;
            }

        }
        /// <summary>
        /// Получить значения тегов наливных стояков
        /// </summary>
        /// <param name="num"></param>
        /// <param name="list"></param>
        /// <param name="start"></param>
        /// <returns></returns>
        private Risers GetRisers(int num, ItemValueResult[] list, int start)
        {
            try
            {
                int type_fuel = 0;
                switch (num)
                {
                    case 1: type_fuel = 107000024; break;
                    case 2: type_fuel = 107000027; break;
                    case 3: type_fuel = 107000022; break;
                }
                Risers risers = new Risers()
                {
                    num = num,
                    type_fuel = type_fuel,
                    door = list[start].Value != null ? list[start].Value as bool? : null,
                    power = list[start + 1].Value != null ? list[start + 1].Value as bool? : null,
                    flg_kv1 = list[start + 2].Value != null ? list[start + 2].Value as bool? : null,
                    flg_kv2 = list[start + 3].Value != null ? list[start + 3].Value as bool? : null,
                    inp_km = list[start + 4].Value != null ? list[start + 4].Value as bool? : null,
                    inp_kvq1 = list[start + 5].Value != null ? list[start + 5].Value as bool? : null,
                    inp_kvq2 = list[start + 6].Value != null ? list[start + 6].Value as bool? : null,
                    inp_sa2 = list[start + 7].Value != null ? list[start + 7].Value as bool? : null,
                    out_kv1 = list[start + 8].Value != null ? list[start + 8].Value as bool? : null,
                    out_kv2 = list[start + 9].Value != null ? list[start + 9].Value as bool? : null,
                };
                return risers;

            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetRisers(num={0}, list={1}, start={2})", num, list, start).SaveError(e);
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
                        level = res[2].Value != null ? res[2].Value as int? / 100.0 : null, // преабразуем
                        mass = res[3].Value != null ? res[3].Value as double? : null,
                        status1 = res[4].Value != null ? res[4].Value as byte? : null,
                        status2 = res[5].Value != null ? res[5].Value as byte? : null,
                        status = res[6].Value != null ? res[6].Value as int? : null,
                        temp = res[7].Value != null ? res[7].Value as int? / 10.0 : null, // преабразуем
                        ullage = res[8].Value != null ? res[8].Value as int? : null,
                        unit = res[9].Value != null ? res[9].Value as string : null,
                        volume = res[10].Value != null ? res[10].Value as int? / 10.0 : null,
                        water_level = res[11].Value != null ? res[11].Value as int? / 100.0 : null, // преабразуем
                        water_volume = res[12].Value != null ? res[12].Value as int? / 10.0 : null,
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
                String.Format("Ошибка выполнения метода ReadTagsOPSOfRFID(identify_card={0})", identify_card).SaveError(e);
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
                Opc.Da.Item[] items = new Opc.Da.Item[29 * 14];
                int i = 0;
                AddGun(ref items, ref i, 1, 0); // левая
                AddGun(ref items, ref i, 1, 5); // правая 
                AddGun(ref items, ref i, 2, 0); // левая
                AddGun(ref items, ref i, 2, 5); // правая  
                AddGun(ref items, ref i, 3, 0); // левая
                AddGun(ref items, ref i, 3, 5); // правая                  
                AddGun(ref items, ref i, 4, 0); // левая
                AddGun(ref items, ref i, 4, 5); // правая                 
                AddGun(ref items, ref i, 5, 0); // левая
                AddGun(ref items, ref i, 5, 5); // правая               
                AddGun(ref items, ref i, 6, 0); // левая
                AddGun(ref items, ref i, 6, 5); // правая

                AddGun(ref items, ref i, 7, 0); // левая
                AddGun(ref items, ref i, 7, 1); // левая
                AddGun(ref items, ref i, 7, 2); // левая
                AddGun(ref items, ref i, 7, 3); // левая
                AddGun(ref items, ref i, 7, 5); // правая 
                AddGun(ref items, ref i, 7, 6); // правая
                AddGun(ref items, ref i, 7, 7); // правая 
                AddGun(ref items, ref i, 7, 8); // правая 

                AddGun(ref items, ref i, 8, 0); // левая
                AddGun(ref items, ref i, 8, 1); // левая
                AddGun(ref items, ref i, 8, 2); // левая
                AddGun(ref items, ref i, 8, 3); // левая
                AddGun(ref items, ref i, 8, 5); // правая 
                AddGun(ref items, ref i, 8, 6); // правая
                AddGun(ref items, ref i, 8, 7); // правая 
                AddGun(ref items, ref i, 8, 8); // правая 

                AddGun(ref items, ref i, 9, 0); // левая

                items = group.AddItems(items);


                List<Gun> result_list = new List<Gun>();

                ItemValueResult[] res = group.Read(items);
                i = 0;
                result_list.Add(GetGun(1, 1, 0, res, i)); // пистолет 1
                i += 14;
                result_list.Add(GetGun(1, 2, 1, res, i)); // пистолет 2
                i += 14;
                result_list.Add(GetGun(2, 3, 0, res, i)); // пистолет 3
                i += 14;
                result_list.Add(GetGun(2, 4, 1, res, i)); // пистолет 4
                i += 14;
                result_list.Add(GetGun(3, 5, 0, res, i)); // пистолет 5
                i += 14;
                result_list.Add(GetGun(3, 6, 1, res, i)); // пистолет 6
                i += 14;
                result_list.Add(GetGun(4, 7, 0, res, i)); // пистолет 7
                i += 14;
                result_list.Add(GetGun(4, 8, 1, res, i)); // пистолет 8
                i += 14;
                result_list.Add(GetGun(5, 9, 0, res, i)); // пистолет 9
                i += 14;
                result_list.Add(GetGun(5, 10, 1, res, i)); // пистолет 10
                i += 14;
                result_list.Add(GetGun(6, 11, 0, res, i)); // пистолет 11
                i += 14;
                result_list.Add(GetGun(6, 12, 1, res, i)); // пистолет 12
                i += 14;
                result_list.Add(GetGun(7, 13, 0, res, i)); // пистолет 13
                i += 14;
                result_list.Add(GetGun(7, 14, 0, res, i)); // пистолет 14
                i += 14;
                result_list.Add(GetGun(7, 15, 0, res, i)); // пистолет 15
                i += 14;
                result_list.Add(GetGun(7, 16, 0, res, i)); // пистолет 16
                i += 14;
                result_list.Add(GetGun(7, 17, 1, res, i)); // пистолет 17
                i += 14;
                result_list.Add(GetGun(7, 18, 1, res, i)); // пистолет 18
                i += 14;
                result_list.Add(GetGun(7, 19, 1, res, i)); // пистолет 19
                i += 14;
                result_list.Add(GetGun(7, 20, 1, res, i)); // пистолет 20
                i += 14;
                result_list.Add(GetGun(8, 21, 0, res, i)); // пистолет 21
                i += 14;
                result_list.Add(GetGun(8, 22, 0, res, i)); // пистолет 22
                i += 14;
                result_list.Add(GetGun(8, 23, 0, res, i)); // пистолет 23
                i += 14;
                result_list.Add(GetGun(8, 24, 0, res, i)); // пистолет 24
                i += 14;
                result_list.Add(GetGun(8, 25, 1, res, i)); // пистолет 25
                i += 14;
                result_list.Add(GetGun(8, 26, 1, res, i)); // пистолет 26
                i += 14;
                result_list.Add(GetGun(8, 27, 1, res, i)); // пистолет 27
                i += 14;
                result_list.Add(GetGun(8, 28, 1, res, i)); // пистолет 28
                i += 14;
                result_list.Add(GetGun(9, 29, 0, res, i)); // пистолет 29

                return result_list;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода ReadTagOPCOfGun()").SaveError(e);
                return null;
            }
        }
        /// <summary>
        /// Прочесть теги наливных стояков
        /// </summary>
        /// <returns></returns>
        public List<DIORisers> ReadTagOPCOfDIORisers()
        {
            try
            {
                //Console.WriteLine("TS.C1.Counter - start >");
                Opc.Da.Server server = null;
                OpcCom.Factory fact = new OpcCom.Factory();
                server = new Opc.Da.Server(fact, null);

                server.Connect(url, new Opc.ConnectData(new System.Net.NetworkCredential()));

                //
                Opc.Da.Subscription group;
                Opc.Da.SubscriptionState groupState = new Opc.Da.SubscriptionState();
                groupState.Name = "DIORisers";
                groupState.Active = true;
                group = (Opc.Da.Subscription)server.CreateSubscription(groupState);

                //добавление айтемов в группу
                Opc.Da.Item[] items = new Opc.Da.Item[3*12];
                int i = 0;
                AddDIORisers(ref items, ref i, 1);
                AddDIORisers(ref items, ref i, 2);
                AddDIORisers(ref items, ref i, 3);

                items = group.AddItems(items);

                ItemValueResult[] res = group.Read(items);

                List<DIORisers> list_result = new List<DIORisers>();
                i = 0;
                list_result.Add(GetDIORisers(1, res, i));
                i += 12;
                list_result.Add(GetDIORisers(2, res, i));
                i += 12;
                list_result.Add(GetDIORisers(3, res, i));
                return list_result;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода ReadTagOPCOfDIORisers()").SaveError(e);
                return null;
            }
        }

        public List<Risers> ReadTagOPCOfRisers()
        {
            try
            {
                //Console.WriteLine("TS.C1.Counter - start >");
                Opc.Da.Server server = null;
                OpcCom.Factory fact = new OpcCom.Factory();
                server = new Opc.Da.Server(fact, null);

                server.Connect(url, new Opc.ConnectData(new System.Net.NetworkCredential()));

                //
                Opc.Da.Subscription group;
                Opc.Da.SubscriptionState groupState = new Opc.Da.SubscriptionState();
                groupState.Name = "Risers";
                groupState.Active = true;
                group = (Opc.Da.Subscription)server.CreateSubscription(groupState);

                //добавление айтемов в группу
                Opc.Da.Item[] items = new Opc.Da.Item[3*10];
                int i = 0;
                AddRisers(ref items, ref i, 1);
                AddRisers(ref items, ref i, 2);
                AddRisers(ref items, ref i, 3);

                items = group.AddItems(items);

                ItemValueResult[] res = group.Read(items);

                List<Risers> list_result = new List<Risers>();
                i = 0;
                list_result.Add(GetRisers(1, res, i));
                i += 10;
                list_result.Add(GetRisers(2, res, i));
                i += 10;
                list_result.Add(GetRisers(3, res, i));
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
