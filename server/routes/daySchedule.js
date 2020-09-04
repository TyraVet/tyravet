const express = require('express')
const router = express.Router()
const path = require('path')
const authenticateToken = require('../middlewares/authenticateToken.js')

/* Require DaySchedule Module */
var daySchedule = require(path.join(__dirname, '../controllers/daySchedule.js'))

/* DaySchedule Routes */
router.get('/', authenticateToken, daySchedule.get_day_schedule)
router.post('/create-day-schedule', authenticateToken, daySchedule.post_create_day_schedule)

module.exports = router
