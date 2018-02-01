'use strict'

import Sequelize from 'sequelize'
import config from './config.js'

let sequelize = null

module.exports = () => {
  if (!sequelize) {
    const sequelize = new Sequelize(
      config.db,
      config.user,
      config.pass,
      {
        host: config.host,
        dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
        pool: {
          max: 1,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      }
    )
  }

  // sequelize
  //   .authenticate()
  //   .then(() => {
  //     console.log('Conección establecida a la base de datos correctamente.')
  //   })
  //   .catch(err => {
  //     console.error('Error al conectarse a la base de datos: ${err}')
  //   })

  return sequelize
}
