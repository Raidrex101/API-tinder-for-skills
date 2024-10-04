const modelOptions = require('../models/projects')

// CREATE
const createProject = (req, res) => {
  modelOptions.addProject(req.body)
    .then((project) => {
      res.status(201).json(project)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

// READ
const getAllProjects = (req, res) => {
  modelOptions.getProjects()
    .then((projects) => {
      res.status(200).json(projects)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

const getOneProject = (req, res) => {
  modelOptions.getOneProject(req.params.projectId)
    .then((project) => {
      res.status(200).json(project)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

// UPDATE
const updateOneProject = (req, res) => {
  modelOptions.updateProject(req.params.projectId, req.body)
    .then((project) => {
      res.status(200).json(project)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

const restoreProject = (req, res) => {
  modelOptions.restoreProject(req.params.projectId)
    .then(() => {
      res.status(200).json({ message: 'Project successfully restored' })
    })
    .catch((err) => {
      res.status(400).json({ error: err.message })
    })
}

// DELETE
const hideOneProject = (req, res) => {
  modelOptions.softDeleteProject(req.params.projectId)
    .then(() => {
      res.status(204).json()
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

const deleteOneProject = (req, res) => {
  modelOptions.deleteProject(req.params.projectId)
    .then(() => {
      res.status(204).json()
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

module.exports = {
  createProject,
  getAllProjects,
  getOneProject,
  updateOneProject,
  hideOneProject,
  deleteOneProject,
  restoreProject
}
