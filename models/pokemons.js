'use strict'

module.exports = (sequelize, DataType) => {
  const Pokemons = sequelize.define('Pokemons', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    num_pokedex: {
      type: DataType.INTEGER,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    name: {
      type: DataType.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataType.TEXT,
      allowNull: true
    },
    type: {
      type: DataType.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    url: {
      type: DataType.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  })

  Pokemons.associate = function (models) {
    Pokemons.belongsTo(models.Usuarios)
  }

  return Pokemons
}
