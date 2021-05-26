-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: bck
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userNameId` int NOT NULL,
  `descr` varchar(250) NOT NULL,
  `createdAt` date NOT NULL,
  `link` varchar(250) NOT NULL,
  `vendorId` int NOT NULL,
  `photoLink` varchar(250) DEFAULT NULL,
  `hashTags` varchar(150) NOT NULL,
  `discount` int NOT NULL,
  `validUntil` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_idx` (`userNameId`),
  KEY `fk_vendors_idx` (`vendorId`),
  CONSTRAINT `fk_users` FOREIGN KEY (`userNameId`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_vendors` FOREIGN KEY (`vendorId`) REFERENCES `vendors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES '1', '1', 'BMW X5', '2020-04-14', 'https://www.bmw.by/ru/', '1', 'https://www.bmw.by/content/dam/bmw/common/all-models/x-series/x5/2018/at-a-glance/bmw-g05-x5-onepager-stage-sp-xxl.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1569992884125.jpg', '["BMW", New_style, Sport, OffRoad]', '15', '2022-04-14'),('2', '2', 'Mersedes', '2021-02-15', 'https://www.mercedes-benz.by/ru/desktop/home.html', '2', 'https://oir.mobi/uploads/posts/2019-12/1575860099_17-34.jpg', '[Mersedes, New_style, Sport, Modern]', '10', '2021-04-01'), ('3', '3', 'Geely', '2021-03-10', 'https://geely.atlantm.by/?utm_source=yandex&utm_medium=cpc&utm_content=8827790032&utm_term=geely%20джили&utm_campaign=Geely_Brand_Yandex_Search&yclid=2362249578115786592', '1', 'https://quest-auto.ru/img/Geely-Emgrand-X7-14.jpg', '[Geely, loan, Sale50, pensioner_auto]', '15', '2021-04-10'),('4', '4', 'Geely Emgrand GT 2020', '2021-01-15', 'https://cenyavto.com/dzhili-emgrand-gt-2020/', '3', 'https://i.cenyavto.com/2020/02/c81e728d9d4c2f636f067f89cc14862c-6-1068x932.jpeg', '[Geely, loan, Sport, pensioner_auto]', '12', '2021-06-25'),('5', '5', 'Mersedes', '2021-03-20', 'https://mbbelarus.by/s-class/', '5', 'https://i.ytimg.com/vi/8gOZ2YpoOAM/maxresdefault.jpg', '[Mersedes, New_style, S-class, Modern]', '12', '2021-06-29'),('6', '6', 'Mercedes-Benz Sprinter', '2020-03-15', 'https://www.mercedes-benz.by/vans/ru/sprinter/panel-van', '4', 'https://luxurylaunches.com/wp-content/uploads/2015/02/luxury-senzati-jet-sprinter-van-10.jpg', '[Mersedes, New_style, Sprinter-class, Commerce]', '85', '2022-06-01'),('7', '7', 'Tesla Model S', '2021-03-01', 'https://www.tesla.com/models', '6', 'https://tvoe-avto.com/wp-content/uploads/Red-Tesla-Model-S-with-Unplugged-Performance-kit.jpg', '["ecology", Tesla, New_style, Sport, Modern]', '10', '2048-08-08'),('8', '8', 'Tesla Model 3', '2021-01-22', 'https://www.tesla.com/model3', '9', 'https://unpluggedperformance.com/wp-content/uploads/2020/10/Unplugged-Performance-Tesla-Model-3-Blue-Brushed-UP-03-Wheels-CCM-Brakes-1200x800.jpg', '[ecology, Tesla, New_style, Sport, Modern]', '33', '[ecology, Tesla, New_style, Sport, Modern]'),('9', '9', 'Cybertruck', '2021-02-22', 'https://www.tesla.com/cybertruck', '8', 'https://1.bp.blogspot.com/-kYuuWTQ6kFo/XhdH_FO2hlI/AAAAAAAAEmQ/fyaFYbZAiagyaUbglJTOQ3oitfDedcrMQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Tesla-Cybertruck-unveiling%2Bdfb.jpg', '[Ecology, Tesla, Cybe_style, Super_Sport, Neo_Modern]', '44', '2022-12-12'),('10', '10', 'Tesla Model X', '2021-01-01', 'https://www.tesla.com/modelx', '10', 'https://i.blogs.es/ab8d32/tesla-model-x-motorpasion-prueba-1/1366_2000.jpg', '[ecology, Tesla, New_style, Sport, Modern]', '30', '2021-04-01'),('11', '8', 'Tesla Y', '2020-03-15', 'https://www.tesla.com/modely', '6', 'https://i.simpalsmedia.com/point.md/news/thumbnails/large/e9df695089d5776487fe193d74140af2.jpg', '[ecology, Tesla, New_style, Sport, Modern]', '25', '2021-09-09'),('12', '10', 'Audi e-tron', '2021-03-11', 'https://www.audi.by/by/web/ru/models/tron/audi-e-tron.html', '6', 'https://family-auto.ru/wp-content/uploads/2020/06/audi-e-tron.jpg', '[ecology, Tesla, New_style, Sport, Modern]', '25', '2025-04-11');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-24 19:04:18
