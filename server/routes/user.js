const express = require('express')
const router = express.Router()
const path = require('path')
const authenticateToken = require('../middlewares/authenticateToken.js')

/* Require Controller Modules */
var user = require(path.join(__dirname, '../controllers/user.js'))

/* User Routes */
router.get('/find', authenticateToken, user.get_user)
router.get('/login', user.get_login)
router.post('/signup', authenticateToken, user.post_signup)
router.post('/update', authenticateToken, user.post_update)
router.post('/delete', authenticateToken, user.post_delete)
router.get('/', authenticateToken, user.get_users)

module.exports = router
