'use strict'

module.exports = (sequelize, DataType) => {
  const Usuarios = sequelize.define('Usuarios', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nombre: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    {
      classMethods: {
        associate: (models) => {
          Usuarios.hasMany(models.Tareas)
        }
      }
    }

    return Usuarios
  })
}
