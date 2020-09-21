const express = require('express')
const router = express.Router()
const path = require('path')
const authenticateToken = require('../middlewares/authenticateToken.js')

/* Require Controller Modules */
var client = require(path.join(__dirname, '../controllers/client.js'))
var pet = require(path.join(__dirname, '../controllers/pet.js'))

/* Client Routes */
router.post('/create',
			authenticateToken,
			pet.post_create_pet,
			client.post_create_client,
			pet.post_add_owner)
router.get('/', authenticateToken, client.get_clients)
router.get('/client', authenticateToken, client.get_client)
router.post('/add-pet',
			authenticateToken,
			pet.post_create_pet,
			client.post_add_pet,
			pet.post_add_owner)

module.exports = router
