'use strict'
import express from 'express'

const app = express()
const port = process.env.PORT || 3000

// Configura la visualización del JSON en 4 espacios.
app.set("json spaces", 4);

app.get('/', (req, res) => {
  res.json({
    success: 'Hello World'
  })
})

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`)
})
