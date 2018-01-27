'use strict'

module.exports = app => {
  app.get('/pokemons', (req, res) => {
    let locals = {
      titulo: 'Api Platform CRUD',
      pokemon: {
        id: 6,
        name: 'Charizard',
        description: 'Charizard Echa fuego por la boca y es capaz de derretir cualquier cosa.',
        type: 'fuego',
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
      }
    }

    res.render('pokemons', locals)
  })
}
