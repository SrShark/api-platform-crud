'use strict'

module.exports = app => {
  const Tareas = app.db.models.Tareas

  app.get('/api/tareas', (req, res) => {
    Tareas.findAll({})
      .then(tareas => {
        res.json({ tareas })
      })
  })
}
