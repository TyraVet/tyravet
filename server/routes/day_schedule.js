const express = require('express')
const router = express.Router()
const path = require('path')
const authenticateToken = require('../middlewares/authenticateToken.js')

/* Require DaySchedule Module */
var daySchedule = require(path.join(__dirname, '../controllers/day_schedule.js'))

/* DaySchedule Routes */
router.post('/', authenticateToken, daySchedule.post_day_schedule)
router.post('/add-appointment', authenticateToken, daySchedule.post_add_appointment)
router.post('/update-appointments', authenticateToken, daySchedule.post_update_appointments)

module.exports = router
