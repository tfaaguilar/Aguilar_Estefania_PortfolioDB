-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 06, 2024 at 08:04 PM
-- Server version: 5.7.39
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: port_class
--

-- --------------------------------------------------------

--
-- Table structure for table media
--

CREATE TABLE media (
  id int(11) NOT NULL,
  project_id int(11) DEFAULT NULL,
  image_filename varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table media
--

INSERT INTO media (id, project_id, image_filename) VALUES
(1, 1, 'image1a.png\r\n'),
(2, 1, 'image1b.png'),
(3, 1, 'image1c.png'),
(4, 2, 'image2a.png'),
(5, 2, 'image2b.png'),
(6, 2, 'image2c.png'),
(7, 3, 'image3a.png'),
(8, 3, 'image3b.png'),
(9, 3, 'image3c.png');

-- --------------------------------------------------------

--
-- Table structure for table projects
--

CREATE TABLE projects (
  id int(11) NOT NULL,
  title varchar(255) NOT NULL,
  description text,
  image_url varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table projects
--

INSERT INTO projects (id, title, description, image_url) VALUES
(1, 'Project 1', 'Description for Project 1', 'project1_thumb.png'),
(2, 'Project 2', 'Description for Project 2', 'project2_thumb.png'),
(3, 'Project 3', 'Description for Project 3', 'project3_thumb.png'),
(4, 'Example Project 4', 'Some Stuff', 'image3b.png'),
(5, 'project 5', 'dvdfvfd', ' dsvdv');

--
-- Indexes for dumped tables
--

--
-- Indexes for table media
--
ALTER TABLE media
  ADD PRIMARY KEY (id),
  ADD KEY project_id (project_id);

--
-- Indexes for table projects
--
ALTER TABLE projects
  ADD PRIMARY KEY (id);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table media
--
ALTER TABLE media
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table projects
--
ALTER TABLE projects
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table media
--
ALTER TABLE media
  ADD CONSTRAINT media_ibfk_1 FOREIGN KEY (project_id) REFERENCES projects (id);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
