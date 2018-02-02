'use strict'

module.exports = app => {
  app.get('/api/tareas', (req, res) => {
    res.json({success: 'tareas'})
  })
}
