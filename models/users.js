// importar knex para interactuar con la base de datos
const knex = require('../config')

// CREATE
const createUser = (bodyUser) => {
  return knex
    .insert(bodyUser)
    .into('users')
    .returning([
      'user_id',
      'first_name',
      'last_name',
      'email',
      'phone',
      'is_active' // o se puede usar '*' para regresar todos los campos
    ])
}

// READ
const getAllUsers = () => {
  return knex.select('*').from('users')
}

// UPDATE

// DELETE

module.exports = {
  createUser
}
