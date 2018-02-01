'use strict'

module.exports = app => {
  app.db.sync().done(() => {
    app.listen(app.get('port'), () => {
      console.log(`Servidor corriendo en puerto ${app.get('port')}`)
    })
  })
}
