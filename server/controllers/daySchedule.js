const DaySchedule = require('../models/daySchedule.js')
const Appointment = require('../models/appointment.js')

/* POST Find the current DaySchedule, if there are none, create new */
exports.post_day_schedule = (req, res, next) => {
	DaySchedule.findOne({ date: new Date(req.body.date) }, (err, daySchedule) => {
		if(err)
			res.status(403).json(err)

		if(!daySchedule){
			const today = new Date()
			const requestDay = new Date(req.body.date)

			if(requestDay < today){
				res.status(410).json()
			}else{
				const newDaySchedule = new DaySchedule({
					date: req.body.date,
					appointments: []
				}).save((err, theDaySchedule) => {
					if(err)
						res.status(403).json(err)

					/* Success */
					res.status(201).json(theDaySchedule)
				})
			}
		}else{
			/* Success */
			res.status(200).json(daySchedule)
		}
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
								  err => {
		if(err)
			res.status(403).json(err)

		/* Success */
		res.status(201).json(appointments)
	})
}

/* POST update Appointments when click on done */
exports.post_update_appointments = (req, res, next) => {
	DaySchedule.findByIdAndUpdate(req.body.id,
								  { appointments: req.body.appointments },
								  (err, appointments) => {
		if(err)
			res.status(403).json(err)

		/* Success */
		console.log(appointments)
		res.status(201).json(appointments)
	})
}
