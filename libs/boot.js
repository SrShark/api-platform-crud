'use strict'

module.exports = app => {
  app.db.sequelize.sync().done(() => {
    app.listen(app.get('port'), () => {
      console.log(`Servidor corriendo en puerto ${app.get('port')}`)
    })
  })

  app.db.sequelize.authenticate()
    .then(() => console.log('Conección establecida a la base de datos correctamente.'))
    .catch(err => console.warn(`${err}`))
}
