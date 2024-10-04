const modelUsers = require('../models/users')

// CREATE
const createUser = (req, res) => {
  modelUsers.createUser(req.body).then((user) => {
    res.status(201).json(user)
  }).catch((err) => {
    res.status(400).json(err.message)
  })
}

// READ
const getAllUsers = (req, res) => {
  modelUsers.getAll().then((users) => {
    res.status(200).json(users)
  }).catch((err) => {
    res.status(400).json(err.message)
  })
}

const getOneUser = (req, res) => {
  modelUsers.findOne(req.params.userId).then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err.message)
  })
}

// UPDATE
const updateOneUser = (req, res) => {
  modelUsers.updateUser(req.params.userId, req.body).then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err.message)
  })
}

const restoreUser = (req, res) => {
  modelUsers.restoreUser(req.params.userId)
    .then(() => {
      res.status(200).json({ message: 'User successfully restored' })
    })
    .catch((err) => {
      res.status(400).json({ error: err.message })
    })
}

// DELETE
const hideOneUser = (req, res) => {
  modelUsers.softDeleteUser(req.params.userId).then(() => {
    res.status(204).json()
  }).catch((err) => {
    res.status(400).json(err.message)
  })
}

const deleteOneUser = (req, res) => {
  modelUsers.deleteUser(req.params.userId).then(() => {
    res.status(204).json()
  }).catch((err) => {
    res.status(400).json(err.message)
  })
}

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  updateOneUser,
  hideOneUser,
  deleteOneUser,
  restoreUser
}
