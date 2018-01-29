'use strict'

module.exports = app => {
  app
    .get('/', (req, res) => {
      let locals = {
        titulo: 'Bienvenido',
        link: '/pokedex',
        text: 'ir a la pokedex',
        ir: 'keyboard_arrow_right'
      }

      res.render('index', locals)
    })

    .get('/api/', (req, res) => {
      res.json({ success: 'Hola Mundo' })
    })
}
