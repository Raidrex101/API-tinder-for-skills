const knex = require('../config')

// CREATE
const addRating = (bodyRating) => {
  return knex
    .insert(bodyRating)
    .into('ratings')
    .returning('*')
}

// READ
const getRatings = () => {
  return knex
    .select('*')
    .from('ratings')
}

const getOneRating = (ratingId) => {
  return knex
    .select('*')
    .from('ratings')
    .where('rating_id', ratingId)
}

// UPDATE
const updateRating = (ratingId, bodyRating) => {
  return knex
    .update(bodyRating)
    .from('ratings')
    .where('rating_id', ratingId)
    .returning('*')
}

// DELETE
const deleteRating = (ratingId) => {
  return knex
    .delete()
    .from('ratings')
    .where('rating_id', ratingId)
    .returning('*')
}

module.exports = {
  addRating,
  getRatings,
  getOneRating,
  updateRating,
  deleteRating
}
