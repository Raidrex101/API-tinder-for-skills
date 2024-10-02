const express = require('express')
const router = express.Router()

const personSkillsController = require('../controllers/personSkillsController')

router.post('/person_skills', personSkillsController.createPersonSkill)
router.get('/person_skills', personSkillsController.getAllPersonSkills)
router.get('/person_skills/:personSkillId', personSkillsController.getOnePersonSkill)
router.patch('/person_skills/:personSkillId', personSkillsController.updatePersonSkill)
router.delete('/person_skills/delete/:personSkillId', personSkillsController.deletePersonSkill)

module.exports = router
