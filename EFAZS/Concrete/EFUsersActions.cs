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
    public class EFUsersActions : IUsersActions
    {

        protected EFDbContext context = new EFDbContext();

        public IQueryable<UsersActions> UsersActions
        {
            get { return context.UsersActions; }
        }

        public IQueryable<UsersActions> GetUsersActions()
        {
            try
            {
                return UsersActions;
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetUsersActions()").SaveError(e);
                return null;
            }
        }

        public UsersActions GetCurrentUsersActions()
        {
            try
            {
                return UsersActions.Where(c => c.Action == "LogON").OrderByDescending(a =>a.TimeStmp).FirstOrDefault();
            }
            catch (Exception e)
            {
                String.Format("Ошибка выполнения метода GetCurrentUsersActions()").SaveError(e);
                return null;
            }
        }
    }
}
