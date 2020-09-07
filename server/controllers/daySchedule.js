const DaySchedule = require('../models/daySchedule.js')
const Appointment = require('../models/appointment.js')

/* GET Find the current DaySchedule */
exports.get_day_schedule = (req, res, next) => {
	DaySchedule.findOne({ date: new Date(req.query.date) }, (err, daySchedule) => {
		if(err)
			res.status(403).json(err)

		if(!daySchedule)
			res.status(404).end()
		else
			/* Success */
			res.status(200).json(daySchedule)
	})
}

/* POST Create DaySchedule */
exports.post_create_day_schedule = (req, res, next) => {
	const daySchedule = new DaySchedule({
		date: req.body.date,
		appointments: []
	}).save((err, theDaySchedule) => {
		if(err)
			res.status(403).json(err)

		/* Success */
		res.status(201).json(theDaySchedule)
	})
}

/* POST Add Appointment into the Schedule */
exports.post_add_appointment = (req, res, next) => {
	if(!req.body.service || !req.body.client)
		return res.status(406).json({ error: 'No Service or Client send' })

	const appointment = new Appointment({
		service: req.body.service,
		client: req.body.client,
		hour: req.body.hour
	})

	let appointments = req.body.appointments
	appointments.push(appointment)

	DaySchedule.findByIdAndUpdate(req.body.id,
								  { appointments: appointments },
								  (err, theDaySchedule) => {
		if(err)
			res.status(403).json(err)

		/* Success */
		res.status(201).json(theDaySchedule.appointments)
	})
}
