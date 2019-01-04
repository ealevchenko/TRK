using EFAZS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAZS.Abstract
{
    public interface ICat_Depots
    {
        IQueryable<Cat_Depots> Cat_Depots { get; }
        IQueryable<Cat_Depots> GetCat_Depots();
        Cat_Depots GetCat_Depots(string id);
    }
}
