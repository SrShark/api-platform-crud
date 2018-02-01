'use strict'

import express from 'express'
import consign from 'consign'

const app = express()

// Modularización
consign()
  .include('db')
  .then('models')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app)
