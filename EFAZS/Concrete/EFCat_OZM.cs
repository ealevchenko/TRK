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
    public class EFCat_OZM : ICat_OZM
    {

        protected EFDbContext context = new EFDbContext();



        public IQueryable<Cat_OZM> Cat_OZM
        {
            get { return context.Cat_OZM; }
        }

        public IQueryable<Cat_OZM> GetCat_OZM()
        {
            try
            {
                return Cat_OZM;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetCat_OZM()").SaveError(e);
                return null;
            }
        }

        public Cat_OZM GetCat_OZM(string id)
        {
            try
            {
                return Cat_OZM.Where(c => c.id == id).FirstOrDefault();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetCat_OZM(id={0})", id).SaveError(e);
                return null;
            }
        }
    }
}
