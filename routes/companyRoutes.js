const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companiesController')

router.post('/companies', companyController.createCompany)
router.get('/companies', companyController.getAllCompanies)
router.get('/companies/:companyId', companyController.getOneCompany)
router.patch('/companies/:companyId', companyController.updateOneCompany)
router.delete('/companies/:companyId', companyController.hideACompany)
router.delete('/companies/delete/:companyId', companyController.deleteOneCompany)

module.exports = router
