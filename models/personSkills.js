const knex = require('../config')

// CREATE

const addSkillToPerson = (bodyPersonSkill) => {
  return knex
    .insert(bodyPersonSkill)
    .into('person_skills')
    .returning('*')
}

// READ

const getPersonSkills = () => {
  return knex
    .select('*')
    .from('person_skills')
}

const getOnePersonSkill = (personSkillId) => {
  return knex
    .select('*')
    .from('person_skills')
    .where('person_skills_id', personSkillId)
}

// UPDATE

const updatePersonSkill = (personSkillId, bodyPersonSkill) => {
  return knex
    .update(bodyPersonSkill)
    .from('person_skills')
    .where('person_skills_id', personSkillId)
    .returning('*')
}

// DELETE

const deletePersonSkill = (personSkillId) => {
  return knex
    .delete()
    .from('person_skills')
    .where('person_skills_id', personSkillId)
}

module.exports = {
  addSkillToPerson,
  getPersonSkills,
  getOnePersonSkill,
  updatePersonSkill,
  deletePersonSkill
}
