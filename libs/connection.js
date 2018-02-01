'use strict'

import Sequelize from 'sequelize'
import config from './config.js'

const sequelize = new Sequelize(
  config.db,
  config.user,
  config.pass,
  {
    host: config.host,
    dialect: 'mysql'
  }
)

module.exports = sequelize
