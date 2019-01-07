using EFAZS.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAZS.Abstract
{
    public interface ISAP_Buffer
    {
        Database Database { get; }
        IQueryable<SAP_Buffer> SAP_Buffer { get; }
        IQueryable<SAP_Buffer> GetSAP_Buffer();
        SAP_Buffer GetSAP_Buffer(int id);
        int AddSAP_Buffer(DateTime start, 
            string LOGIN_R, 
            string N_BAK, 
            string OZM_BAK, 
            string OZM_TREB, 
            string FLAG_R, 
            string PLOTNOST, 
            string LOGIN_EXP, 
            string N_POST, 
            string TRANSP_FAKT, 
            string N_DEB, 
            string N_TREB, 
            string LGORT, 
            string WERKS);
        int CloseSAP_Buffer(DateTime close);
    }
}

