using EFAZS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAZS.Abstract
{
    public interface ICat_OZM_GSM
    {
        IQueryable<Cat_OZM_GSM> Cat_OZM_GSM { get; }
        IQueryable<Cat_OZM_GSM> GetCat_OZM_GSM();
        Cat_OZM_GSM GetCat_OZM_GSM(string id);
    }
}
