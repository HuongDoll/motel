﻿using HTHUONG.MOTEL.App.BL;
using HTHUONG.MOTEL.App.BL.Room;
using HTHUONG.MOTEL.Core.Authentication;
using HTHUONG.MOTEL.Core.Repository.Room;
using HTHUONG.MOTEL.Core.Repository.User;
using HTHUONG.MOTEL.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HTHUONG.MOTEL.App.Utilities
{
    public static class ServiceCollectionExtensions
    {
        /// <summary>
        /// Thêm các lifetime services sử dụng cho dependency injection
        /// </summary>
        /// <param name="services">IServiceCollection</param>
        public static void AddLifetimeServices(this IServiceCollection services)
        {
            services.AddTransient<IDapperDatabaseContext, DapperDatabaseContext>();
            services.AddTransient<IDatabaseContextFactory, DatabaseContextFactory>();

            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IRoomRepository, RoomRepository>();

            services.AddTransient<IUserBL, UserBL>();
            services.AddTransient<IRoomBL, RoomBL>();

            services.AddSingleton<AuthenticationConfig>();
        }
    }
}
