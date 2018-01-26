'use strict'

module.exports = app => {
  app.set('port', process.env.PORT || 3000)

  // Configura la visualización del JSON en 4 espacios.
  app.set('json spaces', 4)
}
