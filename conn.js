const Sequelize = require('sequelize')
const config = require('./libs/config')

const sequelize = new Sequelize(
  config.db,
  config.user,
  config.pass,
  {
    host: config.host,
    dialect: 'mysql'
  }
)

sequelize.sync()
sequelize
  .authenticate()
  .then(() => console.log('Conección establecida a la base de datos correctamente.'))
  .catch(err => console.error('Error al conectarse a la base de datos: ${err}'))
