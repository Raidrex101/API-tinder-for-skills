const express = require('express')
const router = express.Router()

const ratingController = require('../controllers/ratingsController')

router.post('/ratings', ratingController.createRating)
router.get('/ratings', ratingController.getRatings)
router.get('/ratings/:ratingId', ratingController.getOneRating)
router.patch('/ratings/:ratingId', ratingController.updateRating)
router.delete('/ratings/delete/:ratingId', ratingController.deleteRating)

module.exports = router
