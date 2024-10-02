const modelSkills = require('../models/skills')

// CREATE

const createSkill = (req, res) => {
  modelSkills.addSkill(req.body)
    .then((skill) => {
      res.status(201).json(skill)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

// READ

const getAllSkills = (req, res) => {
  modelSkills.getSkills()
    .then((skills) => {
      res.status(200).json(skills)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

const getOneSkill = (req, res) => {
  modelSkills.oneSkill(req.params.skillId)
    .then((skill) => {
      res.status(200).json(skill)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

// UPDATE

const updateOneSkill = (req, res) => {
  modelSkills.updateSkills(req.params.skillId, req.body)
    .then((skill) => {
      res.status(200).json(skill)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

// DELETE

const deleteOneSkill = (req, res) => {
  modelSkills.deleteSkill(req.params.skillId)
    .then(() => {
      res.status(204).json()
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

module.exports = {
  createSkill,
  getAllSkills,
  getOneSkill,
  updateOneSkill,
  deleteOneSkill
}
