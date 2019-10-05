using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TransferDC;

namespace test
{
    public class testTransfer
    {
        public testTransfer()
        {

        }


        public void Test_Transfer_DeliveryTanksToDC()
        {
            Transfer tr = new Transfer();
            int res = tr.DeliveryTanksToDC();
        }
        public void Test_Transfer_RemainsTanksToDC()
        {
            Transfer tr = new Transfer();
            int res = tr.RemainsTanksToDC();
        }
        public void Test_Transfer_ReceivingTanksToDC()
        {
            Transfer tr = new Transfer();
            int res = tr.ReceivingTanksToDC();
        }
        public void Test_Transfer_Daily_Accounting_Detali_ReportToDC()
        {
            Transfer tr = new Transfer();
            int res = tr.Daily_Accounting_Detali_ReportToDC();
        }
        public void Test_Transfer_Daily_Accounting_ReportToDC()
        {
            Transfer tr = new Transfer();
            int res = tr.Daily_Accounting_ReportToDC();
        }
    }
}
