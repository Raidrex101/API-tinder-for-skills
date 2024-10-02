const knex = require('../config')

// CREATE
const addSkill = (bodySkill) => {
  return knex
    .insert(bodySkill)
    .into('skills')
    .returning('*')
}

// READ
const getSkills = () => {
  return knex
    .select('*')
    .from('skills')
}

const oneSkill = (skillId) => {
  return knex
    .select('*')
    .from('skills')
    .where('id', skillId)
}

// UPDATE

const updateSkills = (skillId, bodySkill) => {
  return knex
    .update(bodySkill)
    .from('skills')
    .where('id', skillId)
    .returning('*')
}

// DELETE

const deleteSkill = (skillId) => {
  return knex
    .delete()
    .from('skills')
    .where('id', skillId)
}

module.exports = {
  addSkill,
  getSkills,
  oneSkill,
  updateSkills,
  deleteSkill
}
