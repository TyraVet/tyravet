const DaySchedule = require('../models/daySchedule.js')

/* GET Find the current DaySchedule */
exports.get_day_schedule = (req, res, next) => {
	console.log(req.body) // is undefined, why?
	DaySchedule.findOne({ date: new Date('2020-09-04') }, (err, daySchedule) => {
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
	}).save(err => {
		if(err)
			res.status(403).json(err)

		/* Success */
		res.status(201).json(daySchedule)
	})
}
