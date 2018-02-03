CREATE DATABASE pokedex;

USE pokedex;

CREATE TABLE  pokemons  (
   id int(11) NOT NULL AUTO_INCREMENT,
   num_pokedex int(11) NOT NULL UNIQUE,
   name varchar(50) NOT NULL,
   description text,
   type varchar(50) NOT NULL,
   url varchar(255) NOT NULL,
   createdAt datetime NOT NULL,
   updatedAt datetime NOT NULL,
   UsuarioId int(11) DEFAULT NULL,
  PRIMARY KEY ( id )
)

INSERT INTO usuarios (nombre, password, email, createdAt, updatedAt)
  VALUES ('guido', '123', 'cavallo.guido.nicolas@gmail.com', '2018-02-02 12:17:00', '2018-02-02 12:17:00');

SELECT * FROM usuarios;

UPDATE tareas
  SET UsuarioId = '1'
  WHERE id = 1;

INSERT INTO pokemons (num_pokedex, name, description, type, url, createdAt, updatedAt, UsuarioId)
  VALUES (
    1,
    'Bulbasaur',
    'La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol.',
    'planta',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    '2018-02-02 12:17:00',
    '2018-02-02 12:17:00',
    1
  ),
  (
    2,
    'Ivysaur',
    'Este Pokémon lleva un bulbo en el lomo y, para poder con su peso, tiene unas patas y un tronco gruesos y fuertes.',
    'planta',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
    '2018-02-02 12:17:00',
    '2018-02-02 12:17:00',
    1
  ),
  (
    3,
    'Venusaur',
    'Venusaur tiene una flor enorme en el lomo que adquiere colores muy vivos si le da mucho el sol.',
    'planta',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    '2018-02-02 12:17:00',
    '2018-02-02 12:17:00',
    1
  ),
  (
    4,
    'Charmander',
    'La llama que tiene en la punta de la cola arde según sus sentimientos.',
    'fuego',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    '2018-02-02 12:17:00',
    '2018-02-02 12:17:00',
    1
  ),
  (
    5,
    'Charmeleon',
    'Charmeleon no tiene reparo en acabar con su rival usando las afiladas garras que tiene.',
    'fuego',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
    '2018-02-02 12:17:00',
    '2018-02-02 12:17:00',
    1
  ),
  (
    6,
    'Charizard',
    'Charizard echa fuego por la boca y es capaz de derretir cualquier cosa.',
    'fuego',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    '2018-02-02 12:17:00',
    '2018-02-02 12:17:00',
    1
  ),
  (
    7,
    'Squirtle',
    'El caparazón de Squirtle no le sirve de protección únicamente.',
    'agua',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    '2018-02-02 12:17:00',
    '2018-02-02 12:17:00',
    1
  ),
  (
    8,
    'Wartortle',
    'Tiene una cola larga y cubierta de un pelo abundante y grueso que se torna más oscuro a medida que crece.',
    'agua',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
    '2018-02-02 12:17:00',
    '2018-02-02 12:17:00',
    1
  ),
  (
    9,
    'Blastoise',
    'Blastoise lanza chorros de agua con gran precisión por los tubos que le salen del caparazón.',
    'agua',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    '2018-02-02 12:17:00',
    '2018-02-02 12:17:00',
    1
  );

SELECT * FROM pokemons;
