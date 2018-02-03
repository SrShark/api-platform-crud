'use strict'

module.exports = app => {
  // Router
  app.get('/pokedex', (req, res) => {
    const Pokemons = app.db.models.Pokemons

    Pokemons.findAll({})
      .then(pokemons => {
        let locals = {
          titulo: 'Pokedex',
          link: '/',
          text: 'volver',
          volver: 'keyboard_arrow_left',
          pokemons
        }

        res.render('pokemons', locals)
      })
  })

  // API JSON
  app.get('/api/pokedex', (req, res) => {
    const Pokemons = app.db.models.Pokemons

    Pokemons.findAll({})
      .then(pokemons => {
        res.json({pokemons})
      })
  })
}
