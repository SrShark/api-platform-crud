'use strict'

module.exports = app => {
  app.get('/pokemons', (req, res) => {
    let locals = {
      titulo: 'Api Platform CRUD',
      pokemon: {
        id: 6,
        name: 'Charizard',
        type: 'fuego',
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png'
      }
    }

    res.render('pokemons', locals)
  })
}
