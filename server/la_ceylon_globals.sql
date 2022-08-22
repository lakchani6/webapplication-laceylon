-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 21, 2022 at 03:43 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `la_ceylon_globals`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `itemId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `price` varchar(200) NOT NULL,
  `quantityAvailable` int(11) NOT NULL,
  `coverImage` varchar(200) NOT NULL,
  PRIMARY KEY (`itemId`),
  UNIQUE KEY `itemId` (`itemId`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`itemId`, `name`, `price`, `quantityAvailable`, `coverImage`) VALUES
(1, 'Cinamon', 'Rs. 800/-', 25, 'la_ceylon_globals_1.jpg'),
(2, 'Turmeric Powder', 'Rs. 500/-', 25, 'la_ceylon_globals_2.jpg'),
(3, 'Black Peppers', 'Rs. 1500/-', 25, 'la_ceylon_globals_3.jpg'),
(4, 'Curry Leaf', 'Rs. 1600/-', 25, 'la_ceylon_globals_4.jpg'),
(5, 'Cloves', 'Rs. 400/-', 25, 'la_ceylon_globals_5.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `odr`
--

DROP TABLE IF EXISTS `odr`;
CREATE TABLE IF NOT EXISTS `odr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itm_name` varchar(100) NOT NULL,
  `qty` int(11) NOT NULL,
  `total` double NOT NULL,
  `address` varchar(300) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `contact` char(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `odr`
--

INSERT INTO `odr` (`id`, `itm_name`, `qty`, `total`, `address`, `date`, `contact`) VALUES
(13, 'Cinamon', 2, 1600, 'Thakshara, Sri Lanka', '2022-08-21 19:15:40', '0776591828'),
(14, 'Turmeric Powder', 3, 1500, 'Thakshara, Sri Lanka', '2022-08-21 19:15:40', '0776591828');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `id_brp` varchar(200) NOT NULL,
  `postalCode` int(11) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `userName` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userId` (`userId`),
  UNIQUE KEY `id_brp` (`id_brp`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `name`, `id_brp`, `postalCode`, `phoneNumber`, `userName`, `password`) VALUES
(1, 'user', '1234', 20500, '0771771893', 'venura', '1234');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
