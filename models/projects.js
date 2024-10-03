const knex = require('../config')

// CREATE
const addProject = (bodyProject) => {
  return knex
    .insert(bodyProject)
    .into('projects')
    .returning('*')
}

// READ
const getProjects = () => {
  return knex
    .select('*')
    .from('projects')
    .where('status', 'open')
}

const getOneProject = (projectId) => {
  return knex
    .select('*')
    .from('projects')
    .where('project_id', projectId)
}

// UPDATE
const updateProject = (projectId, bodyProject) => {
  return knex
    .update(bodyProject)
    .from('projects')
    .where('project_id', projectId)
    .returning('*')
}

// DELETE
const softDeleteProject = (projectId) => {
  return knex
    .update({ status: 'closed' })
    .from('projects')
    .where('project_id', projectId)
    .returning('*')
}

const deleteProject = (projectId) => {
  return knex
    .delete()
    .from('projects')
    .where('project_id', projectId)
    .returning('*')
}

module.exports = {
  addProject,
  getProjects,
  getOneProject,
  updateProject,
  softDeleteProject,
  deleteProject
}
