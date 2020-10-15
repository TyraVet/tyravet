const express = require('express')
const router = express.Router()
const path = require('path')
const authenticateToken = require('../middlewares/authenticateToken.js')

/* Require Controller Modules */
var breed = require(path.join(__dirname, '../controllers/breed.js'))

/* Breed Routes */
router.post('/create', authenticateToken, breed.post_create_breed)
router.get('/', authenticateToken, breed.get_breeds)
router.get('/find', authenticateToken, breed.get_breed)
router.post('/update', authenticateToken, breed.update)

module.exports = router
