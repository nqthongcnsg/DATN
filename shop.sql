-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 27, 2022 at 04:53 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
CREATE TABLE IF NOT EXISTS `brand` (
  `idBrand` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci NOT NULL,
  `nameBrand` varchar(100) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  PRIMARY KEY (`idBrand`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`idBrand`, `nameBrand`) VALUES
('b1', 'Roadstar'),
('b2', 'Levis'),
('b3', 'Persol\r\n'),
('b4', 'Nike');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `idCategories` varchar(20) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `nameCategories` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci NOT NULL,
  PRIMARY KEY (`idCategories`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`idCategories`, `nameCategories`) VALUES
('c1', 'Nam'),
('c2', 'Nữ'),
('c3', 'Trẻ em'),
('Z0ILcV', 'Nam và nữ');

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
CREATE TABLE IF NOT EXISTS `chat` (
  `id` varchar(30) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `idAcount` varchar(50) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `message` varchar(255) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `time` varchar(100) NOT NULL,
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `success` varchar(10) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `trangthai` varchar(20) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`id`, `idAcount`, `message`, `time`, `type`, `success`, `trangthai`) VALUES
('dadfsdf', 'quangthong1610@gmail.com', 'TTO - Theo quy định mới của Bộ Chính trị,adasdasdas', '17:16:54', 'user', 'success', ''),
('adasdasdasdasd', 'quangthong1610@gmail.com', 'Review một món mà uống được cả ngày lẫn đêm đi Gong Cha!\r\nXin phép giấu tên món ', '17:16:54', 'admin', 'success', ''),
('adasfafadfa', 'quangthong1610@gmail.com', 'Review một món mà uống được cả ngày lẫn đêm đi Gong Cha!\r\nXin phép giấu tên món  sợ nói bạn lại si mê thì phải làm sao? ', '17:19:11', 'user', 'success', ''),
('ádasd', 'quangthong1610@gmail.com', 'ádasdasdasdasdasd', '17:19:11', 'admin', 'success', ''),
('àdafafasf', 'quangthong1610@gmail.com', 'ádfasdasdasdasdasdasdasdas', '18:53:40', 'user', 'success', ''),
('đâsd', 'quangthong1610@gmail.com', 'đâsdasdasdadsasd', '20:55:33', 'user', 'success', ''),
('fFy8vR', 'quangthong1610@gmail.com', 'asdadasd', '22:57:31', 'user', 'success', ''),
('Az15u7', 'quangthong1610@gmail.com', 'asdasd', '22:58:11', 'user', 'success', ''),
('ruPundefinedNj', 'quangthong1610@gmail.com', 'sdasd', '23:13:32', 'user', 'success', ''),
('nvrHmj', 'quangthong1610@gmail.com', '123', '23:13:47', 'user', 'success', ''),
('dWr7YN', 'quangthong1610@gmail.com', 'fsdf', '23:18:30', 'user', 'success', ''),
('qrweas', 'dh51802374@student.stu.edu.vn', 'ádasdasd', '17:18:21', 'user', 'success', ''),
('sgfgfa', 'tranvannhat1505@gmail.com', 'ádasdasdasdas', '17:18:21', 'user', 'success', ''),
('ưewew', 'dh51801707@student.stu.edu.vn', 'ádfgfghdfgwerfcacasdsad', '21:12:14', 'user', 'success', ''),
('e4LnMd', 'quangthong1610@gmail.com', 'ádasd', '10:52:49', 'admin', 'success', ''),
('VsPtWR', 'quangthong1610@gmail.com', 'Chào bạn, shop có thể giúp được gì cho bạn ạ', '10:53:36', 'admin', 'success', ''),
('uG46eV', 'quangthong1610@gmail.com', 'cho mình hỏi là shop ban những thứ gì vậy ạ', '10:54:10', 'user', 'success', ''),
('b2T8Tk', 'quangthong1610@gmail.com', 'Đố bạn biết shop ban cái gì', '10:57:6', 'admin', 'success', ''),
('cQfC05', 'quangthong1610@gmail.com', 'alo alo', '11:56:1', 'user', 'success', ''),
('wOArlU', 'dh51802374@student.stu.edu.vn', 'chào bạn', '14:45:18', 'admin', 'success', ''),
('ToGkjk', 'quangthong1610@gmail.com', '123456', '16:13:55', 'user', 'success', ''),
('0vGHch', 'quangthong1610@gmail.com', 'đâsdsad', '16:14:20', 'admin', 'success', ''),
('K0KKM0', 'quangthong1610@gmail.com', '', '16:15:57', 'user', 'success', ''),
('451IPw', 'quangthong1610@gmail.com', 'tyigiub', '16:16:13', 'user', 'success', ''),
('VgBCnt', 'quangthong1610@gmail.com', 'ẻqadasdasdasdsa', '14:21:31', 'user', 'success', ''),
('gE7J1s', 'quang@gmail.com', 'hello', '9:10:21', 'user', 'success', ''),
('AsGkz4', 'quangthong.com', 'alo', '17:2:44', 'user', 'success', ''),
('ssREAS', 'quangthong@gmail.com', 'helo', '19:3:53', 'user', 'success', ''),
('lNghj4', 'quangthong@gmail.com', 'chào bạn', '19:4:11', 'admin', 'success', ''),
('lIQCpH', 'quangthong1610@gmail.com', 'hello', '12:11:1', 'user', 'success', 'Đã xem'),
('qU8P87', 'quangthong1610@gmail.com', '456+', '13:5:59', 'user', 'success', 'Đã xem'),
('mQundefinedWFE', 'quangthong1610@gmail.com', '789', '13:6:36', 'user', 'success', 'Đã xem'),
('XiYJxP', 'quangthong1610@gmail.com', '79845', '13:7:9', 'user', 'success', 'Đã xem'),
('EvDA8X', 'quangthong1610@gmail.com', 'adasd', '13:12:15', 'admin', 'success', 'Đã xem'),
('omN1lZ', 'quangthong1610@gmail.com', 'sdasd', '13:13:26', 'user', 'success', 'Đã xem'),
('rqLgSJ', 'quangthong1610@gmail.com', 'ád', '13:14:13', 'admin', 'success', 'Đã xem'),
('VHCihm', 'quangthong1610@gmail.com', 'hello', '13:14:39', 'user', 'success', 'Đã xem'),
('80igDI', 'quangthong@gmail.com', 'hello you', '23:1:45', 'user', 'success', 'Đã xem'),
('HAQqZy', 'quangthong160@gmail.com', 'hello', '9:47:53', 'user', 'success', 'Đã xem'),
('1iXnNg', 'quangthong160@gmail.com', 'holll', '9:48:11', 'admin', 'success', 'Đã xem'),
('undefinedGQmTu', 'quangthong160@gmail.com', 'hello', '9:48:36', 'user', 'success', 'Đã xem');

-- --------------------------------------------------------

--
-- Table structure for table `chitiethd`
--

DROP TABLE IF EXISTS `chitiethd`;
CREATE TABLE IF NOT EXISTS `chitiethd` (
  `machitiet` int(11) NOT NULL AUTO_INCREMENT,
  `mahd` varchar(100) NOT NULL,
  `idProduct` varchar(20) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `soluong` int(11) NOT NULL,
  `gia` float NOT NULL,
  `size` varchar(10) NOT NULL,
  PRIMARY KEY (`machitiet`)
) ENGINE=MyISAM AUTO_INCREMENT=194 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chitiethd`
--

INSERT INTO `chitiethd` (`machitiet`, `mahd`, `idProduct`, `soluong`, `gia`, `size`) VALUES
(192, 'dh51801707@student.stu.edu.vnPoT4kB', 'AKltLm', 1, 135, 'S'),
(193, 'dh51801707@student.stu.edu.vnaf3STK', 'sPZvpa', 4, 75, 'S'),
(191, 'dh51801707@student.stu.edu.vnPoT4kB', 'VNmxXQ', 1, 125, 'S'),
(147, 'quangthong1610@gmail.comKFpVyp', 'Wcc0Hn', 1, 97, 'S'),
(148, 'quangthong1610@gmail.comundefinedSsNug', 'AYr61X', 1, 150, 'S'),
(146, 'quangthong1610@gmail.comDnEuND', 'AYr61X', 3, 0, 'S'),
(145, 'quangthong1610@gmail.comz7Sjf8', '7rdTyP', 4, 125, 'S'),
(144, 'quangthong1610@gmail.comundefinedaDbP4', 'hSS4vC', 3, 124, 'S'),
(143, 'quangthong1610@gmail.comD2RWSM', 'AKltLm', 2, 135, 'S'),
(142, 'quangthong1610@gmail.comD2RWSM', 'jDr1mB', 3, 100, 'S'),
(141, 'quangthong1610@gmail.com7rHEKi', 'AYr61X', 3, 150, 'S'),
(140, 'quangthong1610@gmail.com7rHEKi', '9uknfx', 4, 123, 'S'),
(139, 'quangthong110@gmail.comO83aH3', 'NLFmvp', 3, 75, 'S'),
(138, 'quangthong110@gmail.comdiGlOj', 'AYr61X', 3, 150, 'L'),
(174, 'dh51801707@student.stu.edu.vndfz2IN', 'VNmxXQ', 2, 125, 'S'),
(175, 'dh51801707@student.stu.edu.vn7cnzJE', 'hSS4vC', 1, 124, 'S'),
(176, 'dh51801707@student.stu.edu.vn5VQ1ac', 'hTnpvA', 1, 125, 'S'),
(177, 'dh51801707@student.stu.edu.vn5VQ1ac', 'hSS4vC', 1, 124, 'S'),
(178, 'dh51801707@student.stu.edu.vnWkN6Dc', '9uknfx', 1, 123, 'S'),
(179, 'dh51801707@student.stu.edu.vnmivgoX', 'NLFmvp', 3, 75, 'S'),
(180, 'dh51801707@student.stu.edu.vnYsjl4o', 'Wcc0Hn', 3, 97, 'S'),
(181, 'dh51801707@student.stu.edu.vnqX3QSf', 'NLFmvp', 3, 75, 'S'),
(182, 'dh51801707@student.stu.edu.vnuApq32', 'sPZvpa', 1, 75, 'S'),
(183, 'quangthong1610@gmail.comQ4o0If', 'AKltLm', 3, 135, 'S'),
(184, 'quangthong1610@gmail.comQ4o0If', 'Wcc0Hn', 1, 97, 'S'),
(185, 'tranvannhat1505@gmail. comYG9gwp', 'hTnpvA', 1, 125, 'S'),
(186, 'maitrinh28112000@gmail.comWWCZxr', 'KPiNUO', 1, 125, 'S'),
(187, 'quangthong1610@gmail.comE4sgVn', 'jDr1mB', 2, 100, 'S'),
(188, 'quangthong1610@gmail.comE4sgVn', '7rdTyP', 1, 125, 'S'),
(189, 'quangthong1610@gmail.comI8rWCz', 'sPZvpa', 1, 75, 'S'),
(190, 'quangthong1610@gmail.comdbFAA6', 'NLFmvp', 1, 75, 'S');

-- --------------------------------------------------------

--
-- Table structure for table `discount`
--

DROP TABLE IF EXISTS `discount`;
CREATE TABLE IF NOT EXISTS `discount` (
  `idDiscount` varchar(20) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `nameDiscount` varchar(100) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  PRIMARY KEY (`idDiscount`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `discount`
--

INSERT INTO `discount` (`idDiscount`, `nameDiscount`) VALUES
('d1', 'Upto - 10%'),
('d2', '40% - 50%'),
('d3', '30% - 20%'),
('d4', '10% - 5%'),
('d6', 'khác'),
('cfaews', 'Discount 100%');

-- --------------------------------------------------------

--
-- Table structure for table `giohang`
--

DROP TABLE IF EXISTS `giohang`;
CREATE TABLE IF NOT EXISTS `giohang` (
  `masp` int(11) NOT NULL AUTO_INCREMENT,
  `idProduct` varchar(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `gia` int(11) NOT NULL,
  `size` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`masp`)
) ENGINE=MyISAM AUTO_INCREMENT=208 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

DROP TABLE IF EXISTS `hoadon`;
CREATE TABLE IF NOT EXISTS `hoadon` (
  `mahd` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `ngayhd` varchar(50) NOT NULL,
  `tennguoinhan` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `diachinguoinhan` varchar(80) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ngaynhan` varchar(50) NOT NULL,
  `dienthoai` varchar(10) NOT NULL,
  `trangthai` varchar(50) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `thanhtoan` varchar(50) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  PRIMARY KEY (`mahd`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hoadon`
--

INSERT INTO `hoadon` (`mahd`, `email`, `ngayhd`, `tennguoinhan`, `diachinguoinhan`, `ngaynhan`, `dienthoai`, `trangthai`, `thanhtoan`) VALUES
('dh51801707@student.stu.edu.vnaf3STK', 'dh51801707@student.stu.edu.vn', '27-7-2022 23:53:9', 'Nguyễn Quang Thông', '1087B Phạm Thế Hiển , Phường 5, Quận 8', '3-8-2022', '0339647045', 'Chờ xác nhận', 'thanhtoan');

-- --------------------------------------------------------

--
-- Table structure for table `kho`
--

DROP TABLE IF EXISTS `kho`;
CREATE TABLE IF NOT EXISTS `kho` (
  `idProduct` varchar(50) NOT NULL,
  `soluong` int(11) NOT NULL,
  PRIMARY KEY (`idProduct`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kho`
--

INSERT INTO `kho` (`idProduct`, `soluong`) VALUES
('Wcc0Hn', 81),
('9uknfx', 219),
('AYr61X', 37),
('VNmxXQ', 153),
('7rdTyP', 88),
('KPiNUO', 77),
('hTnpvA', 92),
('sPZvpa', 85),
('hSS4vC', 79),
('NLFmvp', 80),
('AKltLm', 88),
('dao7eL', 4);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `idProduct` varchar(20) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `namProduct` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci NOT NULL,
  `priceOld` int(11) NOT NULL,
  `priceNew` int(11) NOT NULL,
  `idType` varchar(20) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `idDiscount` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci NOT NULL,
  `idBrand` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci NOT NULL,
  `idCategories` varchar(20) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `des` longtext CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `image` longtext NOT NULL,
  PRIMARY KEY (`idProduct`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`idProduct`, `namProduct`, `priceOld`, `priceNew`, `idType`, `idDiscount`, `idBrand`, `idCategories`, `des`, `image`) VALUES
('Wcc0Hn', 'Bộ quần áo Bóng rổ  Bulbal Predator II', 150, 97, 't3', 'd3', 'b1', 'c2', '', '{\"images\":[\"uploads\\\\images\\\\1656168915448-DoBongRo1.jpg\",\"uploads\\\\images\\\\1656168915467-DoBongRo2.jpg\",\"uploads\\\\images\\\\1656168915503-DoBongRo3.jpg\"]}'),
('AYr61X', 'Bộ quần áo ADIDAS danh cho nữ', 200, 150, 't4', 'd1', 'b7', 'c2', 'qqqqqqqqqqqqqqq', '{\"images\":[\"uploads\\\\images\\\\1654577390732-DoAdidas1.jpg\",\"uploads\\\\images\\\\1654577390735-DoAdidas2.jpg\",\"uploads\\\\images\\\\1654577390736-DoAdidas3.jpg\"]}'),
('VNmxXQ', 'Bộ quần áo giữ nhiệt trẻ em', 150, 125, 't1', 'd2', 'b1', 'c3', '', '{\"images\":[\"uploads\\\\images\\\\1654675421627-product10.jpg\",\"uploads\\\\images\\\\1654675421628-product11.jpg\"]}'),
('KPiNUO', 'Bộ quần áo thể thao ngắn tay cho nữ', 200, 125, 't1', 'd1', 'b1', 'c2', 'qqqqqqqqqqqq', '{\"images\":[\"uploads\\\\images\\\\1654577236830-DoBoAoTayNgan1.jpg\",\"uploads\\\\images\\\\1654577236834-DoBoAoTayNgan2.jpg\",\"uploads\\\\images\\\\1654577236835-DoBoAoTayNgan3.jpg\"]}'),
('9uknfx', 'Áo thun cho nữ', 156, 123, 't6', 'd4', 'b4', 'c2', 'bbbbbbbbbbb', '{\"images\":[\"uploads\\\\images\\\\1654577171173-AnThunNu3.jpg\",\"uploads\\\\images\\\\1654577171174-AoThunNu1.jpg\",\"uploads\\\\images\\\\1654577171175-AoThunNu2.jpg\"]}'),
('dao7eL', 'Áo thun sọc ngang dành cho nữ', 75, 50, 't1', 'd1', 'b1', 'c2', 'Áo thun với vải làm từ cotton , chất vải mềm, mặc thoáng mát', '{\"images\":[\"uploads\\\\images\\\\1657467595174-si.jpg\",\"uploads\\\\images\\\\1657467595175-si1.jpg\",\"uploads\\\\images\\\\1657467595176-si2.jpg\"]}'),
('jDr1mB', 'bbbbb', 125, 100, 't1', 'd1', 'b1', 'c1', '', '{\"images\":[\"uploads\\\\images\\\\1658371258415-product2.jpg\",\"uploads\\\\images\\\\1658371258422-product3.jpg\",\"uploads\\\\images\\\\1658371258428-product4.jpg\"]}'),
('hTnpvA', 'Áo thể thao AC xanh Copan', 155, 125, 't1', 'd1', 'b1', 'c2', 'aaaaaaaaaaaa', '{\"images\":[\"uploads\\\\images\\\\1654576869786-DoAdidas3.jpg\"]}'),
('sPZvpa', 'Bộ thun thể thao tay ngắn phối viền sọc', 100, 75, 't6', 'd1', 'b1', 'c2', 'Bộ thun thể thao tay ngắn phối viền sọc', '{\"images\":[\"uploads\\\\images\\\\1654576390693-product1.jpg\"]}'),
('hSS4vC', 'Bộ quần áo thể thao nữ dài tay cao cấp ', 200, 124, 't1', 'd2', 'b1', 'c2', 'qưeqwe', '{\"images\":[\"uploads\\\\images\\\\1654576643518-DoBoDaiTayNu2.jpg\",\"uploads\\\\images\\\\1654576643524-DoBoDaiTayNu3.jpg\",\"uploads\\\\images\\\\1654576643526-product2.jpg\"]}'),
('7rdTyP', 'Bộ đồ thể thao nam cao cấp', 150, 125, 't1', 'd1', 'b1', 'c1', 'qqqqqqqqqqqqq', '{\"images\":[\"uploads\\\\images\\\\1654576746521-DoBoNam3.jpg\",\"uploads\\\\images\\\\1654576746523-DoNamGym3.jpg\",\"uploads\\\\images\\\\1654576746524-product3.jpg\"]}'),
('NLFmvp', 'SET THỂ THAO MÃ SỐ BB371', 100, 75, 't1', 'd1', 'b1', 'c1', 'SET THỂ THAO MÃ SỐ BB371 là một trong những set đồ phổ biến nhất cho nam giới. SET THỂ THAO MÃ SỐ BB371 tại gymfashion thường được thiết kế ngắn tay. Đa phần nam giới thích loại ngắn tay hơn vì nó tiện dụng hơn. Khi mặc, tùy theo sở thích bạn có thể mặc áo thun cổ tròn theo phong cách tập gym cho thoải mái.', '{\"images\":[\"uploads\\\\images\\\\1654576097924-DoBoNam1.jpg\",\"uploads\\\\images\\\\1654576097928-DoBoNam2.jpg\",\"uploads\\\\images\\\\1654576097935-DoBoNam3.jpg\"]}'),
('AKltLm', 'Đồ thể thao ngắn dành cho nữ', 165, 135, 't1', 'd1', 'b1', 'c2', 'sdaaaaaaa', '{\"images\":[\"uploads\\\\images\\\\1654577600149-DoBoQuanNganNu1.jpg\",\"uploads\\\\images\\\\1654577600152-DoBoQuanNganNu2.jpg\",\"uploads\\\\images\\\\1654577600168-DoBoQuanNganNu3.jpg\"]}');

-- --------------------------------------------------------

--
-- Table structure for table `quantri`
--

DROP TABLE IF EXISTS `quantri`;
CREATE TABLE IF NOT EXISTS `quantri` (
  `username` varchar(30) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `ten` varchar(100) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `quyen` int(11) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quantri`
--

INSERT INTO `quantri` (`username`, `pass`, `ten`, `quyen`) VALUES
('quantri', '781e5e245d69b566979b86e28d23f2c7', 'Nguyễn Quang Thông', 1);

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `idType` varchar(20) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `nameType` varchar(100) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  PRIMARY KEY (`idType`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`idType`, `nameType`) VALUES
('t1', 'Bền bỉ'),
('t2', 'Túi'),
('t3', 'Mũ và nón'),
('t4', 'Áó khoác'),
('t5', 'Quần jean'),
('t6', 'Áo sơ mi');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `email` varchar(50) NOT NULL,
  `matkhau` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ten` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `diachi` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `dienthoai` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `avatar` longtext NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`email`, `matkhau`, `ten`, `diachi`, `dienthoai`, `avatar`) VALUES
('dh51801707@student.stu.edu.vn', 'e10adc3949ba59abbe56e057f20f883e', 'Nguyễn Quang Thông', '1087B Phạm Thế Hiển , Phường 5, Quận 8', '0339647045', '{\"images\":[\"uploads\\\\images\\\\1658925601638-face12.jpg\"]}'),
('hung.tranvan@stu.edu.vn', 'e10adc3949ba59abbe56e057f20f883e', 'Thầy Hùng', '180 Cao Lỗ , P4, Q.8', '0123456789', '{\"images\":[\"uploads\\\\images\\\\1658940604127-face16.jpg\"]}');

-- --------------------------------------------------------

--
-- Table structure for table `zise`
--

DROP TABLE IF EXISTS `zise`;
CREATE TABLE IF NOT EXISTS `zise` (
  `idSize` varchar(11) NOT NULL,
  `nameSize` varchar(10) NOT NULL,
  PRIMARY KEY (`idSize`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `zise`
--

INSERT INTO `zise` (`idSize`, `nameSize`) VALUES
('1', 'S'),
('2', 'M'),
('3', 'L'),
('4', 'XL');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
