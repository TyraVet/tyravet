const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PATH = require('path');
const AUTH_TOKEN = require('../middlewares/authenticateToken.js');

/* Require DaySchedule Module */
const DAY_SCHEDULE = require(PATH.join(__dirname, '../controllers/day_schedule.js'));

/* DaySchedule Routes */
ROUTER.post('/', AUTH_TOKEN, DAY_SCHEDULE.DaySchedule);
ROUTER.post('/add-appointment', AUTH_TOKEN, DAY_SCHEDULE.AddAppointment);
ROUTER.post('/update-appointments', AUTH_TOKEN, DAY_SCHEDULE.UpdateAppointment);

module.exports = ROUTER;
