'use strict'
import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    success: 'Hello World'
  })
})

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`)
})
