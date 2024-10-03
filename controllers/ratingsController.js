const modelRatings = require('../models/ratings')

// CREATE
const createRating = (req, res) => {
  modelRatings.addRating(req.body)
    .then((rating) => {
      res.status(201).json(rating)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

// READ
const getRatings = (req, res) => {
  modelRatings.getRatings()
    .then((ratings) => {
      res.status(200).json(ratings)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

const getOneRating = (req, res) => {
  modelRatings.getOneRating(req.params.ratingId)
    .then((rating) => {
      res.status(200).json(rating)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

// UPDATE
const updateRating = (req, res) => {
  modelRatings.updateRating(req.params.ratingId, req.body)
    .then((rating) => {
      res.status(200).json(rating)
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

// DELETE
const deleteRating = (req, res) => {
  modelRatings.deleteRating(req.params.ratingId)
    .then(() => {
      res.status(204).json()
    }).catch((err) => {
      res.status(400).json(err.message)
    })
}

module.exports = {
  createRating,
  getRatings,
  getOneRating,
  updateRating,
  deleteRating
}
