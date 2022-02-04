using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HTHUONG.MOTEL.App.BL
{
    public interface IFileService
    {
        Task<Guid> InsertFileAsync(Core.Entities.File file);
    }
}
