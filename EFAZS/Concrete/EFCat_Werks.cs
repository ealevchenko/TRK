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
    public class EFCat_Werks : ICat_Werks
    {

        protected EFDbContext context = new EFDbContext();

        public IQueryable<Cat_Werks> Cat_Werks
        {
            get { return context.Cat_Werks; }
        }

        public IQueryable<Cat_Werks> GetCat_Werks()
        {
            try
            {
                return Cat_Werks;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetCat_Werks()").SaveError(e);
                return null;
            }
        }

        public Cat_Werks GetCat_Werks(string id)
        {
            try
            {
                return Cat_Werks.Where(c => c.id == id).FirstOrDefault();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetCat_Werks(id={0})", id).SaveError(e);
                return null;
            }
        }
    }
}
