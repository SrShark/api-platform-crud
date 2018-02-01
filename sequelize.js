'use strict'

import Sequelize from 'sequelize'
import config from './libs/config.js'

let sequelize = null

module.exports = () => {
  if (!sequelize) {
    sequelize = new Sequelize(
      config.db,
      config.user,
      config.pass,
      {
        host: config.host,
        dialect: 'mysql'
      }
    )
  }

  return sequelize
}
