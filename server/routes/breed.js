const express = require('express')
const router = express.Router()
const path = require('path')
const authenticateToken = require('../middlewares/authenticateToken.js')

/* Require Controller Modules */
var breedController = require(path.join(__dirname, '../controllers/breed.js'))

/* Breed Routes */
router.post('/create', authenticateToken, breedController.post_create_breed)
router.get('/', authenticateToken, breedController.get_breeds)

module.exports = router
