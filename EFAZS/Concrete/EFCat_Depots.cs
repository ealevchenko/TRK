using EFAZS.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EFAZS.Entities;
using MessageLog;

namespace EFAZS.Concrete
{
    public class EFCat_Depots : ICat_Depots
    {

        protected EFDbContext context = new EFDbContext();



        public IQueryable<Cat_Depots> Cat_Depots
        {
            get { return context.Cat_Depots; }
        }

        public IQueryable<Cat_Depots> GetCat_Depots()
        {
            try
            {
                return Cat_Depots;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetCat_Depots()").SaveError(e);
                return null;
            }
        }

        public Cat_Depots GetCat_Depots(string id)
        {
            try
            {
                return Cat_Depots.Where(c => c.id == id).FirstOrDefault();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetCat_Depots(id={0})", id).SaveError(e);
                return null;
            }
        }
    }
}
