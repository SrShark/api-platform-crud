'use strict'

import express from 'express'
import consign from 'consign'

const app = express()
const port = process.env.PORT || 3000

// Configura la visualización del JSON en 4 espacios.
app.set("json spaces", 4);

// Modularización
consign()
  .include('models')
  .then('routes')
  .into(app)

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`)
})
