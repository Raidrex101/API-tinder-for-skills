const express = require('express')
const router = express.Router()

const userController = require('../controllers/usersController')

router.post('/users', userController.createUser)
router.get('/users', userController.getAllUsers)
router.get('/users/:userId', userController.getOneUser)

module.exports = router
