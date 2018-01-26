'use strict'

module.exports = app => {
  // Establece el puerto como variable de express
  app.set('port', process.env.PORT || 3000)

  // Establece el motor de template pug.
  app.set('view engine', 'pug');
}
