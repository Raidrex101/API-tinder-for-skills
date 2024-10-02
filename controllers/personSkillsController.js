const modelPersonSkills = require('../models/personSkills')

// CREATE

const createPersonSkill = (req, res) => {
  modelPersonSkills.addSkillToPerson(req.body)
    .then((personSkill) => {
      res.status(201).json(personSkill)
    })
    .catch((err) => {
      res.status(400).json(err.message)
    })
}

// READ

const getAllPersonSkills = (req, res) => {
  modelPersonSkills.getPersonSkills()
    .then((personSkills) => {
      res.status(200).json(personSkills)
    })
    .catch((err) => {
      res.status(400).json(err.message)
    })
}

const getOnePersonSkill = (req, res) => {
  modelPersonSkills.getOnePersonSkill(req.params.personSkillId)
    .then((personSkill) => {
      res.status(200).json(personSkill)
    })
    .catch((err) => {
      res.status(400).json(err.message)
    })
}

// UPDATE

const updatePersonSkill = (req, res) => {
  modelPersonSkills.updatePersonSkill(req.params.personSkillId, req.body)
    .then((personSkill) => {
      res.status(200).json(personSkill)
    })
    .catch((err) => {
      res.status(400).json(err.message)
    })
}

// DELETE

const deletePersonSkill = (req, res) => {
  modelPersonSkills.deletePersonSkill(req.params.personSkillId)
    .then(() => {
      res.status(204).json()
    })
    .catch((err) => {
      res.status(400).json(err.message)
    })
}

module.exports = {
  createPersonSkill,
  getAllPersonSkills,
  getOnePersonSkill,
  updatePersonSkill,
  deletePersonSkill
}
