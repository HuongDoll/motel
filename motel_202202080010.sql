﻿--
-- Script was generated by Devart dbForge Studio 2020 for MySQL, Version 9.0.338.0
-- Product home page: http://www.devart.com/dbforge/mysql/studio
-- Script date 2/8/2022 12:10:07 AM
-- Server version: 8.0.21
-- Client version: 4.1
--

-- 
-- Disable foreign keys
-- 
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

-- 
-- Set SQL mode
-- 
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 
-- Set character set the client will use to send SQL statements to the server
--
SET NAMES 'utf8';

--
-- Set default database
--
USE motel;

--
-- Drop table `bill`
--
DROP TABLE IF EXISTS bill;

--
-- Drop table `billdetail`
--
DROP TABLE IF EXISTS billdetail;

--
-- Drop table `comment`
--
DROP TABLE IF EXISTS comment;

--
-- Drop table `files`
--
DROP TABLE IF EXISTS files;

--
-- Drop table `history`
--
DROP TABLE IF EXISTS history;

--
-- Drop table `room`
--
DROP TABLE IF EXISTS room;

--
-- Drop table `userapp`
--
DROP TABLE IF EXISTS userapp;

--
-- Set default database
--
USE motel;

--
-- Create table `userapp`
--
CREATE TABLE userapp (
  UserID char(36) NOT NULL DEFAULT '',
  FullName varchar(255) DEFAULT NULL,
  UserName varchar(255) DEFAULT NULL,
  Password varchar(255) DEFAULT NULL,
  Email varchar(50) DEFAULT NULL,
  Phone varchar(20) DEFAULT NULL,
  UserType int DEFAULT NULL,
  IsDeleted bit(1) DEFAULT NULL,
  CreatedDate timestamp NULL DEFAULT NULL,
  ModifiedDate timestamp NULL DEFAULT NULL,
  CreatedBy varchar(255) DEFAULT NULL,
  ModifiedBy varchar(255) DEFAULT NULL,
  PRIMARY KEY (UserID)
)
ENGINE = INNODB,
AVG_ROW_LENGTH = 8192,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT = 'Lưu thông tin người dùng';

--
-- Create table `room`
--
CREATE TABLE room (
  RoomID char(36) NOT NULL DEFAULT '',
  Province varchar(255) DEFAULT NULL,
  District varchar(255) DEFAULT NULL,
  Ward varchar(255) DEFAULT NULL,
  Address longtext DEFAULT NULL,
  Area varchar(255) DEFAULT NULL,
  Price int DEFAULT NULL,
  Status int DEFAULT NULL,
  UserID char(36) DEFAULT NULL,
  HostID char(36) DEFAULT NULL,
  Content longtext DEFAULT NULL,
  PublishDate timestamp NULL DEFAULT NULL,
  IsDeleted bit(1) DEFAULT NULL,
  CreatedDate timestamp NULL DEFAULT NULL,
  ModifiedDate timestamp NULL DEFAULT NULL,
  CreatedBy varchar(255) DEFAULT NULL,
  ModifiedBy varchar(255) DEFAULT NULL,
  UrlThumbnail text DEFAULT NULL,
  PRIMARY KEY (RoomID)
)
ENGINE = INNODB,
AVG_ROW_LENGTH = 2340,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci;

