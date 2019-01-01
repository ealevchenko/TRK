using ClientOPCTRK;
using ClientSAPTRK;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace test
{
    class Program
    {
        //public static string Select(string url, string metod, string accept)
        //{
        //    try
        //    {
        //        //String.Format("Выполняем запрос к WebAPI, url:{0}, api_comand {1}, metod {2}, accept {3}", url, api_comand, metod, accept).WriteInformation(eventID);
        //        HttpWebRequest request = (System.Net.HttpWebRequest)System.Net.WebRequest.Create(url);
        //        request.Method = metod;
        //        request.PreAuthenticate = true;
        //        request.Credentials = CredentialCache.DefaultCredentials;
        //        request.Accept = accept;
        //        try
        //        {
        //            using (System.Net.WebResponse response = request.GetResponse())
        //            {
        //                try
        //                {
        //                    using (System.IO.StreamReader rd = new System.IO.StreamReader(response.GetResponseStream()))
        //                    {
        //                        return rd.ReadToEnd();
        //                    }
        //                }
        //                catch (Exception e)
        //                {
        //                    Console.WriteLine("Ошибка создания StreamReader ответа, метод {0}, accept {1}, e {2}", metod, accept, e);
        //                    return null;
        //                }
        //            }
        //        }
        //        catch (Exception e)
        //        {
        //            Console.WriteLine("Ошибка получения ответа WebResponse, метод {0}, accept {1}, e {2}", metod, accept, e);
        //            return null;
        //        }
        //    }
        //    catch (Exception e)
        //    {
        //        Console.WriteLine("Ошибка выполнения метода Select(metod={0}, accept={1}, e {2}", metod, accept, e);
        //        return null;
        //    }
        //}

        //public static void GetReserv()
        //{
        //    string login = "mii_oil";
        //    string pass = "Start_123";
        //    string num = "3052703";
        //    string pos = "1";
        //    string message = "https://krrzdmm1.europe.mittalco.com:50001/XMII/Runner" +
        //                    "?Transaction=Oil45/trx/SelectRESB.trx" +
        //                    "&RSNUM=" + num +
        //                    "&RSPOS=" + pos +
        //                    "&OutputParameter=RSLT" +
        //                    "&XacuteLoginName=" + login +
        //                    "&XacuteLoginPassword=" + pass;
        //    //                //"&Content-Type=application/json";
        //    string res = Select(message, "GET", "text/xml");
        //    Console.WriteLine("Result text/xml = {0}", res);
        //    XDocument doc = XDocument.Parse(res);

        //       //XDocument doc = XDocument.Load(@"test.xml");


        //    XElement element = doc.Element("Rowsets").Element("Rowset").Elements("Row").FirstOrDefault();

        //    Responce_Reserv reserv = new Responce_Reserv()
        //    {
        //        RSNUM = (string)element.Element("RSNUM"),
        //        RSPOS = (string)element.Element("RSPOS"),
        //        MATNR = (string)element.Element("MATNR"),
        //        WERKS = (string)element.Element("WERKS"),
        //        LGORT = (string)element.Element("LGORT"),
        //        UMLGO = (string)element.Element("UMLGO"),
        //        UMWRK = (string)element.Element("UMWRK"),
        //        BDMNG = (string)element.Element("BDMNG"),
        //        ENMNG = (string)element.Element("ENMNG"),
        //        LGOBE = (string)element.Element("LGOBE"),
        //        MEINS = (string)element.Element("MEINS"),
        //    };

        //    Console.WriteLine("reserv = {0}", reserv);
        //    Console.WriteLine("RSNUM = {0}", reserv.RSNUM);
        //    Console.WriteLine("RSPOS = {0}", reserv.RSPOS);
        //    Console.WriteLine("MATNR = {0}", reserv.MATNR);
        //    Console.WriteLine("WERKS = {0}", reserv.WERKS);
        //    Console.WriteLine("LGORT = {0}", reserv.LGORT);
        //    Console.WriteLine("UMLGO = {0}", reserv.UMLGO);
        //    Console.WriteLine("UMWRK = {0}", reserv.UMWRK);
        //    Console.WriteLine("BDMNG = {0}", reserv.BDMNG);
        //    Console.WriteLine("ENMNG = {0}", reserv.ENMNG);
        //    Console.WriteLine("LGOBE = {0}", reserv.LGOBE);

        //    Console.WriteLine("element = {0}", element);
        //}
        

        static void Main(string[] args)
        {
            try
            {
                ClientSAP sap = new ClientSAP();

                Reservation reserv = sap.GetReservation("3052703", "1");

                Console.WriteLine("RSNUM = {0}", reserv.RSNUM);
                Console.WriteLine("RSPOS = {0}", reserv.RSPOS);
                Console.WriteLine("MATNR = {0}", reserv.MATNR);
                Console.WriteLine("WERKS = {0}", reserv.WERKS);
                Console.WriteLine("LGORT = {0}", reserv.LGORT);
                Console.WriteLine("UMLGO = {0}", reserv.UMLGO);
                Console.WriteLine("UMWRK = {0}", reserv.UMWRK);
                Console.WriteLine("BDMNG = {0}", reserv.BDMNG);
                Console.WriteLine("ENMNG = {0}", reserv.ENMNG);
                Console.WriteLine("LGOBE = {0}", reserv.LGOBE);

                List<Supply> list_sypply = sap.GetSupply("8000000020");

                Console.WriteLine("list_post = {0}", list_sypply.Count());

                foreach (Supply p in list_sypply)
                {
                    Console.WriteLine("vbeln = {0}", p.vbeln);
                    Console.WriteLine("posnr = {0}", p.posnr);
                    Console.WriteLine("MATNR = {0}", p.MATNR);
                    Console.WriteLine("WERKS = {0}", p.WERKS);
                    Console.WriteLine("LGORT = {0}", p.LGORT);
                    Console.WriteLine("KUNNR = {0}", p.KUNNR);
                    Console.WriteLine("LFIMG = {0}", p.LFIMG);
                    Console.WriteLine("LGOBE = {0}", p.LGOBE);
                    Console.WriteLine("MEINS = {0}", p.MEINS);

                }


                //ClientTRK client = new ClientTRK();
                //TRK list = client.ReadTagOPC();



                //Console.WriteLine("list.cards.Count() - {0}", list.cards.Count());
                //Console.WriteLine("list.guns.Count() - {0}", list.guns.Count());
                //Console.WriteLine("online - - {0}", list.guns[0].online);

                Console.ReadKey();

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            Console.ReadKey();
        }
    }
}
