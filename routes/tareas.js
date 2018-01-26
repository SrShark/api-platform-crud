'use strict'

module.exports = app => {
  app.get('/tareas', (req, res) => {
    res.json([
      { titulo: 'Terminar de leer el libro' },
      { titulo: 'implementar lo aprendido' }
    ])
  })
}
