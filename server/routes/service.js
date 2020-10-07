const express = require('express')
const router = express.Router()
const path = require('path')
const authenticateToken = require('../middlewares/authenticateToken.js')

/* Require Controller Modules */
var service = require(path.join(__dirname, '../controllers/service.js'))

/* Service Routes */
router.get('/', authenticateToken, service.get_services)
router.get('/service', authenticateToken, service.get_service)
router.post('/update', authenticateToken, service.update_service)

module.exports = router
