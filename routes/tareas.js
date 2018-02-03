'use strict'

module.exports = app => {
  const Tareas = app.db.models.Tareas

  app.route('/api/tareas')
    // .all((res, req) => {
    //   delete req.body.id
    //   next()
    // })

    .get((req, res) => {
      Tareas.findAll({})
        .then(tareas => res.json({ tareas }))
        // .catch(err => {
        //   res.json({ error: err.message })
        // })
    })

    .post((res, req) => {
      Tareas.create(req.body)
        .then(tarea => res.json({ tarea }))
        // .catch(err => {
        //   res.json({ error: err.message })
        // })
    })

  app.route('/api/tareas/:id')
    // .all((res, req) => {
    //   delete req.body.id
    //   next()
    // })

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
