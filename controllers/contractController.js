const modelContracts = require('../models/contracts')

// CREATE
const createContract = (req, res) => {
  modelContracts.addContract(req.body)
    .then((contract) => {
      res.status(201).json(contract)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

// READ
const getAllContracts = (req, res) => {
  modelContracts.getContracts()
    .then((contracts) => {
      res.status(200).json(contracts)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

const getOneContract = (req, res) => {
  modelContracts.getOneContract(req.params.contractId)
    .then((contract) => {
      res.status(200).json(contract)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

// UPDATE
const updateOneContract = (req, res) => {
  modelContracts.updateContract(req.params.contractId, req.body)
    .then((contract) => {
      res.status(200).json(contract)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

// DELETE
const deleteOneContract = (req, res) => {
  modelContracts.deleteContract(req.params.contractId)
    .then(() => {
      res.status(204).json()
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

module.exports = {
  createContract,
  getAllContracts,
  getOneContract,
  updateOneContract,
  deleteOneContract
}
