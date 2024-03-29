﻿using EFAZS.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAZS.Abstract
{
    public interface IUsersActions
    {
        Database Database { get; }
        IQueryable<UsersActions> UsersActions { get; }
        IQueryable<UsersActions> GetUsersActions();
        UsersActions GetCurrentUsersActions();
    }
}
