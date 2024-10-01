const ENV = process.env.NODE_ENV || 'development' // configuracion del entorno de node, si no existe usar 'development' por defecto

const knex = require('knex')

const knexfile = require('./knexfile')

// mando a llamar a knex con la configuracion de entorno adecuada

module.exports = knex(knexfile[ENV])

// Este archivo exporta una instancia de knex con la configuracion adecuada para el entorno en el que se ejecuta el codigo
