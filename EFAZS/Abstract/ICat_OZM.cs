using EFAZS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAZS.Abstract
{
    public interface ICat_OZM
    {
        IQueryable<Cat_OZM> Cat_OZM { get; }
        IQueryable<Cat_OZM> GetCat_OZM();
        Cat_OZM GetCat_OZM(string id);
    }
}
