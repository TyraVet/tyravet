const express = require('express')
const router = express.Router
const path = require('path')
const authenticateToken = require('../middlewares/authenticateToken.js')

/* Require Controller Modules */
var clientController = require(path.join(__dirname, '../controllers/client.js'))

/* Client Routes */
router.post('/create', authenticateToken, clientController.post_create_client)

module.exports = router
