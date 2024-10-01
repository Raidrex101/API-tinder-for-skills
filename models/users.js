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
const getAll = () => {
  return knex
    .select('*')
    .from('users')
    .where('is_active', true)
}

const findOne = (userId) => {
  return knex
    .select('*')
    .from('users')
    .where('user_id', userId)
}

// UPDATE
const updateUser = (userId, bodyUser) => {
  return knex
    .update(bodyUser)
    .from('users')
    .where('user_id', userId)
    .returning('*')
}

// DELETE

module.exports = {
  createUser,
  getAll,
  findOne,
  updateUser
}
