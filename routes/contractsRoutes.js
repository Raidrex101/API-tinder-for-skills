const express = require('express')
const router = express.Router()

const contractController = require('../controllers/contractController')

router.post('/contracts', contractController.createContract)
router.get('/contracts', contractController.getAllContracts)
router.get('/contracts/:contractId', contractController.getOneContract)
router.patch('/contracts/:contractId', contractController.updateOneContract)
router.delete('/contracts/delete/:contractId', contractController.deleteOneContract)

module.exports = router
