'use strict'

module.exports = app => {
  const Tareas = app.db.models.Tareas

  app.route('/api/tareas')
    .all((res, req) => {
      delete req.body.id
      next()
    })

    .get((req, res) => {
      Tareas.findAll({})
        .then(tareas => {
          res.json({ tareas })
        })
    })

    .post((res, req) => {
      res.json({ mensaje: 'funcionando' })
    })

  app.route('/api/tareas/:id')
    .all((res, req) => {
      delete req.body.id
      next()
    })

    .get((req, res) => {
      Tareas.findAll({})
        .then(tareas => {
          res.json({ tareas })
        })
    })

    .put((res, req) => {
      // code
    })

    .delete((res, req) => {
      // code
    })
}
