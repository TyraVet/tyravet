const mongoose = require('mongoose')
const Appointment = require('./schemas/appointment.js')

var Schema = mongoose.Schema

const DayScheduleSchema = new Schema({
	date: { type: Date, required: true },
	appointments: { type: [Appointment], required: true }
})

module.exports = mongoose.model('DaySchedule', DayScheduleSchema)
