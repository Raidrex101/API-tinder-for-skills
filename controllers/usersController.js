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

// UPDATE

// DELETE

module.exports = {
  createUser
}
