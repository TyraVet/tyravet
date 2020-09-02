const express = require('express')
const router = express.Router()
const path = require('path')
const authenticateToken = require('../middlewares/authenticateToken.js')

/* Require Controller Modules */
var serviceController = require(path.join(__dirname, '../controllers/service.js'))

/* Service Routes */
router.get('/', authenticateToken, serviceController.get_services)

module.exports = router
