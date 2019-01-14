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
                    Console.WriteLine("gun.Counter - {0}", riser.Counter);
                    Console.WriteLine("gun.CounterResetable - {0}", riser.CounterResetable);
                    Console.WriteLine("gun.CountOn - {0}", riser.CountOn);
                    Console.WriteLine("gun.Error - {0}", riser.Error);
                    Console.WriteLine("gun.Flow - {0}", riser.Flow);
                    Console.WriteLine("gun.Flow2 - {0}", riser.Flow2);
                    Console.WriteLine("gun.Freq - {0}", riser.Freq);
                    Console.WriteLine("gun.PiontsCount - {0}", riser.PiontsCount);
                    Console.WriteLine("gun.Status - {0}", riser.Status);
                    Console.WriteLine("gun.Temp - {0}", riser.Temp);
                    Console.WriteLine("gun.TimerLiveOn - {0}", riser.TimerLiveOn);
                    Console.WriteLine("gun.TimerOn - {0}", riser.TimerOn);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }

    }
}
