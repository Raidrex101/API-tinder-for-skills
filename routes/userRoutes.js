const express = require('express')
const router = express.Router()

const userController = require('../controllers/usersController')

router.post('/users', userController.createUser)
router.get('/users', userController.getAllUsers)
router.get('/users/:userId', userController.getOneUser)
router.patch('/users/:userId', userController.updateOneUser)
router.delete('/users/:userId', userController.hideOneUser)
router.delete('/users/delete/:userId', userController.deleteOneUser)

module.exports = router
