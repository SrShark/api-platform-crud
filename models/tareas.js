'use strict'

module.exports = (sequelize, DataType) => {
  // class Tareas extends sequelize.Model {}
  //
  // Tareas.init({
  //   id: {
  //     type: DataType.INTEGER,
  //     primaryKey: true,
  //     allowNull: false,
  //     autoIncrement: true
  //   },
  //   titulo: {
  //     type: DataType.STRING,
  //     allowNull: false,
  //     validate: {
  //       notEmpty: true
  //     }
  //   },
  //   completado: {
  //     type: DataType.BOOLEAN,
  //     allowNull: false,
  //     defaultValue: false
  //   }
  // },
  // {
  //   sequelize
  // })

  const Tareas = sequelize.define('Tareas', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    titulo: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    completado: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })

  Tareas.associate = function (models) {
    Tareas.belongsTo(models.Usuarios)
  }

  return Tareas
}
