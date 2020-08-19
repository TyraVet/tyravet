const express = require('express')
const router = express.Router()
const path = require('path')

/* Require Controller Modules */
var userController = require(path.join(__dirname, '../controllers/user.js'))

/* Character Routes */
router.post('/login', userController.post_find_user)
router.post('/signup', userController.post_create_user)

module.exports = router
