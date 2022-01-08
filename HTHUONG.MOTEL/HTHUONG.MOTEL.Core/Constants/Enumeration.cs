using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HTHUONG.MOTEL.Core.Constants
{
    public class Enumeration
    {
        /// <summary>
        /// Kiểu lọc
        /// </summary>
        public enum FilterType
        {
            Equal = 0,
            Contain = 1,
            NotEqual = 2,
            GreaterThan = 3,
            LessThan = 4,
            GreaterThanEqual = 5,
            LessThanEqual = 6,
            IsNotEmpty = 7,
            NotContain = 8,
            HasFilledOutForm = 9,
            HasNotFilledOutForm = 10,
            Between = 11,
            IsAnyOf = 12,
            IsNoneOf = 13,
            IsEmpty = 14,
            EqualToAnyOf = 15,
            NotEqualToAnyOf = 16,
            ContainAnyOf = 17,
            NotContainAnyOf = 18,
            StartWith = 19,
            EndWith = 20,
            HasViewed = 21,
            HasNotViewed = 22,
            CTAClicked = 23,
            CTANotClicked = 24,
            EmailSent = 25,
            EmailBounced = 26,
            EmailDelivered = 27,
            EmailOpened = 28,
            EmailClicked = 29,
            EmailSpamReport = 30,
            EmailDropped = 31,
            HasImported = 32,
            HasNotImported = 33,
            EqualIn = 34,   //Mới chỉ cho Number
            HasFilterFamily = 35,
            HasNotFilterFamily = 36
        }

        public enum UserType
        {
            User = 0,
            Host = 1,
        }

        public enum RoomStatus
        {
            Empty = 0,
            Process = 1,
            Full = 2
        }
    }
}
