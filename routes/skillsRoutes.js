const express = require('express')
const router = express.Router()

const skillsController = require('../controllers/skillsController')

router.post('/skills', skillsController.createSkill)
router.get('/skills', skillsController.getAllSkills)
router.get('/skills/:skillId', skillsController.getOneSkill)
router.patch('/skills/:skillId', skillsController.updateOneSkill)
router.delete('/skills/:skillId', skillsController.deleteOneSkill)

module.exports = router
