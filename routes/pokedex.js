'use strict'

module.exports = app => {
  app.get('/pokedex', (req, res) => {
    let locals = {
      titulo: 'Pokedex',
      link: '/',
      text: 'volver',
      volver: 'keyboard_arrow_left',
      pokemons: [
        {
          id: 1,
          name: 'Bulbasaur',
          description: 'La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol.',
          type: 'planta',
          url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
        },
        {
          id: 2,
          name: 'Ivysaur',
          description: 'Este Pokémon lleva un bulbo en el lomo y, para poder con su peso, tiene unas patas y un tronco gruesos y fuertes.',
          type: 'planta',
          url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
        },
        {
          id: 3,
          name: 'Venusaur',
          description: 'Venusaur tiene una flor enorme en el lomo que adquiere colores muy vivos si le da mucho el sol.',
          type: 'planta',
          url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
        },
        {
          id: 4,
          name: 'Charmander',
          description: 'La llama que tiene en la punta de la cola arde según sus sentimientos.',
          type: 'fuego',
          url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
        },
        {
          id: 5,
          name: 'Charmeleon',
          description: 'Charmeleon no tiene reparo en acabar con su rival usando las afiladas garras que tiene.',
          type: 'fuego',
          url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'
        },
        {
          id: 6,
          name: 'Charizard',
          description: 'Charizard echa fuego por la boca y es capaz de derretir cualquier cosa.',
          type: 'fuego',
          url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
        },
        {
          id: 7,
          name: 'Squirtle',
          description: 'El caparazón de Squirtle no le sirve de protección únicamente.',
          type: 'agua',
          url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
        },
        {
          id: 8,
          name: 'Wartortle',
          description: 'Tiene una cola larga y cubierta de un pelo abundante y grueso que se torna más oscuro a medida que crece.',
          type: 'agua',
          url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'
        },
        {
          id: 9,
          name: 'Blastoise',
          description: 'Blastoise lanza chorros de agua con gran precisión por los tubos que le salen del caparazón.',
          type: 'agua',
          url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png'
        }
      ]
    }

    res.render('pokemons', locals)
  })
}
