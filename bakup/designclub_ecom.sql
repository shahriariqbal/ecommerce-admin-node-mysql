-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 28, 2021 at 03:54 PM
-- Server version: 10.3.29-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `designclub_ecom`
--

-- --------------------------------------------------------

--
-- Table structure for table `ecom_banners`
--

CREATE TABLE `ecom_banners` (
  `Id` int(11) NOT NULL,
  `PID` int(11) DEFAULT NULL,
  `ImgPath` varchar(255) DEFAULT NULL,
  `FileName` varchar(255) NOT NULL,
  `Link` varchar(255) NOT NULL,
  `Text` varchar(255) NOT NULL,
  `IsHomePage` tinyint(1) DEFAULT NULL,
  `BannerType` int(11) DEFAULT NULL,
  `TrackedId` varchar(100) DEFAULT NULL,
  `CreateBy` varchar(100) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `UpdateBy` varchar(100) NOT NULL,
  `UpdateDate` datetime NOT NULL,
  `IsDelete` tinyint(1) DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_banners`
--

INSERT INTO `ecom_banners` (`Id`, `PID`, `ImgPath`, `FileName`, `Link`, `Text`, `IsHomePage`, `BannerType`, `TrackedId`, `CreateBy`, `CreateDate`, `UpdateBy`, `UpdateDate`, `IsDelete`, `IsActive`) VALUES
(1, 1, '../assets/img/product/banner/1111.jpeg', '1111.jpeg', 'https://www.google.com/', 'Big Sale Upto 25 % Off', 1, 1, '10.11.0.5', '1', '2021-03-09 00:00:00', '', '0000-00-00 00:00:00', 0, 1),
(2, 2, '../assets/img/product/banner/2222.jpeg', '2222.jpeg', 'https://www.google.com/', 'Big Sale Upto 25 % Off', 1, 1, '10.11.0.5', '1', '2021-03-10 00:00:00', '', '0000-00-00 00:00:00', 0, 1),
(3, 3, '../assets/img/product/banner/3333.jpeg', '3333.jpeg', 'https://www.google.com/', 'Big Sale Upto 25 % Off', 1, 1, '10.11.0.5', '1', '2021-03-09 00:00:00', '', '0000-00-00 00:00:00', 0, 1),
(4, 4, '../assets/img/product/banner/4444.jpeg', '4444.jpeg', 'https://www.google.com/', 'Big Sale Upto 25 % Off', 1, 1, '10.11.0.5', '1', '2021-03-10 00:00:00', '', '0000-00-00 00:00:00', 0, 1),
(5, 5, '../assets/img/product/banner/1111.jpeg', '1111.jpeg', 'https://www.google.com/', 'Big Sale Upto 25 % Off', 1, 1, '10.11.0.5', '1', '2021-03-09 00:00:00', '', '0000-00-00 00:00:00', 0, 1),
(6, 6, '../assets/img/product/banner/2222.jpeg', '2222.jpeg', 'https://www.google.com/', 'Big Sale Upto 25 % Off', 1, 1, '10.11.0.5', '1', '2021-03-10 00:00:00', '', '0000-00-00 00:00:00', 0, 1),
(7, 7, '../assets/img/product/banner/3333.jpeg', '3333.jpeg', 'https://www.google.com/', 'Big Sale Upto 25 % Off', 1, 1, '10.11.0.5', '1', '2021-03-09 00:00:00', '', '0000-00-00 00:00:00', 1, 0),
(8, 8, '../assets/img/product/banner/4444.jpeg', '4444.jpeg', 'https://www.google.com/', 'Big Sale Upto 25 % Off', 1, 1, '10.11.0.5', '1', '2021-03-10 00:00:00', '', '0000-00-00 00:00:00', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `ecom_brands`
--

CREATE TABLE `ecom_brands` (
  `Id` int(11) NOT NULL,
  `PID` int(11) DEFAULT NULL,
  `Brand` varchar(255) DEFAULT NULL,
  `Brand_BN` varchar(255) DEFAULT NULL,
  `TrackedId` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `IsDelete` tinyint(1) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_brands`
--

INSERT INTO `ecom_brands` (`Id`, `PID`, `Brand`, `Brand_BN`, `TrackedId`, `CreateBy`, `CreateDate`, `IsDelete`, `Active`) VALUES
(1, 1, 'www', 'www', '1', '1', '2021-03-09 00:00:00', 0, 1),
(2, 2, 'www', 'www', 'w', 'w', '2021-03-09 00:00:00', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ecom_carts`
--

CREATE TABLE `ecom_carts` (
  `Id` int(11) NOT NULL,
  `CID` int(11) DEFAULT NULL,
  `ProductID` int(11) DEFAULT NULL,
  `TONumber` varchar(255) DEFAULT NULL,
  `PName` varchar(255) DEFAULT NULL,
  `HostAddress` varchar(255) DEFAULT NULL,
  `UnitPrice` int(11) DEFAULT NULL,
  `NetPrice` int(11) DEFAULT NULL,
  `TrackedId` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `IsDelete` tinyint(1) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ecom_color`
--

CREATE TABLE `ecom_color` (
  `Id` int(11) NOT NULL,
  `Color` varchar(255) NOT NULL,
  `Color_Bn` varchar(255) NOT NULL,
  `TrackedId` varchar(100) NOT NULL,
  `CreateBy` varchar(100) NOT NULL,
  `CreateDate` datetime NOT NULL,
  `IsDelete` bit(1) NOT NULL,
  `Active` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_color`
--

INSERT INTO `ecom_color` (`Id`, `Color`, `Color_Bn`, `TrackedId`, `CreateBy`, `CreateDate`, `IsDelete`, `Active`) VALUES
(1, 'N/A', 'Red', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(2, 'Green', 'Red', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(3, 'Blue', 'Red', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(4, 'Gray', 'Red', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(5, 'Red', 'Red', '1', '1', '2021-03-09 00:00:00', b'0', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `ecom_colors`
--

CREATE TABLE `ecom_colors` (
  `Id` int(11) NOT NULL,
  `PID` varchar(255) NOT NULL,
  `ColorId` int(11) NOT NULL,
  `Color` varchar(255) NOT NULL,
  `Color_Bn` varchar(255) NOT NULL,
  `TrackedId` varchar(100) NOT NULL,
  `CreateBy` varchar(100) NOT NULL,
  `CreateDate` datetime NOT NULL,
  `IsDelete` bit(1) NOT NULL,
  `Active` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_colors`
--

INSERT INTO `ecom_colors` (`Id`, `PID`, `ColorId`, `Color`, `Color_Bn`, `TrackedId`, `CreateBy`, `CreateDate`, `IsDelete`, `Active`) VALUES
(1, '15', 1, 'N/A', 'Red', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(6, '16', 1, 'N/A', 'Red', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(7, '14', 2, 'Green', 'Red', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(8, '14', 4, 'Gray', 'Red', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(9, '14', 3, 'Blue', 'Red', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(10, '14', 5, 'Red', 'Red', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(14, '13', 1, '', '', '', '', '0000-00-00 00:00:00', b'0', b'0'),
(15, '13', 2, '', '', '', '', '0000-00-00 00:00:00', b'0', b'0'),
(16, '13', 3, '', '', '', '', '0000-00-00 00:00:00', b'0', b'1'),
(17, '', 0, '', '', '', '', '0000-00-00 00:00:00', b'0', b'0');

-- --------------------------------------------------------

--
-- Table structure for table `ecom_customers`
--

CREATE TABLE `ecom_customers` (
  `Id` int(11) NOT NULL,
  `CID` varchar(255) DEFAULT NULL,
  `TONumber` varchar(255) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Area` varchar(255) DEFAULT NULL,
  `MobileNo` varchar(255) DEFAULT NULL,
  `PhoneNo` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Username` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `OTP` int(11) NOT NULL,
  `Priority` varchar(255) DEFAULT NULL,
  `HostAddress` varchar(255) DEFAULT NULL,
  `FileUrl` varchar(255) DEFAULT NULL,
  `FileExtension` varchar(255) DEFAULT NULL,
  `FileImage` varchar(255) DEFAULT NULL,
  `Birthday` datetime DEFAULT NULL,
  `TrackedId` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `UpdateBy` varchar(255) DEFAULT NULL,
  `UpdateDate` datetime DEFAULT NULL,
  `IsDelete` tinyint(1) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL,
  `Counted` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_customers`
--

INSERT INTO `ecom_customers` (`Id`, `CID`, `TONumber`, `Name`, `Address`, `Area`, `MobileNo`, `PhoneNo`, `Email`, `Username`, `Password`, `OTP`, `Priority`, `HostAddress`, `FileUrl`, `FileExtension`, `FileImage`, `Birthday`, `TrackedId`, `CreateBy`, `CreateDate`, `UpdateBy`, `UpdateDate`, `IsDelete`, `Active`, `Counted`) VALUES
(1, '1911788193', '11_976959339', 'Mintu2021', 'House no 62/1, Flat No B7, Road no 11(Lakeside), kallayanpur, South Paikpara Dhaka. (50 feet from Shapla Housing Riska Stand) 50000(Kallyanpur, Dhaka)', 'Agargaon', '01911788193', NULL, 'gmsanzid@gmail.com', NULL, NULL, 2520, NULL, NULL, 'logo.jpg', NULL, NULL, '1982-02-14 18:00:00', 'http://10.11.0.5:8000/api/', NULL, '2021-03-25 11:24:02', '1911788193', '2021-03-29 12:19:58', 0, 1, NULL),
(36, '1704164912', '11_1704164912', 'Mintu_2021', 'wwwwwwwww', 'Mirpur', '01704164912', NULL, 'gm_sanzid@gmail.com', NULL, 'undefined', 1672, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(37, '1710551015', '11_1710551015', 'Sarour2020', 'Dhaka 1216', 'Boshree', '01710551015', NULL, 'admin@gmail.com', NULL, 'undefined', 3882, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(42, '7096947747', '11_7096947747', 'Mintu', 'sssssssssssssss', 'Boshree', '017000011111', NULL, '_gmsanzid@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(43, '4102116435', '11_4102116435', 'Mintu_2021', 'wwwwwwwwwwwwwwwwwww', 'Mirpur', '019911111111', NULL, 'ww@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(44, '1628718328', '11_1628718328', 'Mintu_2021', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'Boshree', '017000000000000', NULL, 'ww_ww@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(45, '9575166287', '11_9575166287', 'Mintu_2021', 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', 'wwww', '019911111111', NULL, '_ww_ww@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(46, '7585246200', '11_7585246200', 'Mintu_2021', 'wwwwwwwwwwwwwwwww', 'Boshree', '017000011111', NULL, 'ww_ww_ww@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(47, '9499105033', '11_9499105033', 'Md. Salahuddin Bhuiyan', NULL, NULL, 'undefined', NULL, 'sub.sustcse@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(48, '7300800633', '11_7300800633', 'Md. Salahuddin Bhuiyan', NULL, NULL, 'undefined', NULL, 'sub_sustcse@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(49, '1709037082', '11_1709037082', 'Md. Salahuddin Bhuiyan', NULL, NULL, 'undefined', NULL, 'alam_sustcse@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(50, '6868974704', '11_6868974704', 'Salahuddin Bhuiyan', NULL, NULL, 'undefined', NULL, 'salahuddin.bhuiyan@one-ict.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(51, '6039139355', '11_6039139355', 'Salahuddin Bhuiyan', 'Dhaka, Bangladesh-1217', '', 'undefined', NULL, 'sub_sustcse@yahoo.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, '6039139355.png', NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(52, '6928494260', '11_6928494260', 'Mintu_2021', NULL, NULL, 'undefined', NULL, 'ww_ww_ww_ww@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(53, '4849024847', '11_4849024847', 'Mintu_2021', NULL, NULL, 'undefined', NULL, '11@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(54, '9887213955', '11_9887213955', 'Mintu_2021', NULL, NULL, 'undefined', NULL, '12@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(55, '7097389926', '11_7097389926', 'Mintu_2021', NULL, NULL, 'undefined', NULL, '1200@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(56, '7260356620', '11_7260356620', 'Mintu_2021', NULL, NULL, 'undefined', NULL, '1211@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(57, '3672783912', '11_3672783912', 'Mintu_2021', NULL, NULL, 'undefined', NULL, '111211@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(58, '4897874762', '11_4897874762', 'Mintu_2021', NULL, NULL, 'undefined', NULL, '22111211@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(59, '7001910185', '11_7001910185', 'Mintu_2021', NULL, NULL, NULL, NULL, '3322111211@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(61, '7001910186', '11_7001910185', 'Mintu_2021', NULL, NULL, NULL, NULL, '3322111211@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(62, '9646681847', '11_9646681847', 'Mintu_2021', NULL, NULL, NULL, NULL, 'xxxxxx@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(63, '4753628905', '11_4753628905', 'Mintu_2021', NULL, NULL, NULL, NULL, 'xx_vv@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(65, '6839478321', '11_6839478321', 'Mintu_2021', NULL, NULL, NULL, NULL, 'xx_vv_11@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(66, '2237805943', '11_2237805943', 'Mintu_2021', NULL, NULL, NULL, NULL, 'xx_vv_11_22@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL),
(67, '9900449277', '11_9900449277', 'Mintu_2021', NULL, NULL, NULL, NULL, 'xx_vv_11_22_33@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ecom_features`
--

CREATE TABLE `ecom_features` (
  `Id` int(11) NOT NULL,
  `PID` int(11) DEFAULT NULL,
  `PName` varchar(255) DEFAULT NULL,
  `PName_BN` varchar(255) DEFAULT NULL,
  `Brand` varchar(255) DEFAULT NULL,
  `Brand_BN` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Description_BN` varchar(255) DEFAULT NULL,
  `ImgPath` varchar(255) DEFAULT NULL,
  `UnitPrice` float DEFAULT NULL,
  `OfferPrice` float DEFAULT NULL,
  `UnitsInStock` int(11) DEFAULT NULL,
  `TrackedId` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `IsDelete` tinyint(1) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ecom_flashes`
--

CREATE TABLE `ecom_flashes` (
  `Id` int(11) NOT NULL,
  `OfferId` int(11) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Name_BN` varchar(255) DEFAULT NULL,
  `OfferExpiry` datetime NOT NULL,
  `IsCombo` tinyint(1) NOT NULL,
  `TrackedId` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `IsDelete` tinyint(1) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_flashes`
--

INSERT INTO `ecom_flashes` (`Id`, `OfferId`, `Name`, `Name_BN`, `OfferExpiry`, `IsCombo`, `TrackedId`, `CreateBy`, `CreateDate`, `IsDelete`, `Active`) VALUES
(35, 2147483647, 'www', 'wwww20000', '2021-04-30 00:00:00', 1, '11', NULL, NULL, 0, 1),
(36, NULL, 'WWWWWWW', 'WWWWWWWW', '2021-04-27 00:00:00', 1, '11', NULL, NULL, 0, 1),
(37, 2147483647, 'sfffsadf', 'fdsfasf', '2021-04-29 00:00:00', 1, '11', NULL, NULL, 0, 1),
(38, 2147483647, 'sfffsadf', 'fdsfasf', '2021-04-29 00:00:00', 1, '11', NULL, NULL, 0, 1),
(39, 2147483647, 'sfffsadf', 'fdsfasf', '2021-04-29 00:00:00', 1, '11', NULL, NULL, 0, 1),
(40, 2147483647, 'ssssss', 'ssssss', '2021-04-28 00:00:00', 1, '11', NULL, NULL, 0, 1),
(41, 2147483647, 'vvv', 'vvvv', '2021-04-27 00:00:00', 1, '11', NULL, NULL, 0, 1),
(42, 2147483647, 'nnnn', 'nnnn2000', '0000-00-00 00:00:00', 1, '11', NULL, NULL, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ecom_flash_details`
--

CREATE TABLE `ecom_flash_details` (
  `Id` int(11) NOT NULL,
  `PID` int(11) DEFAULT NULL,
  `FlashId` int(11) NOT NULL,
  `PName` varchar(255) DEFAULT NULL,
  `PName_BN` varchar(255) DEFAULT NULL,
  `Brand` varchar(255) DEFAULT NULL,
  `Brand_BN` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Description_BN` varchar(255) DEFAULT NULL,
  `ImgPath` varchar(255) DEFAULT NULL,
  `FileName` varchar(255) NOT NULL,
  `Link` varchar(255) NOT NULL,
  `Discount` float NOT NULL,
  `MRP` float NOT NULL,
  `UnitPrice` float DEFAULT NULL,
  `OfferPrice` float DEFAULT NULL,
  `OfferText` varchar(255) NOT NULL,
  `OfferExpiry` datetime NOT NULL,
  `UnitsInStock` int(11) DEFAULT NULL,
  `IsPercent` bit(1) NOT NULL,
  `IsCombo` bit(1) NOT NULL,
  `TrackedId` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `IsDelete` tinyint(1) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_flash_details`
--

INSERT INTO `ecom_flash_details` (`Id`, `PID`, `FlashId`, `PName`, `PName_BN`, `Brand`, `Brand_BN`, `Description`, `Description_BN`, `ImgPath`, `FileName`, `Link`, `Discount`, `MRP`, `UnitPrice`, `OfferPrice`, `OfferText`, `OfferExpiry`, `UnitsInStock`, `IsPercent`, `IsCombo`, `TrackedId`, `CreateBy`, `CreateDate`, `IsDelete`, `Active`) VALUES
(53, 6, 35, 'Cooking', 'Cooking', NULL, NULL, NULL, NULL, 'undefined', '', '', 100, 801, 801, 700, 'www', '0000-00-00 00:00:00', 10, b'1', b'0', '11', NULL, NULL, 0, 1),
(54, 6, 37, 'Cooking', 'Cooking', NULL, NULL, NULL, NULL, 'http://10.11.0.5:8000/upload/product_images/120000_det.jpg', '', '', 111, 1111, 1111, 111, '1111', '0000-00-00 00:00:00', 10, b'1', b'0', '11', NULL, NULL, 0, 1),
(55, 6, 38, 'Cooking', 'Cooking', NULL, NULL, NULL, NULL, 'http://10.11.0.5:8000/upload/product_images/120000_det.jpg', '', '', 111, 1111, 1111, 111, '1111', '0000-00-00 00:00:00', 10, b'1', b'0', '11', NULL, NULL, 0, 1),
(56, 6, 39, 'Cooking', 'Cooking', NULL, NULL, NULL, NULL, 'http://10.11.0.5:8000/upload/product_images/120000_det.jpg', '', '', 111, 1111, 1111, 111, '1111', '0000-00-00 00:00:00', 10, b'1', b'0', '11', NULL, NULL, 0, 1),
(57, 10, 40, 'Food', 'Food', NULL, NULL, NULL, NULL, '../assets/img/product/1124.jpg', '', '', 22, 222, 222, 222, '2222', '0000-00-00 00:00:00', 10, b'1', b'0', '11', NULL, NULL, 0, 1),
(58, 14, 41, 'Baby Item', 'Baby Item', NULL, NULL, NULL, NULL, '../assets/img/product/1125.jpg', '', '', 11, 11, 11, 11, '111', '0000-00-00 00:00:00', 10, b'1', b'0', '11', NULL, NULL, 0, 1),
(78, 11, 42, 'Electrict', 'Electrict', NULL, NULL, NULL, NULL, '', '', '', 11, 11, 11, 11, '11', '0000-00-00 00:00:00', 10, b'1', b'0', '11', NULL, NULL, 0, 1),
(79, 3, 42, 'Electronics', 'Electronics', NULL, NULL, NULL, NULL, '../assets/img/product/3333.jpg', '', '', 44, 44, 44, 44, '444', '0000-00-00 00:00:00', 10, b'1', b'0', '11', NULL, NULL, 0, 1),
(80, 24, 42, 'FRESH MILK', 'FRESH MILK', NULL, NULL, NULL, NULL, 'http://10.11.0.5:8000/upload/product_images/1150.jpg', '', '', 10, 350, 350, 340, 'wwwww', '0000-00-00 00:00:00', 10, b'1', b'0', '11', NULL, NULL, 0, 1),
(85, 6, 36, 'Cooking', 'Cooking', NULL, NULL, NULL, NULL, '', '', '', 100, 801, 801, 700, 'www', '0000-00-00 00:00:00', 10, b'1', b'0', '11', NULL, NULL, 0, 1),
(86, 15, 36, 'Jonson Powder', 'Jonson Powder', NULL, NULL, NULL, NULL, 'http://10.11.0.5:8000/upload/product_images/1150.jpg', '', '', 11, 11, 11, 11, '1111', '0000-00-00 00:00:00', 10, b'1', b'0', '11', NULL, NULL, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ecom_menu`
--

CREATE TABLE `ecom_menu` (
  `Id` int(11) NOT NULL,
  `MenuId` int(11) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `IsActive` bit(1) DEFAULT NULL,
  `Path` varchar(250) DEFAULT NULL,
  `DisplayOrder` int(11) DEFAULT NULL,
  `ParentId` int(11) DEFAULT NULL,
  `CreatedUser` varchar(100) DEFAULT NULL,
  `ModifiedUser` varchar(100) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `ModifiedDate` datetime DEFAULT NULL,
  `SystemInfo` varchar(50) DEFAULT NULL,
  `Parameter` varchar(50) DEFAULT NULL,
  `NodeId` varchar(50) DEFAULT NULL,
  `Style` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ecom_menuroles`
--

CREATE TABLE `ecom_menuroles` (
  `Id` int(11) NOT NULL,
  `MenuRoleId` int(11) NOT NULL,
  `MenuId` int(11) NOT NULL,
  `RoleId` int(11) DEFAULT NULL,
  `CreatedUser` varchar(100) DEFAULT NULL,
  `ModifiedUser` varchar(100) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `ModifiedDate` datetime DEFAULT NULL,
  `SystemInfo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ecom_menus`
--

CREATE TABLE `ecom_menus` (
  `Id` int(11) NOT NULL,
  `MenuId` int(11) DEFAULT NULL,
  `Title` int(11) DEFAULT NULL,
  `Path` int(11) DEFAULT NULL,
  `ParentId` int(11) DEFAULT NULL,
  `DisplayOrder` int(11) DEFAULT NULL,
  `Parameter` int(11) DEFAULT NULL,
  `NodeId` int(11) DEFAULT NULL,
  `Style` int(11) DEFAULT NULL,
  `Categories` int(11) DEFAULT NULL,
  `MenuRoles` int(11) DEFAULT NULL,
  `TrackedId` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `UpdateBy` varchar(255) DEFAULT NULL,
  `UpdateDate` datetime DEFAULT NULL,
  `IsDelete` bit(1) DEFAULT NULL,
  `Active` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ecom_menu_baks`
--

CREATE TABLE `ecom_menu_baks` (
  `Id` int(11) NOT NULL,
  `MenuId` int(11) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Path` varchar(255) DEFAULT NULL,
  `ParentId` int(11) DEFAULT NULL,
  `DisplayOrder` int(11) DEFAULT NULL,
  `Parameter` varchar(255) DEFAULT NULL,
  `NodeId` int(11) DEFAULT NULL,
  `Style` varchar(255) DEFAULT NULL,
  `Categories` varchar(255) DEFAULT NULL,
  `MenuRoles` varchar(255) DEFAULT NULL,
  `TrackedId` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `UpdateBy` varchar(255) DEFAULT NULL,
  `UpdateDate` datetime DEFAULT NULL,
  `IsDelete` tinyint(1) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ecom_offers`
--

CREATE TABLE `ecom_offers` (
  `Id` int(11) NOT NULL,
  `CID` int(11) DEFAULT NULL,
  `CName` varchar(255) DEFAULT NULL,
  `CName_BN` varchar(255) DEFAULT NULL,
  `CouponNo` varchar(255) DEFAULT NULL,
  `ValidFrom` datetime DEFAULT NULL,
  `ValidTo` datetime DEFAULT NULL,
  `ValidCountry` varchar(255) DEFAULT NULL,
  `ValidOutletName` varchar(255) DEFAULT NULL,
  `Reason` varchar(255) DEFAULT NULL,
  `DiscountPrice` int(11) DEFAULT NULL,
  `Percent` tinyint(1) DEFAULT NULL,
  `TrackedId` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `IsDelete` tinyint(1) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ecom_orderdetails`
--

CREATE TABLE `ecom_orderdetails` (
  `Id` int(11) NOT NULL,
  `OrderId` int(11) DEFAULT NULL,
  `TONumber` varchar(255) DEFAULT NULL,
  `PID` int(11) DEFAULT NULL,
  `PName` varchar(255) DEFAULT NULL,
  `PQty` int(11) DEFAULT NULL,
  `ItemQty` int(11) DEFAULT NULL,
  `UnitPrice` int(11) DEFAULT NULL,
  `NetPrice` int(11) DEFAULT NULL,
  `ImgPath` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `UpdateBy` varchar(255) DEFAULT NULL,
  `UpdateDate` datetime DEFAULT NULL,
  `IsDelete` tinyint(1) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_orderdetails`
--

INSERT INTO `ecom_orderdetails` (`Id`, `OrderId`, `TONumber`, `PID`, `PName`, `PQty`, `ItemQty`, `UnitPrice`, `NetPrice`, `ImgPath`, `CreateBy`, `CreateDate`, `UpdateBy`, `UpdateDate`, `IsDelete`, `Active`) VALUES
(412, 0, '11_1617693171893', 13, 'Cooking Tools', 2, 2, 101, 101, 'undefined', '1710551015', '2021-04-06 01:12:53', NULL, NULL, 0, 1),
(413, 0, '11_1617693421631', 13, 'Cooking Tools', 2, 2, 101, 101, 'undefined', '1710551015', '2021-04-06 01:17:03', NULL, NULL, 0, 1),
(414, 0, '11_1617693722026', 13, 'Cooking Tools', 1, 1, 101, 101, 'undefined', '1710551015', '2021-04-06 01:22:03', NULL, NULL, 0, 1),
(415, 0, '11_1617693850252', 13, 'Cooking Tools', 3, 3, 101, 101, 'undefined', '1710551015', '2021-04-06 01:24:11', NULL, NULL, 0, 1),
(416, 0, '11_1617696141652', 13, 'Cooking Tools', 5, 5, 101, 101, 'undefined', '1710551015', '2021-04-06 02:02:23', NULL, NULL, 0, 1),
(417, 0, '11_1617696270608', 13, 'Cooking Tools', 1, 1, 101, 101, 'undefined', '1710551015', '2021-04-06 02:04:32', NULL, NULL, 0, 1),
(418, 0, '11_1617700645400', 2, 'Home', 1, 1, 11, 11, 'undefined', '1710551015', '2021-04-06 03:17:26', NULL, NULL, 0, 1),
(419, 0, '11_1617700645400', 10, 'Food', 1, 1, 11, 11, 'undefined', '1710551015', '2021-04-06 03:17:26', NULL, NULL, 0, 1),
(420, 0, '11_1617700645400', 15, 'Jonson Powder', 1, 1, 11, 11, 'undefined', '1710551015', '2021-04-06 03:17:26', NULL, NULL, 0, 1),
(421, 0, '11_1617700645400', 16, 'Baby Item Powder', 1, 1, 11, 11, 'undefined', '1710551015', '2021-04-06 03:17:26', NULL, NULL, 0, 1),
(422, 241, '238481565', 16, 'Baby Item Powder', 3, 3, 11, 111, '../assets/img/product/1121.jpg', '0', '2021-03-09 00:00:00', '', '2021-03-09 00:00:00', 0, 1),
(423, 241, '238481565', 13, 'Cooking Tools', 1, 1, 101, 111, 'http://10.11.0.5:8000/upload/product_images/1150.jpg', '0', '2021-03-09 00:00:00', '', '2021-03-09 00:00:00', 0, 1),
(424, 242, '222207524', 15, 'Jonson Powder', 1, 1, 11, 0, '../assets/img/product/1126.jpg', '1911788193', '2021-03-09 00:00:00', '', '2021-03-09 00:00:00', 0, 1),
(425, 242, '222207524', 16, 'Baby Item Powder', 1, 1, 11, 111, '../assets/img/product/1121.jpg', '1911788193', '2021-03-09 00:00:00', '', '2021-03-09 00:00:00', 0, 1),
(426, 243, '887907634', 11, 'Electrict', 1, 1, 11, 111, '../assets/img/product/1125.jpg', '1911788193', '2021-03-09 00:00:00', '', '2021-03-09 00:00:00', 0, 1),
(427, 243, '887907634', 13, 'Cooking Tools', 1, 1, 101, 111, 'http://10.11.0.5:8000/upload/product_images/1150.jpg', '1911788193', '2021-03-09 00:00:00', '', '2021-03-09 00:00:00', 0, 1),
(428, 0, '11_1617783900402', 10, 'Food', 2, 2, 11, 11, 'undefined', '6039139355', '2021-04-07 02:25:01', NULL, NULL, 0, 1),
(429, 0, '11_1617783900402', 6, 'Cooking', 1, 1, 100, 100, 'undefined', '6039139355', '2021-04-07 02:25:01', NULL, NULL, 0, 1),
(430, 0, '11_1617783900402', 11, 'Electrict', 1, 1, 11, 11, 'undefined', '6039139355', '2021-04-07 02:25:01', NULL, NULL, 0, 1),
(431, 0, '11_1617783900402', 22, 'wwww', 3, 3, 11, 11, 'undefined', '6039139355', '2021-04-07 02:25:01', NULL, NULL, 0, 1),
(432, 0, '11_1617880460614', 10, 'Food', 1, 1, 11, 11, 'undefined', '1710551015', '2021-04-08 05:14:21', NULL, NULL, 0, 1),
(433, 0, '11_1617880460614', 11, 'Electrict', 2, 2, 11, 11, 'undefined', '1710551015', '2021-04-08 05:14:21', NULL, NULL, 0, 1),
(434, 246, '816766144', 15, 'Jonson Powder', 1, 1, 11, 0, '../assets/img/product/1126.jpg', '0', '2021-03-09 00:00:00', '', '2021-03-09 00:00:00', 0, 1),
(435, 246, '816766144', 16, 'Baby Item Powder', 1, 1, 11, 111, '../assets/img/product/1121.jpg', '0', '2021-03-09 00:00:00', '', '2021-03-09 00:00:00', 0, 1),
(436, 0, '11_1618725994926', 22, 'wwww', 1, 1, 11, 11, 'undefined', '1710551015', '2021-04-18 12:06:34', NULL, NULL, 0, 1),
(437, 0, '11_1618725994926', 2, 'Home', 1, 1, 11, 11, 'undefined', '1710551015', '2021-04-18 12:06:34', NULL, NULL, 0, 1),
(438, 0, '11_1618725994926', 11, 'Electrict', 1, 1, 11, 11, 'undefined', '1710551015', '2021-04-18 12:06:34', NULL, NULL, 0, 1),
(439, 0, 'DC_1618735835286', 6, 'Cooking', 3, 3, 100, 100, 'undefined', '1710551015', '2021-04-18 02:50:35', NULL, NULL, 0, 1),
(440, 0, 'DC_1619417172372', 1, 'Food', 3, 3, 11, 11, 'undefined', '1710551015', '2021-04-26 12:06:12', NULL, NULL, 0, 1),
(441, 0, 'DC_1619419577530', 1, 'Food', 3, 3, 11, 11, 'undefined', '1710551015', '2021-04-26 12:46:17', NULL, NULL, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ecom_orders`
--

CREATE TABLE `ecom_orders` (
  `Id` int(11) NOT NULL,
  `OID` varchar(255) DEFAULT NULL,
  `TONumber` varchar(255) DEFAULT NULL,
  `CustomerId` int(11) DEFAULT NULL,
  `PaymentId` int(11) DEFAULT NULL,
  `CouponId` int(11) DEFAULT NULL,
  `Discount` int(11) DEFAULT NULL,
  `Reason` varchar(255) DEFAULT NULL,
  `TotalItemQty` int(11) DEFAULT NULL,
  `TotalPrice` int(11) DEFAULT NULL,
  `DeliveryCharge` int(11) DEFAULT NULL,
  `NetPrice` int(11) DEFAULT NULL,
  `DeliveryTime` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Area` varchar(255) DEFAULT NULL,
  `OrderStatus` int(11) DEFAULT NULL,
  `TrackedId` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `IsDelete` tinyint(1) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_orders`
--

INSERT INTO `ecom_orders` (`Id`, `OID`, `TONumber`, `CustomerId`, `PaymentId`, `CouponId`, `Discount`, `Reason`, `TotalItemQty`, `TotalPrice`, `DeliveryCharge`, `NetPrice`, `DeliveryTime`, `Address`, `Area`, `OrderStatus`, `TrackedId`, `CreateBy`, `CreateDate`, `IsDelete`, `Active`) VALUES
(232, '1', '11_1617693171893', 1710551015, NULL, 0, 10, '', 0, 202, 20, 202, '2021-04-07T07:12:51.895Z', 'dhaka', 'gulshan', 2, NULL, '1710551015', '2021-04-06 01:12:53', 0, 0),
(233, '1', '11_1617693421631', 1710551015, NULL, 0, 10, '', 0, 202, 20, 202, '2021-04-07T07:17:01.632Z', 'dhaka', '', 4, NULL, '1710551015', '2021-04-06 01:17:03', 0, 0),
(234, NULL, '11_1617693722026', 1710551015, NULL, 0, 10, '', 0, 101, 20, 101, '2021-04-07T07:22:02.027Z', 'dhaka', '', 1, NULL, '1710551015', '2021-04-06 01:22:03', 0, 0),
(235, '1', '11_1617693850252', 1710551015, NULL, 0, 10, '', 0, 303, 20, 303, '2021-04-07T07:24:10.252Z', 'Delivery address: Bangladesh\nPerson Name :sarour\nCellphone number: 01710551015', '', 3, NULL, '1710551015', '2021-04-06 01:24:11', 0, 0),
(238, '1', '11_1617696141652', 1710551015, NULL, 0, 10, '', 0, 505, 20, 505, '2021-04-07T08:02:21.654Z', 'dhaka', '', 2, NULL, '1710551015', '2021-04-06 02:02:23', 0, 1),
(239, NULL, '11_1617696270608', 1710551015, NULL, 0, 10, '', 0, 101, 20, 101, '2021-04-07T08:04:30.609Z', 'dhaka', '', 1, NULL, '1710551015', '2021-04-06 02:04:32', 0, 1),
(240, NULL, '11_1617700645400', 1710551015, NULL, 0, 40, '', 0, 44, 20, 44, '2021-04-07T09:17:25.401Z', 'dhaka', '', 1, NULL, '1710551015', '2021-04-06 03:17:26', 0, 1),
(241, '11_238481565', '238481565', 0, 0, 0, 310, '', 2, 134, 20, 444, '10.00', '', '', 0, 'http://10.11.0.5:8000/api/', '0', '2021-03-09 00:00:00', 0, 1),
(242, '11_222207524', '222207524', 1911788193, 0, 0, 89, '', 2, 22, 20, 111, '10.00', 'House no 62/1, Flat No B7, Road no 11(Lakeside), kallayanpur, South Paikpara Dhaka. (50 feet from Shapla Housing Riska Stand) 50000(Kallyanpur, Dhaka)', 'Agargaon', 0, 'http://10.11.0.5:8000/api/', '1911788193', '2021-03-09 00:00:00', 0, 1),
(243, '11_887907634', '887907634', 1911788193, 0, 0, 110, '', 2, 112, 20, 222, '10.00', 'House no 62/1, Flat No B7, Road no 11(Lakeside), kallayanpur, South Paikpara Dhaka. (50 feet from Shapla Housing Riska Stand) 50000(Kallyanpur, Dhaka)', 'Agargaon', 1, 'http://10.11.0.5:8000/api/', '1911788193', '2021-03-09 00:00:00', 0, 1),
(244, NULL, '11_1617783900402', 2147483647, NULL, 0, 20, '', 0, 166, 20, 166, '2021-04-08T08:25:00.403Z', 'Dhaka, Bangladesh.', '', 1, NULL, '6039139355', '2021-04-07 02:25:01', 0, 1),
(245, NULL, '11_1617880460614', 1710551015, NULL, 0, 10, '', 0, 33, 20, 33, '2021-04-09T11:14:20.615Z', 'Dhaka 1216', '', 1, NULL, '1710551015', '2021-04-08 05:14:21', 0, 1),
(246, '11_816766144', '816766144', 0, 0, 0, 89, '', 2, 22, 20, 111, '10.00', '', '', 1, 'http://10.11.0.5:8000/api/', '0', '2021-03-09 00:00:00', 0, 1),
(247, NULL, '11_1618725994926', 1710551015, NULL, 0, 30, '', 0, 33, 20, 33, '2021-04-19T06:06:34.928Z', 'Delivery address: Dhaka 1216\nPerson Name :Sarour2020\nCellphone number: 01710551015', '', 1, NULL, '1710551015', '2021-04-18 12:06:34', 0, 1),
(248, NULL, 'DC_1618735835286', 1710551015, NULL, 0, 0, '', 0, 300, 20, 300, '2021-04-19T08:50:35.287Z', 'Delivery address: Dhaka 1216\nPerson Name :Sarour2020\nCellphone number: 01710551015', '', 1, NULL, '1710551015', '2021-04-18 02:50:35', 0, 1),
(249, NULL, 'DC_1619417172372', 1710551015, NULL, 0, 10, '', 0, 33, 20, 33, '2021-04-27T06:06:12.373Z', 'Delivery address: Dhaka 1216\nPerson Name :Sarour2020\nCellphone number: 01710551015', '', 1, NULL, '1710551015', '2021-04-26 12:06:12', 0, 1),
(250, NULL, 'DC_1619419577530', 1710551015, NULL, 0, 10, '', 0, 33, 20, 33, '2021-04-27T06:46:17.530Z', 'Delivery address: Dhaka 1216\nPerson Name :Sarour2020\nCellphone number: 01710551015', '', 1, NULL, '1710551015', '2021-04-26 12:46:17', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ecom_products`
--

CREATE TABLE `ecom_products` (
  `Id` int(11) NOT NULL,
  `PID` int(11) DEFAULT 0,
  `PName` varchar(255) DEFAULT NULL,
  `PName_BN` varchar(255) DEFAULT NULL,
  `Brand` varchar(255) DEFAULT NULL,
  `Brand_BN` varchar(255) DEFAULT NULL,
  `Discount` float DEFAULT 0,
  `MRP` float DEFAULT 0,
  `UnitPrice` float DEFAULT 0,
  `Unit` float DEFAULT 0,
  `UnitsInStock` int(11) DEFAULT 0,
  `Category` varchar(255) DEFAULT NULL,
  `Category_BN` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Description_BN` varchar(255) DEFAULT NULL,
  `SID` int(11) DEFAULT 0,
  `Rol` int(11) DEFAULT 0,
  `ParentId` int(11) DEFAULT 0,
  `Inserted_By` varchar(255) DEFAULT NULL,
  `Inserted_Date` datetime DEFAULT NULL,
  `Display` varchar(255) DEFAULT NULL,
  `ImgPath` varchar(255) DEFAULT NULL,
  `FileName` varchar(255) DEFAULT NULL,
  `FileUrl` varchar(255) DEFAULT NULL,
  `FileExtension` varchar(255) DEFAULT NULL,
  `RankId` int(11) DEFAULT 0,
  `IsHome` tinyint(1) DEFAULT 0,
  `IsPopular` tinyint(1) DEFAULT 0,
  `IsNew` tinyint(1) DEFAULT 0,
  `ColorId` int(11) DEFAULT 0,
  `SizeId` int(11) DEFAULT 0,
  `OfferPrice` float NOT NULL DEFAULT 0,
  `OfferText` smallint(255) NOT NULL,
  `OfferExpiry` datetime NOT NULL,
  `Route` varchar(255) NOT NULL,
  `IconName` varchar(255) NOT NULL,
  `TrackedId` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `IsDelete` tinyint(1) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_products`
--

INSERT INTO `ecom_products` (`Id`, `PID`, `PName`, `PName_BN`, `Brand`, `Brand_BN`, `Discount`, `MRP`, `UnitPrice`, `Unit`, `UnitsInStock`, `Category`, `Category_BN`, `Description`, `Description_BN`, `SID`, `Rol`, `ParentId`, `Inserted_By`, `Inserted_Date`, `Display`, `ImgPath`, `FileName`, `FileUrl`, `FileExtension`, `RankId`, `IsHome`, `IsPopular`, `IsNew`, `ColorId`, `SizeId`, `OfferPrice`, `OfferText`, `OfferExpiry`, `Route`, `IconName`, `TrackedId`, `CreateBy`, `CreateDate`, `IsDelete`, `Active`) VALUES
(1, 1, 'Boys', 'Boys', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Boys', 'Boys', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 2, 1, 0, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1120.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Food', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(2, 2, 'Home', 'Home_BN', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Grils', 'Grils', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 2, 1, 0, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1121.jpg', '2222.jpg', '1111.jpg', '.jpg', 5, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Home', 'star_rate', '2', '1', '2021-03-09 00:00:00', 0, 1),
(3, 3, 'Electronics', 'Category 3', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Electronics', 'Category 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 12, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1125.jpg', '3333.jpg', '1111.jpg', '.jpg', 1, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Electronics', 'star_rate', '3', '1', '2021-03-09 00:00:00', 0, 1),
(4, 4, 'Electric', 'Category 4', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Electric', 'Category 4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 12, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1130.jpg', '4444.jpg', '1111.jpg', '.jpg', 1, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Electric', 'star_rate', '4', '1', '2021-03-09 00:00:00', 0, 1),
(5, 5, 'Other', 'Other_BN', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Other', 'Other_BN', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 2, 1, 0, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1140.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Other', 'star_rate', '5', '1', '2021-03-09 00:00:00', 0, 1),
(6, 6, 'Cooking', 'Cooking', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Kitchen', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 1, 1, 8, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1124.jpg', '2222.jpg', '1111.jpg', '.jpg', 1, 0, 0, 1, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Cooking', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(7, 7, 'Baby Milk', 'Baby Item Category', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Baby Food', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', NULL, 1, 1, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/powder.jpg', '3333.jpg', '1111.jpg', '.jpg', 1, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Milk', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(8, 8, 'Kitchen', 'Kitchen_BN', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Kitchen', 'Kitchen_BN', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', NULL, 1, 2, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/kitchen.jpg', '4444.jpg', '1111.jpg', '.jpg', 1, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Kitchen', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(9, 9, 'Baby', 'Baby_BN', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Baby', 'Baby_BN', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 1, 1, 0, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1123.jpg', '1111.jpg', '1111.jpg', '.jpg', 2, 0, 1, 1, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(10, 10, 'Grils Model', 'Grils Model', 'Indian', 'Indian', 0, 1000, 1500, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1124.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(11, 11, 'Electrict', 'Electrict_BN', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Electrict', 'Electrict_BN', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 1, 1, 12, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1125.jpg', '1111.jpg', '1111.jpg', '.jpg', 3, 1, 1, 1, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(12, 12, 'City', 'City_BN', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Other', 'Other_BN', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 1, 1, 0, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1126.jpg', '1111.jpg', '1111.jpg', '.jpg', 4, 0, 1, 1, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(13, 13, 'Cooking Tools', 'Baby Item Category', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Kitchen', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 1, 1, 8, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1134.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 0, 1, 2, 2, 10, 0, '0000-00-00 00:00:00', 'Cooking Tools', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(14, 14, 'Baby Item', 'Baby Item Category', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Baby Food', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', NULL, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1125.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 1, 0, 0, 3, 3, 0, 0, '0000-00-00 00:00:00', 'Baby Item', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(15, 15, 'Jonson Powder', 'Jonson Powder_BN', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Jonson Powder 2021', 'Jonson Powder_BN', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio \r\nvelit ea quis voluptatum!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 2, 1, 9, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1126.jpg', '1111.jpg', '1111.jpg', '.jpg', 0, 1, 1, 1, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Jonson Powder', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(16, 16, 'Baby Item Powder', 'Baby Item Category', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 0, 1, 17, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1121.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 1, 1, 1, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Powder', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(17, 17, 'Category 8', 'Baby Item Category', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Category 8', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', NULL, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/feature/1115.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Category 8', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(18, 18, 'Category 9', 'Baby Item Category', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Category 9', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', NULL, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/feature/1117.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Category 9', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(19, 19, 'Category 10', 'Baby Item Category', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Category 10', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', NULL, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/feature/1116.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Category 10', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(20, 20, 'Category 11', 'Baby Item Category', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Category 11', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', NULL, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/feature/1117.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Category 11', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(21, 21, 'Baby Food', 'Baby Food_BN', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Baby Food', 'Baby Food_BN', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 1, 1, 12, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/6666.jpg', '1111.jpg', '1111.jpg', '.jpg', 5, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Powder', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(22, 22, 'wwww', 'Baby Item Category', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Home Appliance', 'Home Appliance', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', NULL, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/2222.jpg', '2222.jpg', '1111.jpg', '.jpg', 1, 1, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'wwww', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(23, 23, 'Baby Item Category', 'Baby Item Category', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Toy', 'Toy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', NULL, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/3333.jpg', '3333.jpg', '1111.jpg', '.jpg', 1, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(24, 24, 'FRESH MILK', 'Baby Item Category', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'FRESH MILK', 'Home Appliance', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 1, 1, 7, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1123.jpg', '2222.jpg', '1111.jpg', '.jpg', 1, 1, 1, 1, 1, 1, 0, 0, '0000-00-00 00:00:00', 'FRESH MILK', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(25, 25, 'Baby Item Category', 'Baby Item Category', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Baby Food', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', NULL, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/4444.jpg', '4444.jpg', '1111.jpg', '.jpg', 1, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(26, 26, 'Baby Toy', 'Baby Toy_BN', 'Jonson', 'Jonson', 100, 1000, 1100, 11, 10, 'Baby Toy', 'Baby Toy_BN', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', NULL, 1, 1, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/baby.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 1, 0, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item ', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(32, 32, 'Man', 'Man_BN', 'www', 'wwww', 100, 1000, 1100, 0, 200, 'Man', 'Man_BN', 'wwww', 'wwww', 2, 1, 12, NULL, NULL, NULL, '../assets/img/product/1123.jpg', NULL, NULL, NULL, 3, 0, 0, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', '', NULL, NULL, NULL, 0, 1),
(33, 33, 'Women_2021', 'Women_BN_2021', 'www', 'www', 100, 1000, 1100, 0, 0, 'Women_2021', 'Women_BN_2021', 'wwww', 'wwwww', 2, 1, 12, NULL, NULL, NULL, '../assets/img/product/1123.jpg', NULL, NULL, NULL, 5, 0, 0, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', '', NULL, NULL, NULL, 0, 1),
(34, 34, 'Cars', 'Cars_BN', 'Corolla', 'Corolla', 100, 1000, 1100, 0, 1000, 'Cars', 'Cars_BN', 'wwww', 'wwww', 2, 1, 21, NULL, NULL, NULL, '../assets/img/product/1123.jpg', NULL, NULL, NULL, 5, 0, 0, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', '', NULL, NULL, NULL, 0, 1),
(35, 0, 'Motor bike', 'Motor bike', 'Motor bike', 'Motor bike', 100, 1000, 1100, 0, 1, 'Other', NULL, '1', '1', 2, 1, 5, NULL, NULL, NULL, '../assets/img/product/1123.jpg', NULL, NULL, NULL, 1, 0, 0, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', '', NULL, NULL, NULL, 0, 1),
(36, 0, 'Motor bike2021', 'Motor bike', 'Motor bike', 'Motor bike', 100, 1000, 1100, 0, 100, NULL, NULL, 'w', 'w', 1, 1, 5, NULL, NULL, NULL, '../assets/img/product/1123.jpg', NULL, NULL, NULL, 3, 0, 0, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', '', NULL, NULL, NULL, 0, 1),
(37, 0, 'Motor 2030', 'Motor bike', 'Motor bike', 'Motor bike', 100, 1000, 1100, 0, 200, NULL, NULL, 'e', 'e', 2, 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 3, 0, 0, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', '', NULL, NULL, NULL, 0, 1),
(38, 0, 'Motor bike203030', 'Cars_BN2021', 'Motor bike', 'Motor bike', 100, 1000, 1100, 0, 300, NULL, NULL, '000', '200', 2, 1, 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 6, 0, 0, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', '', NULL, NULL, NULL, 0, 1),
(39, 0, 'women item', 'women item', 'item', 'item', 100, 1000, 1100, 0, 100, NULL, NULL, 'loremloremloremloremloremloremloremloremloremloremlorem', 'loremloremloremloremloremloremloremloremloremloremlorem', 1, 1, 33, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9, 0, 0, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', '', NULL, NULL, NULL, 0, 0),
(40, 0, 'women item2020', 'women item2020', 'women item2020', 'women item2020', 100, 1000, 1100, 0, 200, NULL, NULL, 'uuuuu', 'uuuuu', 2, 1, 21, NULL, NULL, NULL, '../assets/img/product/1130.jpg', NULL, NULL, NULL, 10, 0, 1, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', '', NULL, NULL, NULL, 0, 1),
(41, 0, 'Beuty Shop', 'Beuty Shop', NULL, NULL, 100, 1000, 1100, 0, 0, 'Beuty Shop', 'Beuty Shop', 'Beuty Shop', 'Beuty Shop', 0, 1, 0, NULL, NULL, NULL, '../assets/img/product/1123.jpg', NULL, NULL, NULL, 7, 1, 0, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', '', NULL, NULL, NULL, 0, 1),
(42, 0, 'Mobile', 'Mobile', NULL, NULL, 100, 1000, 1100, 0, 0, 'Mobile', 'Mobile', 'Mobile', 'Mobile', 0, 1, 0, NULL, NULL, NULL, '../assets/img/product/1123.jpg', NULL, NULL, NULL, 0, 1, 0, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', '', NULL, NULL, NULL, 0, 1),
(43, 10, 'Grils Model 25', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1125.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(44, 10, 'Grils Model 26', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1126.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(45, 10, 'Grils Model 27', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1127.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(46, 10, 'Grils Model 28', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1128.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(47, 10, 'Grils Model 29', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1129.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(48, 10, 'Grils Model 30', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1130.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(49, 10, 'Grils Model 31', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1131.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(50, 10, 'Grils Model 32', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1132.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(51, 10, 'Grils Model 33', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1133.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(52, 10, 'Grils Model 34', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1134.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(53, 10, 'Grils Model 35', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1135.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(54, 10, 'Grils Model 36', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1136.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(55, 10, 'Grils Model 37', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1137.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(56, 10, 'Grils Model 38', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1138.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(57, 10, 'Grils Model 39', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1139.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(58, 10, 'Grils Model 40', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1140.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1),
(59, 10, 'Grils Model 41', 'Grils Model', 'Indian', 'Indian', 100, 1000, 1100, 11, 10, 'SoundBox', 'Electronics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id labore, itaque dolore cupiditate vel, tempore minus doloremque perspiciatis, suscipit alias. Temporibus dolorem voluptas eaque distinctio velit ea quis voluptatum!', 'wwwwwwww', 2, 1, 10, '1', '2021-03-08 00:00:00', 'wwwww', '../assets/img/product/1141.jpg', '1111.jpg', '1111.jpg', '.jpg', 1, 0, 1, 0, 1, 1, 0, 0, '0000-00-00 00:00:00', 'Baby Item Category', 'star_rate', '1', '1', '2021-03-09 00:00:00', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ecom_product_images`
--

CREATE TABLE `ecom_product_images` (
  `Id` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `default_image` int(11) DEFAULT 0,
  `image_path` varchar(500) NOT NULL,
  `IsDelete` bit(1) NOT NULL,
  `Active` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_product_images`
--

INSERT INTO `ecom_product_images` (`Id`, `pid`, `image`, `default_image`, `image_path`, `IsDelete`, `Active`) VALUES
(3, 1, '3333.jpg', 1111, '../assets/img/product/1120.jpg', b'0', b'1'),
(4, 2, '4444.jpg', 2222, '../assets/img/product/1121.jpg', b'0', b'1'),
(6, 34, 'Bangabandhu-Risingbd-2103161750.jpg', 0, '', b'0', b'1'),
(7, 33, 'grain_image_bangabandhu20210129001643.jpg', 1, '', b'0', b'1'),
(9, 32, 'logo-bongo.png', 1, '', b'0', b'1'),
(10, 32, 'logo_all_it_.png', 1, '', b'0', b'1'),
(11, 5, 'logo_all_it_.jpg', 1, '', b'0', b'1'),
(22, 12, 'Bangabandhu.jpg', 1, '../assets/upload/product_images/Bangabandhu.jpg', b'0', b'1'),
(24, 13, '1150.jpg', 0, 'http://10.11.0.5:8000/upload/product_images/1150.jpg', b'0', b'1'),
(25, 13, '1111.jpg', 0, 'http://10.11.0.5:8000/upload/product_images/1111.jpg', b'0', b'1'),
(26, 13, '2222.jpg', 0, 'http://10.11.0.5:8000/upload/product_images/2222.jpg', b'0', b'1'),
(30, 6, '120000_gar.jpg', 0, 'http://10.11.0.5:8000/upload/product_images/120000_gar.jpg', b'0', b'1'),
(31, 6, '120000_jui.jpg', 0, 'http://10.11.0.5:8000/upload/product_images/120000_jui.jpg', b'0', b'1'),
(32, 6, '120000_man.jpg', 0, 'http://10.11.0.5:8000/upload/product_images/120000_man.jpg', b'0', b'1'),
(33, 6, '120000_det.jpg', 0, 'http://10.11.0.5:8000/upload/product_images/120000_det.jpg', b'0', b'1'),
(34, 40, 'se1.jpg', 0, 'http://10.11.0.5:8000/upload/product_images/se1.jpg', b'0', b'1'),
(35, 40, 'se2.jpg', 1, 'http://10.11.0.5:8000/upload/product_images/se2.jpg', b'0', b'1'),
(36, 40, 'se3.jpg', 0, 'http://10.11.0.5:8000/upload/product_images/se3.jpg', b'0', b'1'),
(37, 41, '1.jpg', 1, 'http://10.11.0.5:8000/upload/product_images/1.jpg', b'0', b'1'),
(38, 42, 'vxi reveal pro.jpg', 1, 'http://10.11.0.5:8000/upload/product_images/vxi reveal pro.jpg', b'0', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `ecom_roles`
--

CREATE TABLE `ecom_roles` (
  `Id` int(11) NOT NULL,
  `RoleId` int(11) NOT NULL,
  `RoleName` varchar(256) DEFAULT NULL,
  `RoleDescription` varchar(256) DEFAULT NULL,
  `Active` bit(1) DEFAULT NULL,
  `CreatedUser` varchar(100) DEFAULT NULL,
  `ModifiedUser` varchar(100) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `ModifiedDate` datetime DEFAULT NULL,
  `SystemInfo` varchar(50) DEFAULT NULL,
  `DepartmentId` int(11) DEFAULT NULL,
  `KeyResponsibilities` varchar(500) DEFAULT NULL,
  `EducationQualification` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_roles`
--

INSERT INTO `ecom_roles` (`Id`, `RoleId`, `RoleName`, `RoleDescription`, `Active`, `CreatedUser`, `ModifiedUser`, `CreatedDate`, `ModifiedDate`, `SystemInfo`, `DepartmentId`, `KeyResponsibilities`, `EducationQualification`) VALUES
(1, 1, 'Admin', 'wwwwwwwwwww', b'1', '11', '11', '2021-04-06 00:00:00', '2021-04-06 00:00:00', '11', 1, '1', '1'),
(2, 2, 'Oparator', 'wwwwwwwwwww', b'0', '11', '11', '2021-04-06 00:00:00', '2021-04-06 00:00:00', '11', 1, '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `ecom_serviceman`
--

CREATE TABLE `ecom_serviceman` (
  `Id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Phone` varchar(50) NOT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Address1` varchar(50) DEFAULT NULL,
  `Address2` varchar(50) DEFAULT NULL,
  `ContactPerson` varchar(50) DEFAULT NULL,
  `IsDelete` bit(1) NOT NULL,
  `Active` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_serviceman`
--

INSERT INTO `ecom_serviceman` (`Id`, `Name`, `Phone`, `Email`, `Address1`, `Address2`, `ContactPerson`, `IsDelete`, `Active`) VALUES
(1, 'Service Man', '01911788193', 'gmsanzid@gmail.com', '50000000', 'wwwwwwwwww', 'Delivery Man', b'0', b'1'),
(2, 'Service wemen', '01911788191', 'gmsanzid@gmail.com', 'wwwwwwwwww', 'wwwwwwwwww', 'General', b'0', b'1'),
(3, 'supply man', '01911788191', 'gmsanzid@gmail.com', 'ssssssssssss', NULL, 'Delivery Man', b'0', b'1'),
(4, 'supply man2', '01911788191', 'gmsanzid@gmail.com', 'ssssssssssss', NULL, 'Delivery Man', b'0', b'1'),
(5, 'supply man3', '01911788191', 'gmsanzid@gmail.com', 'xxxxxxxxxxxxx', NULL, 'Delivery Man', b'0', b'1'),
(6, 'supply man4', '01911788191', 'gmsanzid@gmail.com', 'vvvvvvvvvvvvvvvvvvvvvvvvvv', NULL, 'Delivery Man', b'0', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `ecom_settings`
--

CREATE TABLE `ecom_settings` (
  `Id` int(11) NOT NULL,
  `GID` int(11) DEFAULT NULL,
  `GText` varchar(255) DEFAULT NULL,
  `Code` varchar(255) DEFAULT NULL,
  `Text` varchar(255) DEFAULT NULL,
  `ImgPath` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `UpdateBy` varchar(255) DEFAULT NULL,
  `UpdateDate` datetime DEFAULT NULL,
  `IsDelete` tinyint(1) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_settings`
--

INSERT INTO `ecom_settings` (`Id`, `GID`, `GText`, `Code`, `Text`, `ImgPath`, `CreateBy`, `CreateDate`, `UpdateBy`, `UpdateDate`, `IsDelete`, `Active`) VALUES
(1, 8, 'wwwwwwww', '1000', '12000', NULL, '11', NULL, NULL, NULL, 0, 1),
(2, 9, 'VVVVVVVVV', '1000', '12000', NULL, '11', NULL, NULL, NULL, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ecom_shoppingcartdata`
--

CREATE TABLE `ecom_shoppingcartdata` (
  `Id` int(11) NOT NULL,
  `TempOrderID` int(11) NOT NULL,
  `PID` int(11) NOT NULL,
  `PName` varchar(50) NOT NULL,
  `UnitPrice` double NOT NULL,
  `Quantity` int(11) NOT NULL,
  `hostaddress` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ecom_size`
--

CREATE TABLE `ecom_size` (
  `Id` int(11) NOT NULL,
  `Size` varchar(255) NOT NULL,
  `Size_Bn` varchar(255) NOT NULL,
  `TrackedId` varchar(100) NOT NULL,
  `CreateBy` varchar(100) NOT NULL,
  `CreateDate` datetime NOT NULL,
  `IsDelete` bit(1) NOT NULL,
  `Active` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_size`
--

INSERT INTO `ecom_size` (`Id`, `Size`, `Size_Bn`, `TrackedId`, `CreateBy`, `CreateDate`, `IsDelete`, `Active`) VALUES
(1, 'N/A', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(2, 'M', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(3, 'XL', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(4, 'XXL', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(5, 'S', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `ecom_sizes`
--

CREATE TABLE `ecom_sizes` (
  `Id` int(11) NOT NULL,
  `PID` varchar(255) NOT NULL,
  `SizeId` int(11) NOT NULL,
  `Size` varchar(255) NOT NULL,
  `Size_Bn` varchar(255) NOT NULL,
  `TrackedId` varchar(100) NOT NULL,
  `CreateBy` varchar(100) NOT NULL,
  `CreateDate` datetime NOT NULL,
  `IsDelete` bit(1) NOT NULL,
  `Active` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_sizes`
--

INSERT INTO `ecom_sizes` (`Id`, `PID`, `SizeId`, `Size`, `Size_Bn`, `TrackedId`, `CreateBy`, `CreateDate`, `IsDelete`, `Active`) VALUES
(1, '13', 1, 'S', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(2, '13', 2, 'M', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(3, '13', 3, 'XL', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(4, '13', 4, 'XXL', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(5, '14', 1, 'S', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(6, '14', 2, 'M', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(7, '14', 3, 'XL', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(8, '14', 4, 'XXL', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(9, '15', 1, 'N/A', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1'),
(10, '16', 1, 'N/A', 'xl', '1', '1', '2021-03-09 00:00:00', b'0', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `ecom_suppliers`
--

CREATE TABLE `ecom_suppliers` (
  `Id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Phone` varchar(50) NOT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Address1` varchar(50) DEFAULT NULL,
  `Address2` varchar(50) DEFAULT NULL,
  `ContactPerson` varchar(50) DEFAULT NULL,
  `Status` int(11) DEFAULT NULL,
  `TrackedId` int(11) DEFAULT NULL,
  `CreateBy` varchar(11) DEFAULT NULL,
  `CreateDate` datetime NOT NULL,
  `IsDelete` tinyint(1) NOT NULL,
  `Active` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_suppliers`
--

INSERT INTO `ecom_suppliers` (`Id`, `Name`, `Phone`, `Email`, `Address1`, `Address2`, `ContactPerson`, `Status`, `TrackedId`, `CreateBy`, `CreateDate`, `IsDelete`, `Active`) VALUES
(1, 'Test Suplier', '01555555', 'gm@gmail.com', 'wwwww2021', 'wwwwwwwww', 'MR s', 1, 0, '', '0000-00-00 00:00:00', 0, b'1'),
(2, 'one ict limited', '01911788193', 'gmsanzid@gmail.com', 'wwwwwwww', 'w', 'Mr Maruf', 1, 0, '', '0000-00-00 00:00:00', 0, b'1'),
(3, 'wwwwwwwwwww', 'w', 'w', 'w', 'w', 'w', 1, 0, '', '0000-00-00 00:00:00', 0, b'0'),
(4, 'Hostrare Ltd', '01911788193', 'gmsanzid@gmail.com', 'r', 'undefined', 'r', 0, 0, '', '0000-00-00 00:00:00', 0, b'0'),
(5, 'Hostrare Ltd', '01911788193', 'gmsanzid@gmail.com', 'l', 'undefined', 'R', 0, 0, '', '0000-00-00 00:00:00', 0, b'0'),
(6, 'Hostrare Ltd', '01911788193', 'gmsanzid@gmail.com', 'wwwwwwwwwww', 'undefined', 'Mr. Y', 1, NULL, NULL, '0000-00-00 00:00:00', 0, b'0'),
(7, 'Hostrare Ltd', '01911788193', 'gmsanzid@gmail.com', 'wwwwwwwwwww', 'undefined', 'Mr. Y', 1, NULL, NULL, '0000-00-00 00:00:00', 0, b'0'),
(8, 'Hostrare Ltd', '01911788193', 'gmsanzid@gmail.com', 'wwwwwwww', 'undefined', 'Mr. Y', 1, NULL, NULL, '0000-00-00 00:00:00', 0, b'0'),
(9, 'Hostrare Limited', '01911788193', 'gmsanzid@gmail.com', 'wwwwww', 'undefined', 'Mr Evan Alom', 1, NULL, NULL, '0000-00-00 00:00:00', 0, b'0'),
(10, 'Hostrare Limited 2021', '01911788193', 'gmsanzid@gmail.com', 'n', 'undefined', 'Mr. Y', 1, NULL, NULL, '0000-00-00 00:00:00', 0, b'0'),
(11, 'Hostrare Limited  Test', '01911788193', 'gmsanzid@gmail.com', 'c', 'undefined', 'Mr. Y', 1, NULL, NULL, '0000-00-00 00:00:00', 0, b'0');

-- --------------------------------------------------------

--
-- Table structure for table `ecom_tasks`
--

CREATE TABLE `ecom_tasks` (
  `Id` int(11) NOT NULL,
  `TID` int(11) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Description` varchar(500) DEFAULT NULL,
  `Date` datetime DEFAULT NULL,
  `Time_from` varchar(255) DEFAULT NULL,
  `Time_to` varchar(255) DEFAULT NULL,
  `Location` varchar(500) DEFAULT NULL,
  `Notify` int(11) DEFAULT NULL,
  `Email` varchar(500) DEFAULT NULL,
  `Priority` int(11) DEFAULT NULL,
  `TrackedId` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `IsDelete` bit(1) DEFAULT NULL,
  `Active` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ecom_users`
--

CREATE TABLE `ecom_users` (
  `Id` int(11) NOT NULL,
  `UID` int(11) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Phone` varchar(100) NOT NULL,
  `RoleId` int(11) NOT NULL,
  `Username` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `FileUrl` varchar(255) DEFAULT NULL,
  `FileExtension` varchar(255) DEFAULT NULL,
  `FileImage` varchar(255) DEFAULT NULL,
  `Birthday` datetime DEFAULT NULL,
  `TrackedId` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `Delete` tinyint(1) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ecom_users`
--

INSERT INTO `ecom_users` (`Id`, `UID`, `Name`, `Email`, `Phone`, `RoleId`, `Username`, `Password`, `FileUrl`, `FileExtension`, `FileImage`, `Birthday`, `TrackedId`, `CreateBy`, `CreateDate`, `Delete`, `Active`) VALUES
(1, 1, 'Mintu 2021', 'mintu@gmail.com', '01911788193', 2, 'admin@gmail.com', '123456', '1111.jpg', '.jpg', NULL, '2021-03-31 00:00:00', '1111', NULL, NULL, 0, 1),
(2, 1, 'Mintu', 'mintu@gmail.com', '01911788193', 1, 'admin@gmail.com', '123456', '1111.jpg', '.jpg', NULL, '2021-03-31 00:00:00', '1111', NULL, NULL, 0, 1),
(3, NULL, 'Sarour', 'gmsanzid@gmail.com', '01911788191', 2, 'gmsanzid@gmail.com', '654321', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(4, NULL, 'Sarour2', 'gmsanzid@gmail.com', '01911788191', 1, 'gmsanzid@gmail.com', '654321', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(5, NULL, 'Test User', 'admin@gmail.com', '01911788191', 2, 'gmsanzid@gmail.com', '654321', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(6, NULL, 'Mintu_2020', 'gmsanzid@gmail.com', '01911788191', 1, 'gmsanzid@gmail.com', '6543210', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(7, NULL, 'Sarour22', 'gmsanzid@gmail.com', '01911788191', 1, 'gmsanzid@gmail.com', '6543210', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ecom_user_informations`
--

CREATE TABLE `ecom_user_informations` (
  `Id` int(11) NOT NULL,
  `UID` int(11) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Username` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `FileUrl` varchar(255) DEFAULT NULL,
  `FileExtension` varchar(255) DEFAULT NULL,
  `FileImage` varchar(255) DEFAULT NULL,
  `Birthday` datetime DEFAULT NULL,
  `TrackedId` varchar(255) DEFAULT NULL,
  `CreateBy` varchar(255) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `IsDelete` bit(1) DEFAULT NULL,
  `Active` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ecom_banners`
--
ALTER TABLE `ecom_banners`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_brands`
--
ALTER TABLE `ecom_brands`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_carts`
--
ALTER TABLE `ecom_carts`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_color`
--
ALTER TABLE `ecom_color`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_colors`
--
ALTER TABLE `ecom_colors`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_customers`
--
ALTER TABLE `ecom_customers`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `CID` (`CID`);

--
-- Indexes for table `ecom_features`
--
ALTER TABLE `ecom_features`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_flashes`
--
ALTER TABLE `ecom_flashes`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_flash_details`
--
ALTER TABLE `ecom_flash_details`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_menu`
--
ALTER TABLE `ecom_menu`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_menuroles`
--
ALTER TABLE `ecom_menuroles`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_menus`
--
ALTER TABLE `ecom_menus`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_menu_baks`
--
ALTER TABLE `ecom_menu_baks`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_offers`
--
ALTER TABLE `ecom_offers`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_orderdetails`
--
ALTER TABLE `ecom_orderdetails`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_orders`
--
ALTER TABLE `ecom_orders`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_products`
--
ALTER TABLE `ecom_products`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_product_images`
--
ALTER TABLE `ecom_product_images`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_roles`
--
ALTER TABLE `ecom_roles`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_serviceman`
--
ALTER TABLE `ecom_serviceman`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_settings`
--
ALTER TABLE `ecom_settings`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_shoppingcartdata`
--
ALTER TABLE `ecom_shoppingcartdata`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_size`
--
ALTER TABLE `ecom_size`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_sizes`
--
ALTER TABLE `ecom_sizes`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_suppliers`
--
ALTER TABLE `ecom_suppliers`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_tasks`
--
ALTER TABLE `ecom_tasks`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_users`
--
ALTER TABLE `ecom_users`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ecom_user_informations`
--
ALTER TABLE `ecom_user_informations`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ecom_banners`
--
ALTER TABLE `ecom_banners`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `ecom_brands`
--
ALTER TABLE `ecom_brands`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ecom_carts`
--
ALTER TABLE `ecom_carts`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ecom_color`
--
ALTER TABLE `ecom_color`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ecom_colors`
--
ALTER TABLE `ecom_colors`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `ecom_customers`
--
ALTER TABLE `ecom_customers`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `ecom_features`
--
ALTER TABLE `ecom_features`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ecom_flashes`
--
ALTER TABLE `ecom_flashes`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `ecom_flash_details`
--
ALTER TABLE `ecom_flash_details`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `ecom_menu`
--
ALTER TABLE `ecom_menu`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ecom_menuroles`
--
ALTER TABLE `ecom_menuroles`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ecom_menus`
--
ALTER TABLE `ecom_menus`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ecom_menu_baks`
--
ALTER TABLE `ecom_menu_baks`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ecom_offers`
--
ALTER TABLE `ecom_offers`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ecom_orderdetails`
--
ALTER TABLE `ecom_orderdetails`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=442;

--
-- AUTO_INCREMENT for table `ecom_orders`
--
ALTER TABLE `ecom_orders`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT for table `ecom_products`
--
ALTER TABLE `ecom_products`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `ecom_product_images`
--
ALTER TABLE `ecom_product_images`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `ecom_roles`
--
ALTER TABLE `ecom_roles`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ecom_serviceman`
--
ALTER TABLE `ecom_serviceman`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ecom_settings`
--
ALTER TABLE `ecom_settings`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ecom_shoppingcartdata`
--
ALTER TABLE `ecom_shoppingcartdata`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ecom_size`
--
ALTER TABLE `ecom_size`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ecom_sizes`
--
ALTER TABLE `ecom_sizes`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `ecom_suppliers`
--
ALTER TABLE `ecom_suppliers`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `ecom_tasks`
--
ALTER TABLE `ecom_tasks`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ecom_users`
--
ALTER TABLE `ecom_users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ecom_user_informations`
--
ALTER TABLE `ecom_user_informations`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
