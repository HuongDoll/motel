using HTHUONG.MOTEL.App.BL;
using HTHUONG.MOTEL.Core.DTOs;
using HTHUONG.MOTEL.Core.Repository.User;
using HTHUONG.MOTEL.Core.Utils;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HTHUONG.MOTEL.App.Controllers
{
    public class UserController : BaseApiController
    {
        private readonly IUserBL _userBL;
        public UserController(IUserBL userBL)
        {
            _userBL = userBL;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO loginDTO)
        {
            try
            {
                var result = await _userBL.Login(loginDTO);
                if (result == null) return BadRequest();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(CommonFunction.GenerateGetExceptionErrorResult(HttpContext));
            }
        }

        [HttpPost]
        public async Task<IActionResult> InsertUser([FromBody] Core.Entities.UserApp user)
        {
            try
            {
                var createCompanyID = await _userBL.AddAsync(user);
                return Ok(createCompanyID);
            }
            catch (Exception ex)
            {
                return BadRequest(CommonFunction.GenerateCreateExceptionErrorResult(HttpContext));
            }
        }

    }
}
