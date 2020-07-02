-- MySQL dump 10.13  Distrib 8.0.19, for Linux (x86_64)
--
-- Host: localhost    Database: DB_Keluarga_Berencana
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `LIST_KONTRASEPSI`
--

DROP TABLE IF EXISTS `LIST_KONTRASEPSI`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `LIST_KONTRASEPSI` (
  `Id_Kontrasepsi` int NOT NULL,
  `Nama_Kontrasepsi` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id_Kontrasepsi`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LIST_KONTRASEPSI`
--

LOCK TABLES `LIST_KONTRASEPSI` WRITE;
/*!40000 ALTER TABLE `LIST_KONTRASEPSI` DISABLE KEYS */;
INSERT INTO `LIST_KONTRASEPSI` (`Id_Kontrasepsi`, `Nama_Kontrasepsi`) VALUES (1,'Pil'),(2,'Kondom'),(3,'IUD');
/*!40000 ALTER TABLE `LIST_KONTRASEPSI` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LIST_PEMAKAI_KONTRASEPSI`
--

DROP TABLE IF EXISTS `LIST_PEMAKAI_KONTRASEPSI`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `LIST_PEMAKAI_KONTRASEPSI` (
  `Id_List` int NOT NULL AUTO_INCREMENT,
  `Id_Propinsi` int DEFAULT NULL,
  `Id_Kontrasepsi` int DEFAULT NULL,
  `Jumlah_Pemakai` int DEFAULT NULL,
  PRIMARY KEY (`Id_List`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LIST_PEMAKAI_KONTRASEPSI`
--

LOCK TABLES `LIST_PEMAKAI_KONTRASEPSI` WRITE;
/*!40000 ALTER TABLE `LIST_PEMAKAI_KONTRASEPSI` DISABLE KEYS */;
INSERT INTO `LIST_PEMAKAI_KONTRASEPSI` (`Id_List`, `Id_Propinsi`, `Id_Kontrasepsi`, `Jumlah_Pemakai`) VALUES (1,1,1,NULL),(2,1,1,NULL),(3,1,1,50),(4,1,1,50),(5,1,1,55),(6,1,2,25),(7,2,1,50),(8,2,2,1),(9,6,2,200);
/*!40000 ALTER TABLE `LIST_PEMAKAI_KONTRASEPSI` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LIST_PROPINSI`
--

DROP TABLE IF EXISTS `LIST_PROPINSI`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `LIST_PROPINSI` (
  `Id_Propinsi` int NOT NULL AUTO_INCREMENT,
  `Nama_Propinsi` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id_Propinsi`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LIST_PROPINSI`
--

LOCK TABLES `LIST_PROPINSI` WRITE;
/*!40000 ALTER TABLE `LIST_PROPINSI` DISABLE KEYS */;
INSERT INTO `LIST_PROPINSI` (`Id_Propinsi`, `Nama_Propinsi`) VALUES (1,'Aceh'),(2,'Sumatra Utara'),(3,'Sumatra Barat'),(4,'Riau'),(5,'Kepulauan Riau'),(6,'Jambi'),(7,'Bangka Belitung'),(8,'Sumatra Selatan'),(9,'Lampung');
/*!40000 ALTER TABLE `LIST_PROPINSI` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-02 18:12:03
