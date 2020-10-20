const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PATH = require('path');
const AUTH_TOKEN = require('../middlewares/authenticateToken.js');

/* Require DaySchedule Module */
const DAY_SCHEDULE = require(PATH.join(__dirname, '../controllers/day_schedule.js'));

/* DaySchedule Routes */
ROUTER.post('/', AUTH_TOKEN, DAY_SCHEDULE.daySchedule);
ROUTER.post('/add-appointment', AUTH_TOKEN, DAY_SCHEDULE.addAppointment);
ROUTER.post('/update-appointments', AUTH_TOKEN, DAY_SCHEDULE.updateAppointment);

module.exports = ROUTER;
