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

// DELETE

module.exports = {
  createUser,
  getAllUsers,
  getOneUser
}
