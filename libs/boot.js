'use strict'

import sequelize from './connection'

module.exports = app => {
  sequelize.sync().done(() => {
    app.listen(app.get('port'), () => {
      console.log(`Servidor corriendo en puerto ${app.get('port')}`)
    })
  })

  sequelize.authenticate()
    .then(() => console.log('Conección establecida a la base de datos correctamente.'))
    .catch(err => console.warn(`${err}`))
}
