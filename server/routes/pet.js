const express = require('express')
const router = express.Router()
const path = require('path')
const authenticateToken = require('../middlewares/authenticateToken.js')

/* Require Controller Modules */
var pet = require(path.join(__dirname, '../controllers/pet.js'))

/* Pet Routes */
router.get('/', authenticateToken, pet.get_pet)
router.get('/all', authenticateToken, pet.get_pets)

module.exports = router
