const mongoose = require('mongoose')
const Service = require('./schemas/service.js')

var Schema = mongoose.Schema

const AppointmentSchema = new Schema({
	service: { type: Service, required: true },
	clientId: { type: String, required: true },
	petId: { type: String, required: true },
	hour: { type: String, required: true },
	done: { type: Boolean, default: false }
})

module.exports = mongoose.model('Appointment', AppointmentSchema)
