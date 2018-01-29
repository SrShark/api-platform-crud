'use strict'

module.exports = app => {
  app.get('/tareas', (req, res) => {
    res.json({success: 'tareas'})
  })
}
