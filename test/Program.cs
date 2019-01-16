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

        private static ulong? ArrUInt16ToULong(object val)
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
                return null;
            }
        }

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

                //ulong? result1;
                //ulong result2 =0;
                //UInt16[] test = new UInt16[] { 0, 16, 15730, 29245 };

                //result1 = ArrUInt16ToULong(test);

                //result2+=test[3];
                //result2+=(test[2] * (ulong)65536);
                //result2 += (test[1] * ((ulong)4294967296));
                //result2 += (test[0] * ((ulong)281474976710656));                
                

                #region TEST OPC

                testOPC test_opc = new testOPC();
                //test_opc.Test_ClientTRK_ReadTagOPC();
                //test_opc.Test_ClientTRK_ReadTagsOPSOfTank();
                //test_opc.Test_ClientTRK_ReadTagsOPSOfRFID();
                //test_opc.Test_ClientTRK_ReadTagsOPSOfRFIDSaveDB();
                //test_opc.Test_ClientTRK_ReadTagOPCOfGun();
                test_opc.Test_ClientTRK_ReadTagOPCOfDIORisers();
                //test_opc.Test_ClientTRK_ReadTagOPCOfRisers();
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
