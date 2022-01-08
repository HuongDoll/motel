using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HTHUONG.MOTEL.Core.Constants
{
    public static class UserMessage
    {
        /// <summary>
        /// Thiếu trường cần thiết trong header. Ví dụ: x-company-id, x-full-name
        /// </summary>
        public static string LACK_OF_HEADERS = "Có lỗi xảy ra.";

        /// <summary>
        /// Lỗi kết nối tới database
        /// </summary>
        public const string CONNECT_DATABASE_FAILED = "Có lỗi xảy ra.";

        /// <summary>
        /// Exception khi lấy dữ liệu
        /// </summary>
        public static string GET_EXCEPTION = "Lấy dữ liệu thất bại.";

        /// <summary>
        /// Exception khi thêm mới dữ liệu
        /// </summary>
        public static string CREATE_EXCEPTION = "Thêm mới thất bại.";

        /// <summary>
        /// Exception khi cập nhật dữ liệu
        /// </summary>
        public static string UPDATE_EXCEPTION = "Cập nhật thất bại.";

        /// <summary>
        /// Exception khi xóa dữ liệu
        /// </summary>
        public static string DELETE_EXCEPTION = "Xóa thất bại.";

        /// <summary>
        /// Dữ liệu đẩy lên không hợp lệ
        /// </summary>
        public static string INVALID_MODEL = "Dữ liệu truyền lên không hợp lệ.";

        /// <summary>
        /// Lỗi gửi mail
        /// </summary>
        public const string SEND_MAIL_EXCEPTION = "Lỗi khi gửi mail.";

        /// <summary>
        /// Định dạng file không hợp lệ
        /// </summary>
        public static string INVALID_FILE_FORMAT = "Định dạng file không hợp lệ.";

        /// <summary>
        /// Dung lượng > Max size
        /// </summary>
        public const string ERROR_SIZE_FILE_TOO_MAX = "Dung lượng vượt quá giới hạn cho phép.";

        /// <summary>
        /// File rỗng
        /// </summary>
        public const string ERROR_FILE_EMPTY = "File rỗng.";

        /// <summary>
        /// Dung lượng file lớn hơn 10MB
        /// </summary>
        public const string SIZE_FILE_TOO_MAX = "Dung lượng file lớn hơn 10MB.";

        /// <summary>
        /// Lỗi khi cố tình muốn đẩy ảnh/file/thư mục vào làm con của 1 ảnh khác
        /// </summary>
        public const string IMAGE_CANNOT_BECOME_PARENT = "Một ảnh không thể trở thành cha của ảnh/file/thư mục khác.";
    }
}
