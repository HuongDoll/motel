using HTHUONG.MOTEL.Core.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HTHUONG.MOTEL.App.BL
{
    public interface IUserBL
    {
        Task<object> Login(LoginDTO loginDTO);

        Task<string> AddAsync(Core.Entities.UserApp user);

    }
}
