using ClientOPCTRK;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace test
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                ClientTRK client = new ClientTRK();
                TRK list = client.ReadTagOPC();



                Console.WriteLine("list.cards.Count() - {0}", list.cards.Count());
                Console.WriteLine("list.guns.Count() - {0}", list.guns.Count());
                Console.WriteLine("online - - {0}", list.guns[0].online);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            Console.ReadKey();
        }
    }
}
