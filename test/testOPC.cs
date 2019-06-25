using ClientOPCTRK;
using EFAZS.Concrete;
using EFAZS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MessageLog;

namespace test
{
    public class testOPC
    {
        public testOPC() {

        }

        public void Test_ClientTRK_ReadTagOPC() {
            //ClientTRK client = new ClientTRK();
            //TRK list = client.ReadTagOPC();

            //Console.WriteLine("list.cards.Count() - {0}", list.cards.Count());
            //Console.WriteLine("list.guns.Count() - {0}", list.guns.Count());
            //Console.WriteLine("online - - {0}", list.guns[0].online);

        }

        public void Test_ClientTRK_ReadTagsOPSOfTank() {
            ClientTRK client = new ClientTRK();

            Tank tank = client.ReadTagsOPSOfTank("B2");

            Console.WriteLine("tank.num_tank - {0}", tank.num_tank);
            Console.WriteLine("tank.level - {0}", tank.level);
            Console.WriteLine("tank.mass - {0}", tank.mass);
            Console.WriteLine("tank.temp - {0}", tank.temp);
            Console.WriteLine("tank.volume - {0}", tank.volume);
            Console.WriteLine("tank.volume - {0}", tank.dens);

        }

        public void Test_ClientTRK_ReadTagsOPSOfRFID() {
            try
            {
                ClientTRK client = new ClientTRK();

                List<RFID> list = client.ReadTagsOPSOfRFID(true);

                if (list != null)
                {
                    foreach (RFID rfid in list)
                    {
                        Console.WriteLine("rfid.num_tank - {0} ************************************", rfid.num_trk);
                        Console.WriteLine("rfid.side - {0}", rfid.side);
                        Console.WriteLine("rfid.online - {0}", rfid.online);
                        Console.WriteLine("rfid.ready - {0}", rfid.ready);
                        Console.WriteLine("rfid.status - {0}", rfid.status);
                        Console.WriteLine("rfid.hi - {0}", rfid.hi);
                        Console.WriteLine("rfid.lo - {0}", rfid.lo);
                        if (rfid.card != null)
                        {
                            Console.WriteLine("rfid.card - {0}", rfid.card);
                            Console.WriteLine("rfid.card.Id - {0}", rfid.card.Id);
                            Console.WriteLine("rfid.card.Name - {0}", rfid.card.Name);

                        }
                        Console.WriteLine("--------------------------------------");

                    }
                }
                else
                {
                    Console.WriteLine("list = null");
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }

        public void Test_ClientTRK_ReadTagsOPSOfRFIDSaveDB() {
            try
            {
                ClientTRK client = new ClientTRK();
                EFOPC_RFID ef_opc_rfid = new EFOPC_RFID();

                List<RFID> list = client.ReadTagsOPSOfRFID(true);

                if (list != null)
                {

                    foreach (RFID rfid in list)
                    {
                        Console.WriteLine("rfid.num_trk - {0}", rfid.num_trk);
                        Console.WriteLine("rfid.side - {0}", rfid.side);
                        Console.WriteLine("rfid.lo - {0}", rfid.lo);
                        Console.WriteLine("rfid.hi - {0}", rfid.hi);

                        if (rfid.hi != null && rfid.lo != null && rfid.hi > 0 && rfid.lo > 0)
                        {
                            String.Format("Сервис TRKServices - Считана RFID-Карта ТРК={0}, сторона={1}, id_card={2}, hi={3}, lo={4}", rfid.num_trk, rfid.side, rfid.card != null ? (int?)rfid.card.Id : null, rfid.hi, rfid.lo).SaveInformation();
                            bool side = rfid.side == 0 ? false : true;
                            OPC_RFID rfid_old = ef_opc_rfid.OPC_RFID.Where(o => o.id_hi == (int)rfid.hi && o.id_lo == rfid.lo && o.side == side).OrderByDescending(o => o.id).FirstOrDefault();
                            if (rfid_old == null)
                            {
                                int res = ef_opc_rfid.AddOPC_RFID(rfid.num_trk, rfid.side == 0 ? false : true, rfid.card != null ? (int?)rfid.card.Id : null, (int)rfid.hi, (int)rfid.lo);
                                String.Format("Сервис TRKServices - добавлена новая RFID-Карта ТРК={0}, сторона={1}, id_card={2}, hi={3}, lo={4} - id строки - {5}", rfid.num_trk, rfid.side, rfid.card != null ? (int?)rfid.card.Id : null, rfid.hi, rfid.lo, res).SaveInformation();
                            }
                        }
                    }
                }
                else {
                    String.Format("Список считаных RFID-карт = null").SaveWarning();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }

        public void Test_ClientTRK_ReadTagOPCOfGun()
        {
            try
            {
                ClientTRK client = new ClientTRK();

                List<Gun> list = client.ReadTagOPCOfGun();
                if (list == null) {
                    Console.WriteLine("List<Gun> list =null");
                    return;
                }
                foreach (Gun gun in list)
                {
                    Console.WriteLine("gun.num_tank - {0}", gun.num_trk);
                    Console.WriteLine("gun.side - {0}", gun.side);
                    Console.WriteLine("gun.num_gun - {0}", gun.num_gun);
                    Console.WriteLine("gun.current_volume - {0}", gun.current_volume);
                    Console.WriteLine("gun.density - {0}", gun.density);
                    Console.WriteLine("gun.last_out_volume - {0}", gun.last_out_volume);
                    Console.WriteLine("gun.online - {0}", gun.online);
                    Console.WriteLine("gun.passage - {0}", gun.passage);
                    Console.WriteLine("gun.price_to_write - {0}", gun.price_to_write);
                    Console.WriteLine("gun.start - {0}", gun.start);
                    Console.WriteLine("gun.state - {0}", gun.state);
                    Console.WriteLine("gun.stop - {0}", gun.stop);
                    Console.WriteLine("gun.taken - {0}", gun.taken);
                    Console.WriteLine("gun.total_volume - {0}", gun.total_volume);
                    Console.WriteLine("gun.status - {0}", gun.status);
                    Console.WriteLine("gun.volume_to_write - {0}", gun.volume_to_write);
                    Console.WriteLine("gun.write_price - {0}", gun.write_price);
                    Console.WriteLine("gun.type_fuel - {0}", gun.type_fuel);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }

        public void Test_ClientTRK_ReadTagOPCOfDIORisers()
        {
            try
            {
                ClientTRK client = new ClientTRK();

                List<DIORisers> list = client.ReadTagOPCOfDIORisers();
                if (list == null)
                {
                    Console.WriteLine("List<DIORisers> list =null");
                    return;
                }
                foreach (DIORisers riser in list)
                {
                    Console.WriteLine("riser.Counter - {0}", riser.Counter);
                    Console.WriteLine("riser.CounterResetable - {0}", riser.CounterResetable);
                    Console.WriteLine("riser.CountOn - {0}", riser.CountOn);
                    Console.WriteLine("riser.Error - {0}", riser.Error);
                    Console.WriteLine("riser.Flow - {0}", riser.Flow);
                    Console.WriteLine("riser.Flow2 - {0}", riser.Flow2);
                    Console.WriteLine("riser.Freq - {0}", riser.Freq);
                    Console.WriteLine("riser.PiontsCount - {0}", riser.PiontsCount);
                    Console.WriteLine("riser.Status - {0}", riser.Status);
                    Console.WriteLine("riser.Temp - {0}", riser.Temp);
                    Console.WriteLine("riser.TimerLiveOn - {0}", riser.TimerLiveOn);
                    Console.WriteLine("riser.TimerOn - {0}", riser.TimerOn);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }

        public void Test_ClientTRK_ReadTagOPCOfRisers()
        {
            try
            {
                ClientTRK client = new ClientTRK();

                List<Risers> list = client.ReadTagOPCOfRisers();
                if (list == null)
                {
                    Console.WriteLine("List<Risers> list =null");
                    return;
                }
                foreach (Risers riser in list)
                {
                    Console.WriteLine("riser.door - {0}", riser.door);
                    Console.WriteLine("riser.power - {0}", riser.power);
                    Console.WriteLine("riser.flg_kv1 - {0}", riser.flg_kv1);
                    Console.WriteLine("riser.flg_kv2 - {0}", riser.flg_kv2);
                    Console.WriteLine("riser.inp_km - {0}", riser.inp_km);
                    Console.WriteLine("riser.inp_kvq1 - {0}", riser.inp_kvq1);
                    Console.WriteLine("riser.inp_kvq2 - {0}", riser.inp_kvq2);
                    Console.WriteLine("riser.inp_sa2 - {0}", riser.inp_sa2);
                    Console.WriteLine("riser.out_kv1 - {0}", riser.out_kv1);
                    Console.WriteLine("riser.out_kv2 - {0}", riser.out_kv2);
                    Console.WriteLine("riser.TScut - {0}", riser.TScut);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }

        public void Test_ClientTRK_ReadTagOPCOfRisersOfNum()
        {
            try
            {
                ClientTRK client = new ClientTRK();

                Risers ris = client.ReadTagOPCOfRisers(1);
                if (ris == null)
                {
                    Console.WriteLine("Risers ris =null");
                    return;
                }

                Console.WriteLine("riser.door - {0}", ris.door);
                Console.WriteLine("riser.power - {0}", ris.power);
                Console.WriteLine("riser.flg_kv1 - {0}", ris.flg_kv1);
                Console.WriteLine("riser.flg_kv2 - {0}", ris.flg_kv2);
                Console.WriteLine("riser.inp_km - {0}", ris.inp_km);
                Console.WriteLine("riser.inp_kvq1 - {0}", ris.inp_kvq1);
                Console.WriteLine("riser.inp_kvq2 - {0}", ris.inp_kvq2);
                Console.WriteLine("riser.inp_sa2 - {0}", ris.inp_sa2);
                Console.WriteLine("riser.out_kv1 - {0}", ris.out_kv1);
                Console.WriteLine("riser.out_kv2 - {0}", ris.out_kv2);
                Console.WriteLine("riser.TScut - {0}", ris.TScut);
                
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }

        public void Test_ClientTRK_WriteTagsGun()
        {
            try
            {
                ClientTRK client = new ClientTRK();

                bool res_p =client.WriteTagsGunPassage(11,true);
                Console.WriteLine("set Passage - {0}", res_p);
                bool res_v =client.WriteTagsGunVolume(11,2*100);
                Console.WriteLine("set Volume - {0}", res_v);
                bool res_s =client.WriteTagsGunStart(11,true);
                Console.WriteLine("set Start - {0}", res_s);
                int? res_stat = client.ReadTagsGunStatus(11);
                Console.WriteLine("Status TRK - {0}", res_stat);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }

        public void Test_ClientTRK_IssueFuelTRK()
        {
            try
            {
                ClientTRK client = new ClientTRK();

                int res = client.IssueFuelTRK(11, true, 2*100);
                Console.WriteLine("res - {0}", res);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }

        public void Test_ClientTRK_ReadAllTagOPC()
        {
            try
            {
                ClientTRK client = new ClientTRK();

                TagsOPC all = client.ReadAllTagOPC();
                if (all == null)
                {
                    Console.WriteLine("TagsOPC all  = null");
                    return;
                }

                foreach (RFID rfid in all.rfids)
                {
                    Console.WriteLine("rfid.num_trk - {0} ************************************", rfid.num_trk);
                    Console.WriteLine("rfid.side - {0}", rfid.side);
                    Console.WriteLine("rfid.online - {0}", rfid.online);
                    Console.WriteLine("rfid.ready - {0}", rfid.ready);
                    Console.WriteLine("rfid.status - {0}", rfid.status);
                    Console.WriteLine("rfid.hi - {0}", rfid.hi);
                    Console.WriteLine("rfid.lo - {0}", rfid.lo);
                    if (rfid.card != null)
                    {
                        Console.WriteLine("rfid.card - {0}", rfid.card);
                        Console.WriteLine("rfid.card.Id - {0}", rfid.card.Id);
                        Console.WriteLine("rfid.card.Name - {0}", rfid.card.Name);

                    }
                    Console.WriteLine("--------------------------------------");

                }

                foreach (Gun gun in all.guns)
                {
                    Console.WriteLine("gun.num_tank - {0}", gun.num_trk);
                    Console.WriteLine("gun.side - {0}", gun.side);
                    Console.WriteLine("gun.num_gun - {0}", gun.num_gun);
                    Console.WriteLine("gun.current_volume - {0}", gun.current_volume);
                    Console.WriteLine("gun.density - {0}", gun.density);
                    Console.WriteLine("gun.last_out_volume - {0}", gun.last_out_volume);
                    Console.WriteLine("gun.online - {0}", gun.online);
                    Console.WriteLine("gun.passage - {0}", gun.passage);
                    Console.WriteLine("gun.price_to_write - {0}", gun.price_to_write);
                    Console.WriteLine("gun.start - {0}", gun.start);
                    Console.WriteLine("gun.state - {0}", gun.state);
                    Console.WriteLine("gun.stop - {0}", gun.stop);
                    Console.WriteLine("gun.taken - {0}", gun.taken);
                    Console.WriteLine("gun.total_volume - {0}", gun.total_volume);
                    Console.WriteLine("gun.status - {0}", gun.status);
                    Console.WriteLine("gun.volume_to_write - {0}", gun.volume_to_write);
                    Console.WriteLine("gun.write_price - {0}", gun.write_price);
                    Console.WriteLine("gun.type_fuel - {0}", gun.type_fuel);
                }

                foreach (Risers riser in all.risers)
                {
                    Console.WriteLine("riser.door - {0}", riser.door);
                    Console.WriteLine("riser.power - {0}", riser.power);
                    Console.WriteLine("riser.flg_kv1 - {0}", riser.flg_kv1);
                    Console.WriteLine("riser.flg_kv2 - {0}", riser.flg_kv2);
                    Console.WriteLine("riser.inp_km - {0}", riser.inp_km);
                    Console.WriteLine("riser.inp_kvq1 - {0}", riser.inp_kvq1);
                    Console.WriteLine("riser.inp_kvq2 - {0}", riser.inp_kvq2);
                    Console.WriteLine("riser.inp_sa2 - {0}", riser.inp_sa2);
                    Console.WriteLine("riser.out_kv1 - {0}", riser.out_kv1);
                    Console.WriteLine("riser.out_kv2 - {0}", riser.out_kv2);
                    Console.WriteLine("riser.TScut - {0}", riser.TScut);
                }


            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }

        public int Test_ClientTRK_addCounters()
        {
            int res = 0;
            ClientTRK client = new ClientTRK();
            EFGunsCnts ef_gc = new EFGunsCnts();

            List<Gun> guns = client.ReadTagOPCOfGun();
            if (guns != null)
            {
                EFUsersActions efua = new EFUsersActions();
                UsersActions user_action = efua.GetCurrentUsersActions();
                if (user_action != null)
                {
                    GunsCnts gc = new GunsCnts();
                    gc.ID = 0;
                    gc.Operator = user_action.UserName;
                    gc.SmenaID = user_action.SessionID;
                    gc.TimeStamp = DateTime.Now;
                    foreach (Gun g in guns)
                    {
                        switch (g.num_gun)
                        {
                            case 1: gc.C1_1 = (int?)g.total_volume; break;
                            case 2: gc.C1_2 = (int?)g.total_volume; break;
                            case 3: gc.C2_1 = (int?)g.total_volume; break;
                            case 4: gc.C2_2 = (int?)g.total_volume; break;
                            case 5: gc.C3_1 = (int?)g.total_volume; break;
                            case 6: gc.C3_2 = (int?)g.total_volume; break;
                            case 7: gc.C4_1 = (int?)g.total_volume; break;
                            case 8: gc.C4_2 = (int?)g.total_volume; break;
                            case 9: gc.C5_1 = (int?)g.total_volume; break;
                            case 10: gc.C5_2 = (int?)g.total_volume; break;
                            case 11: gc.C6_1 = (int?)g.total_volume; break;
                            case 12: gc.C6_2 = (int?)g.total_volume; break;
                            case 13: gc.C7_1 = (int?)g.total_volume; break;
                            case 14: gc.C7_2 = (int?)g.total_volume; break;
                            case 15: gc.C7_3 = (int?)g.total_volume; break;
                            case 16: gc.C7_4 = (int?)g.total_volume; break;
                            case 17: gc.C7_5 = (int?)g.total_volume; break;
                            case 18: gc.C7_6 = (int?)g.total_volume; break;
                            case 19: gc.C7_7 = (int?)g.total_volume; break;
                            case 20: gc.C7_8 = (int?)g.total_volume; break;
                            case 21: gc.C8_1 = (int?)g.total_volume; break;
                            case 22: gc.C8_2 = (int?)g.total_volume; break;
                            case 23: gc.C8_3 = (int?)g.total_volume; break;
                            case 24: gc.C8_4 = (int?)g.total_volume; break;
                            case 25: gc.C8_5 = (int?)g.total_volume; break;
                            case 26: gc.C8_6 = (int?)g.total_volume; break;
                            case 27: gc.C8_7 = (int?)g.total_volume; break;
                            case 28: gc.C8_8 = (int?)g.total_volume; break;
                            case 29: gc.C9_1 = (int?)g.total_volume; break;
                        }
                    }
                    ef_gc.Add(gc);
                    res = ef_gc.Save();
                }
            }
            return res;
        }

    }
}
