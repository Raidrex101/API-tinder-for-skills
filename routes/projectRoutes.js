const express = require('express')
const router = express.Router()

const projectController = require('../controllers/projectController')

router.post('/projects', projectController.createProject)
router.get('/projects', projectController.getAllProjects)
router.get('/projects/:projectId', projectController.getOneProject)
router.patch('/projects/:projectId', projectController.updateOneProject)
router.delete('/projects/:projectId', projectController.hideOneProject)
router.delete('/projects/delete/:projectId', projectController.deleteOneProject)

module.exports = router
