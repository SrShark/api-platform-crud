-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: pokedex
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pokemons`
--

DROP TABLE IF EXISTS `pokemons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pokemons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `num_pokedex` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(50) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemons`
--

LOCK TABLES `pokemons` WRITE;
/*!40000 ALTER TABLE `pokemons` DISABLE KEYS */;
INSERT INTO `pokemons` VALUES (1,1,'Bulbasaur','La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol.','planta','https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'),(2,2,'Ivysaur','Este Pokémon lleva un bulbo en el lomo y, para poder con su peso, tiene unas patas y un tronco gruesos y fuertes.','planta','https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'),(3,3,'Venusaur','Venusaur tiene una flor enorme en el lomo que adquiere colores muy vivos si le da mucho el sol.','planta','https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'),(4,4,'Charmander','La llama que tiene en la punta de la cola arde según sus sentimientos.','fuego','https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'),(5,5,'Charmeleon','Charmeleon no tiene reparo en acabar con su rival usando las afiladas garras que tiene.','fuego','https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'),(6,6,'Charizard','Charizard echa fuego por la boca y es capaz de derretir cualquier cosa.','fuego','https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'),(7,7,'Squirtle','El caparazón de Squirtle no le sirve de protección únicamente.','agua','https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'),(8,8,'Wartortle','Tiene una cola larga y cubierta de un pelo abundante y grueso que se torna más oscuro a medida que crece.','agua','https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'),(9,9,'Blastoise','Blastoise lanza chorros de agua con gran precisión por los tubos que le salen del caparazón.','agua','https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png');
/*!40000 ALTER TABLE `pokemons` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-29 13:16:49
