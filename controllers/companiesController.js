const modelCompanies = require('../models/companies')

// CREATE
const createCompany = async (req, res) => {
  modelCompanies.addCompany(req.body)
    .then((company) => {
      res.status(201).json(company)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

// READ
const getAllCompanies = (req, res) => {
  modelCompanies.getCompanies()
    .then((company) => {
      res.status(200).json(company)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

const getOneCompany = (req, res) => {
  modelCompanies.getOneCompany(req.params.companyId)
    .then((company) => {
      res.status(200).json(company)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

// UPDATE
const updateOneCompany = (req, res) => {
  modelCompanies.updateCompany(req.params.companyId, req.body)
    .then((company) => {
      res.status(200).json(company)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

// DELETE

const hideACompany = (req, res) => {
  modelCompanies.softDeleteCompany(req.params.companyId)
    .then(() => {
      res.status(204).json()
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

const deleteOneCompany = (req, res) => {
  modelCompanies.deleteCompany(req.params.companyId)
    .then(() => {
      res.status(204).json()
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

module.exports = {
  createCompany,
  getAllCompanies,
  getOneCompany,
  updateOneCompany,
  hideACompany,
  deleteOneCompany
}