--
-- Create table `history`
--
CREATE TABLE history (
  HistoryID char(36) NOT NULL DEFAULT '',
  UserID char(36) DEFAULT NULL,
  HostID char(36) DEFAULT NULL,
  RoomID char(36) DEFAULT NULL,
  TimeCheckOut timestamp NULL DEFAULT NULL,
  PriceRoom int DEFAULT NULL,
  IsDeleted bit(1) DEFAULT NULL,
  CreatedDate timestamp NULL DEFAULT NULL,
  ModifiedDate timestamp NULL DEFAULT NULL,
  CreatedBy varchar(255) DEFAULT NULL,
  ModifiedBy varchar(255) DEFAULT NULL,
  PRIMARY KEY (HistoryID)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci;

--
-- Create table `files`
--
CREATE TABLE files (
  FileID char(36) NOT NULL DEFAULT '',
  RoomID char(36) DEFAULT NULL,
  HostID char(36) DEFAULT NULL,
  UrlRaw text DEFAULT NULL,
  UrlMedium text DEFAULT NULL,
  IsDeleted bit(1) DEFAULT NULL,
  CreatedDate timestamp NULL DEFAULT NULL,
  ModifiedDate timestamp NULL DEFAULT NULL,
  CreatedBy varchar(255) DEFAULT NULL,
  ModifiedBy varchar(255) DEFAULT NULL,
  PRIMARY KEY (FileID)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci;

--
-- Create table `comment`
--
CREATE TABLE comment (
  CommentID char(36) NOT NULL DEFAULT '',
  RoomID char(36) DEFAULT NULL,
  UserID char(36) DEFAULT NULL,
  Content longtext DEFAULT NULL,
  Rate int DEFAULT NULL,
  IsDeleted bit(1) DEFAULT NULL,
  CreatedDate timestamp NULL DEFAULT NULL,
  ModifiedDate timestamp NULL DEFAULT NULL,
  CreatedBy varchar(255) DEFAULT NULL,
  ModifiedBy varchar(255) DEFAULT NULL,
  PRIMARY KEY (CommentID)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci;

--
-- Create table `billdetail`
--
CREATE TABLE billdetail (
  BillDetailID char(36) NOT NULL DEFAULT '',
  RoomID char(36) DEFAULT NULL,
  UserID char(36) DEFAULT NULL,
  PriceRoom int DEFAULT NULL,
  PriceElectric int DEFAULT NULL,
  PriceWater int DEFAULT NULL,
  PriceSevice int DEFAULT NULL,
  IsDeleted bit(1) DEFAULT NULL,
  CreatedDate timestamp NULL DEFAULT NULL,
  ModifiedDate timestamp NULL DEFAULT NULL,
  CreatedBy varchar(255) DEFAULT NULL,
  ModifiedBy varchar(255) DEFAULT NULL,
  PRIMARY KEY (BillDetailID)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci;

--
-- Create table `bill`
--
CREATE TABLE bill (
  BillID char(36) NOT NULL DEFAULT '',
  Status int DEFAULT NULL,
  UserID char(36) DEFAULT NULL,
  HostID char(36) DEFAULT NULL,
  IsDeleted bit(1) DEFAULT NULL,
  CreatedDate timestamp NULL DEFAULT NULL,
  ModifiedDate timestamp NULL DEFAULT NULL,
  CreatedBy varchar(255) DEFAULT NULL,
  ModifiedBy varchar(255) DEFAULT NULL,
  PriceRoom int DEFAULT NULL,
  PriceService int DEFAULT NULL,
  Description text DEFAULT NULL,
  PRIMARY KEY (BillID)
)
ENGINE = INNODB,
AVG_ROW_LENGTH = 8192,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci;

-- 
-- Dumping data for table userapp
--
INSERT INTO userapp VALUES
('4e70a228-f3d9-477f-a3c7-70123ce97842', 'Bui van minh', 'BVMINH', 'dn5VYVugHShaRu7ab2x1wR4aaQFM5Ud5tnq8s6om3O4=', 'buivanminh1309@gmail.com', '0858506789', 0, False, '2022-02-04 21:56:26', '2022-02-05 23:34:57', NULL, 'BVMINH'),
('6f63abea-5b6d-4fa8-b501-9bb2393fd80c', 'minh', 'Minh', '7uZ9RNrE0J6bu1rhUtIzqpsAOhdPRHxBvcHxdvE2HwA=', 'minh@gmail.com', '0973843806', 0, False, '2022-02-07 21:47:16', '2022-02-07 21:47:16', NULL, NULL);

-- 
-- Dumping data for table room
--
INSERT INTO room VALUES
('09748048-4840-4636-9216-aa775c8a895d', ' q', ' q', ' ', 'q', 'q', 0, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:43:51', False, '2022-02-07 22:43:51', '2022-02-07 22:43:53', NULL, NULL, '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_e27383ca-b7ad-4c82-83b3-e82bca0f6114_medium.jpg'),
('0e90dd1d-ace1-4e4f-a05d-c014f58d724f', ' 1', ' 1', ' ', '1', '1', 1, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:02:24', False, '2022-02-07 22:02:24', '2022-02-07 22:02:24', NULL, NULL, ''),
('2277f53d-64f4-472c-af60-8cac5082563d', ' ', ' ', ' ', '', '', 0, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:42:14', False, '2022-02-07 22:42:14', '2022-02-07 22:42:15', NULL, NULL, '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_589e60fb-9f82-4f6d-ab14-eac32683928f_medium.jpg'),
('27df8c1a-f584-4ebc-a2bd-72d007b89d7d', ' 3', ' 2', ' ', '4', '5', 6, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:29:37', False, '2022-02-07 22:29:37', '2022-02-07 22:29:43', NULL, NULL, '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_0d6742cb-e474-496d-96fd-7f1deb14c2f7_medium.jpg'),
('3a058e9b-7fda-4c3f-ab75-6a2ce3fddae4', ' 3', ' 2', ' ', '4', '5', 6, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:31:40', False, '2022-02-07 22:31:40', '2022-02-07 22:31:47', NULL, NULL, '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_9a56a661-c477-4574-aab1-4d209a18ae4a_medium.jpg'),
('3ac56584-bd71-485b-982d-19a43360d522', ' 3', ' 2', ' ', '4', '5', 6, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:25:40', False, '2022-02-07 22:25:40', '2022-02-07 22:25:40', NULL, NULL, NULL),
('3eae1cf9-4b19-4444-ab96-8669db2c5403', ' 2', ' 2', ' ', '2', '2', 0, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 23:27:45', False, '2022-02-07 23:27:45', '2022-02-07 23:27:46', NULL, NULL, '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_4eba2e6d-9dbf-4b49-86c9-43a48e3a5692_medium.jpg'),
('4b511192-915b-467d-bdbc-639d895087ca', ' 3', ' 2', ' ', '4', '5', 6, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:25:55', False, '2022-02-07 22:25:55', '2022-02-07 22:26:08', NULL, NULL, NULL),
('5b3d456c-f461-4686-a1ff-a25e8d1d958f', ' ', ' ', ' ', '', '', 0, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:00:57', False, '2022-02-07 22:00:57', '2022-02-07 22:00:57', NULL, NULL, ''),
('75bb959c-fa88-4932-8aef-aeec5615f1c1', ' ', ' ', ' ', '', '', 0, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:00:49', False, '2022-02-07 22:00:49', '2022-02-07 22:00:49', NULL, NULL, ''),
('79e04b59-8eae-4b60-969a-3c290a32bc25', ' 3', ' 2', ' ', '4', '5', 6, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:25:03', False, '2022-02-07 22:25:03', '2022-02-07 22:25:06', NULL, NULL, NULL),
('845e7370-f434-4b96-b0a5-8cd5450e3186', ' ', ' ', ' ', '', '', 0, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:13:29', False, '2022-02-07 22:13:29', '2022-02-07 22:13:29', NULL, NULL, ''),
('8d50a200-8489-4c7a-ac27-c37e4b3e4cdb', 'minh ', '123 ', '456 ', '789', '30000', 1000, 1, '00000000-0000-0000-0000-000000000000', '1a8cdd5c-71c7-450c-9575-e4367974e053', '<hello>', '2022-02-04 23:50:10', False, '2022-02-04 23:50:10', '2022-02-07 22:24:26', NULL, NULL, '4e70a228-f3d9-477f-a3c7-70123ce97842/img_ad98c615-70d6-411b-a219-bcbec75c7d98_medium.jpg'),
('9fcc438a-bc2f-43d0-8f21-2612afbe6631', ' 3', ' 2', ' ', '4', '5', 6, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:20:11', False, '2022-02-07 22:20:11', '2022-02-07 22:20:11', NULL, NULL, NULL),
('b15e35f4-5d57-4482-8a8a-91fbdae4c366', ' 3', ' 2', ' ', '4', '5', 6, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:28:23', False, '2022-02-07 22:28:23', '2022-02-07 22:29:20', NULL, NULL, NULL),
('ca3e9bd5-ee13-40bc-afcf-43d6ad2e39a0', ' 3', ' 2', ' ', '4', '5', 6, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:33:58', False, '2022-02-07 22:33:58', '2022-02-07 22:33:59', NULL, NULL, '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_1eb2b16b-cc35-4d40-a0a3-7d3ba9f6deef_medium.jpg'),
('de44673d-ae99-4af5-b848-d6884ffc3123', ' 3', ' 2', ' ', '4', '5', 6, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:26:35', False, '2022-02-07 22:26:35', '2022-02-07 22:26:50', NULL, NULL, NULL),
('eb3805fb-278b-4cb6-ad6f-2c6273f206f4', ' 3', ' 2', ' ', '4', '5', 6, 0, '00000000-0000-0000-0000-000000000000', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '', '2022-02-07 22:01:22', False, '2022-02-07 22:01:22', '2022-02-07 22:01:22', NULL, NULL, '');

-- 
-- Dumping data for table history
--
-- Table motel.history does not contain any data (it is empty)

-- 
-- Dumping data for table files
--
INSERT INTO files VALUES
('3ff49ff3-1743-499c-9cb5-668fc51d5d00', '3eae1cf9-4b19-4444-ab96-8669db2c5403', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_4eba2e6d-9dbf-4b49-86c9-43a48e3a5692.jpg', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_4eba2e6d-9dbf-4b49-86c9-43a48e3a5692_medium.jpg', False, '2022-02-07 16:27:46', '2022-02-07 23:27:46', NULL, NULL),
('6336832d-7481-401c-8d7e-d78bab0239a2', '2277f53d-64f4-472c-af60-8cac5082563d', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_589e60fb-9f82-4f6d-ab14-eac32683928f.jpg', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_589e60fb-9f82-4f6d-ab14-eac32683928f_medium.jpg', False, '2022-02-07 15:42:14', '2022-02-07 22:42:14', NULL, NULL),
('667eea11-f454-4d82-8fb8-76f925b491d2', '09748048-4840-4636-9216-aa775c8a895d', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_5703380c-746c-409d-8295-a33569150e8e.png', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_5703380c-746c-409d-8295-a33569150e8e_medium.png', False, '2022-02-07 15:43:53', '2022-02-07 22:43:53', NULL, NULL),
('824cb8b7-cd91-4491-88e2-745a3dd900fa', '2277f53d-64f4-472c-af60-8cac5082563d', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_dd83d22d-d9d5-48b1-92c7-8aa4115f651c.jpg', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_dd83d22d-d9d5-48b1-92c7-8aa4115f651c_medium.jpg', False, '2022-02-07 15:42:15', '2022-02-07 22:42:15', NULL, NULL),
('955e01ea-4246-4e14-9ccf-b1ef78406bf9', '09748048-4840-4636-9216-aa775c8a895d', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_8a3d6686-7573-4183-8c7e-4f3506e6d008.jpg', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_8a3d6686-7573-4183-8c7e-4f3506e6d008_medium.jpg', False, '2022-02-07 15:43:52', '2022-02-07 22:43:52', NULL, NULL),
('9e3ae680-d6de-4b2c-a043-d16cd23849f5', 'ca3e9bd5-ee13-40bc-afcf-43d6ad2e39a0', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_1eb2b16b-cc35-4d40-a0a3-7d3ba9f6deef.jpg', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_1eb2b16b-cc35-4d40-a0a3-7d3ba9f6deef_medium.jpg', False, '2022-02-07 15:33:59', '2022-02-07 22:33:59', NULL, NULL),
('b0bbede0-3e48-4b98-8cdc-eb3623f06084', 'ca3e9bd5-ee13-40bc-afcf-43d6ad2e39a0', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_f5cd379b-7294-4834-8f4b-da2cd46322f2.jpg', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_f5cd379b-7294-4834-8f4b-da2cd46322f2_medium.jpg', False, '2022-02-07 15:33:59', '2022-02-07 22:33:59', NULL, NULL),
('bd1a3c41-8cea-4e6a-a571-3eafb0c6f350', '09748048-4840-4636-9216-aa775c8a895d', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_bdb96687-efa1-4e6d-88a0-e33659200ec6.jpg', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_bdb96687-efa1-4e6d-88a0-e33659200ec6_medium.jpg', False, '2022-02-07 15:43:53', '2022-02-07 22:43:53', NULL, NULL),
('c11c0bf0-846c-4c71-9c99-986a93a61e20', '09748048-4840-4636-9216-aa775c8a895d', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_33f5f7ba-781c-4f19-8cc4-2bf5a5f71a44.jpg', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_33f5f7ba-781c-4f19-8cc4-2bf5a5f71a44_medium.jpg', False, '2022-02-07 15:43:53', '2022-02-07 22:43:53', NULL, NULL),
('e0762373-da64-4a6a-bc7e-59d03925235d', '09748048-4840-4636-9216-aa775c8a895d', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_e27383ca-b7ad-4c82-83b3-e82bca0f6114.jpg', '6f63abea-5b6d-4fa8-b501-9bb2393fd80c/img_e27383ca-b7ad-4c82-83b3-e82bca0f6114_medium.jpg', False, '2022-02-07 15:43:52', '2022-02-07 22:43:52', NULL, NULL);

-- 
-- Dumping data for table comment
--
-- Table motel.comment does not contain any data (it is empty)

-- 
-- Dumping data for table billdetail
--
-- Table motel.billdetail does not contain any data (it is empty)

-- 
-- Dumping data for table bill
--
INSERT INTO bill VALUES
('129c171b-13d8-4888-b61c-8ed78433da59', 0, '3fa85f64-5717-4562-b3fc-2c963f66afa6', '3fa85f64-5717-4562-b3fc-2c963f66afa6', False, '2022-02-05 16:24:34', '2022-02-05 23:26:10', NULL, 'BVMINH', 1200, 0, NULL),
('1d133ba9-6f01-4271-bbb4-7cd5096288be', 0, '3fa85f64-5717-4562-b3fc-2c963f66afa6', '3fa85f64-5717-4562-b3fc-2c963f66afa6', False, '2022-02-07 16:33:31', '2022-02-07 23:34:46', NULL, 'minh', 0, 0, 'Minh 1111'),
('ab30ff7e-3901-4f23-8b56-3e608eabf127', 0, '3fa85f64-5717-4562-b3fc-2c963f66afa6', '3fa85f64-5717-4562-b3fc-2c963f66afa6', False, '2022-02-05 16:36:20', '2022-02-05 23:37:16', NULL, 'BVMINH', 50, 1200, NULL);

-- 
-- Restore previous SQL mode
-- 
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

-- 
-- Enable foreign keys
-- 
/*!40014 SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS */;