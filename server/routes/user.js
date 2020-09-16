const express = require('express')
const router = express.Router()
const path = require('path')
const authenticateToken = require('../middlewares/authenticateToken.js')

/* Require Controller Modules */
var userController = require(path.join(__dirname, '../controllers/user.js'))

/* User Routes */
router.post('/find', authenticateToken, userController.post_find_user_by_id)
router.post('/login', userController.post_find_user)
router.post('/signup', authenticateToken, userController.post_create_user)
router.get('/', authenticateToken, userController.get_users)

module.exports = router
