const knex = require('../config')

// CREATE
const addContract = (bodyContract) => {
  return knex
    .insert(bodyContract)
    .into('contracts')
    .returning('*')
}

// READ
const getContracts = () => {
  return knex
    .select('*')
    .from('contracts')
}

const getOneContract = (contractId) => {
  return knex
    .select('*')
    .from('contracts')
    .where('contract_id', contractId)
}

// UPDATE
const updateContract = (contractId, bodyContract) => {
  return knex
    .update(bodyContract)
    .from('contracts')
    .where('contract_id', contractId)
}

// DELETE
const deleteContract = (contractId) => {
  return knex
    .delete()
    .from('contracts')
    .where('contract_id', contractId)
}

module.exports = {
  addContract,
  getContracts,
  getOneContract,
  updateContract,
  deleteContract
}
