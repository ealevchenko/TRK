using EFAZS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAZS.Abstract
{
    public interface ICat_Werks
    {
        IQueryable<Cat_Werks> Cat_Werks { get; }
        IQueryable<Cat_Werks> GetCat_Werks();
        Cat_Werks GetCat_Werks(string id);
    }
}
