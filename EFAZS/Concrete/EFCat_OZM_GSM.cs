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
    public class EFCat_OZM_GSM : ICat_OZM_GSM
    {

        protected EFDbContext context = new EFDbContext();



        public IQueryable<Cat_OZM_GSM> Cat_OZM_GSM
        {
            get { return context.Cat_OZM_GSM; }
        }

        public IQueryable<Cat_OZM_GSM> GetCat_OZM_GSM()
        {
            try
            {
                return Cat_OZM_GSM;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetCat_OZM_GSM()").SaveError(e);
                return null;
            }
        }

        public Cat_OZM_GSM GetCat_OZM_GSM(string id)
        {
            try
            {
                return Cat_OZM_GSM.Where(c => c.id == id).FirstOrDefault();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetCat_OZM_GSM(id={0})", id).SaveError(e);
                return null;
            }
        }
    }
}
