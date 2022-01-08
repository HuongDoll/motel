using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HTHUONG.MOTEL.Core.Constants
{
    public static class DevMessage
    {
        /// <summary>
        /// Thiếu trường x-company-id trong request header
        /// </summary>
        public const string LACK_OF_COMPANY_ID = "Lack of x-company-id in request header.";

        /// <summary>
        /// Thiếu trường x-full-name trong request header
        /// </summary>
        public const string LACK_OF_FULL_NAME = "Lack of x-full-name in request header.";

        /// <summary>
        /// Lỗi kết nối tới database
        /// </summary>
        public const string CONNECT_DATABASE_FAILED = "Connect to database failed.";

        /// <summary>
        /// Xóa bản ghi trong DB thất bại
        /// </summary>
        public const string DELETE_FAILED = "Could not delete the record(s) in database.";

        /// <summary>
        /// Bắt được một exception
        /// </summary>
        public const string EXCEPTION = "Catched an exception.";

        /// <summary>
        /// Dữ liệu đẩy lên trong request body không hợp lệ
        /// </summary>
        public const string INVALID_MODEL = "Model state values are invalid.";


        /// <summary>
        /// Định dạng file không hợp lệ
        /// </summary>
        public static string INVALID_FILE_FORMAT = "Invalid file format.";

        /// <summary>
        /// Dung lượng > Max size
        /// </summary>
        public const string ERROR_SIZE_FILE_TOO_MAX = "File size is too large.";


        /// <summary>
        /// File rỗng
        /// </summary>
        public const string ERROR_FILE_EMPTY = "File content is empty.";

        /// <summary>
        /// Dung lượng file lớn hơn 10MB
        /// </summary>
        public const string SIZE_FILE_TOO_MAX = "File size must not exceed 10MB.";

        /// <summary>
        /// Không thể kéo thả file khác vào ảnh
        /// </summary>
        public const string IMAGE_CANNOT_BECOME_PARENT = "Image can not become a parent.";

    }
}
