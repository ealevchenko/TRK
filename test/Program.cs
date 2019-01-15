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

        static void Main(string[] args)
        {
            try
            {
                //int hi = 29550;
                //int lo = 56833;

                //byte[] data_hi = BitConverter.GetBytes(hi);
                //byte[] data_lo = BitConverter.GetBytes(lo);

                //if (data_hi != null && data_lo != null && data_hi.Count() >= 2 && data_lo.Count() >= 2)
                //{
                //    int z1 = data_hi[1];
                //    int z2 = (data_hi[0] * 256) + data_lo[1];
                //}



                #region TEST OPC

                testOPC test_opc = new testOPC();
                //test_opc.Test_ClientTRK_ReadTagOPC();
                //test_opc.Test_ClientTRK_ReadTagsOPSOfTank();
                //test_opc.Test_ClientTRK_ReadTagsOPSOfRFID();
                //test_opc.Test_ClientTRK_ReadTagsOPSOfRFIDSaveDB();
                //test_opc.Test_ClientTRK_ReadTagOPCOfGun();
                test_opc.Test_ClientTRK_ReadTagOPCOfDIORisers();
                test_opc.Test_ClientTRK_ReadTagOPCOfRisers();
                #endregion

                #region TEST SAP
                testSAP test_sap = new testSAP();
                //test_sap.Test_ClientSAP_GetReservation();
                //test_sap.Test_ClientSAP_GetSupply();
                #endregion

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            Console.WriteLine("End press and key");
            Console.ReadKey();
        }
    }
}
