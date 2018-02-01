'use strict'

module.exports = app => {
  app.sequelize.sync().done(() => {
    app.listen(app.get('port'), () => {
      console.log(`Servidor corriendo en puerto ${app.get('port')}`)
    })
  })

  app.sequelize.authenticate()
    .then(() => console.log('Conección establecida a la base de datos correctamente.'))
    .catch(err => console.warn(`${err}`))
}
