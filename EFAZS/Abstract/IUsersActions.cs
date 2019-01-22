using EFAZS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAZS.Abstract
{
    public interface IUsersActions
    {
        IQueryable<UsersActions> UsersActions { get; }
        IQueryable<UsersActions> GetUsersActions();
        UsersActions GetCurrentUsersActions();
    }
}
