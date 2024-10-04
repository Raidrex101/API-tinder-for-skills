const knex = require('../config')

// CREATE
const addCompany = (bodyCompany) => {
  return knex
    .insert(bodyCompany)
    .into('companies')
    .returning('*')
}

// READ
const getCompanies = () => {
  return knex
    .select('*')
    .from('companies')
    .where('is_active', true)
}

const getOneCompany = (companyId) => {
  return knex
    .select('*')
    .from('companies')
    .where('company_id', companyId)
}

// UPDATE
const updateCompany = (companyId, bodyCompany) => {
  return knex
    .update(bodyCompany)
    .from('companies')
    .where('company_id', companyId)
    .returning('*')
}

const restoreCompany = (companyId) => {
  return knex
    .update({ is_active: true })
    .from('companies')
    .where('company_id', companyId)
}

// DELETE
const softDeleteCompany = (companyId) => {
  return knex
    .update({ is_active: false })
    .from('companies')
    .where('company_id', companyId)
}

const deleteCompany = (companyId) => {
  return knex
    .delete()
    .from('companies')
    .where('company_id', companyId)
}

module.exports = {
  addCompany,
  getCompanies,
  getOneCompany,
  updateCompany,
  softDeleteCompany,
  deleteCompany,
  restoreCompany
}
