const DaySchedule = require('../models/daySchedule.js')

/* GET Find the current DaySchedule */
exports.get_day_schedule = (req, res, next) => {
	DaySchedule.findOne({ date: req.body.date }, (err, daySchedule) => {
		if(err)
			res.sendStatus(403).end()

		if(!daySchedule)
			res.sendStatus(404)
		else
			/* Success */
			res.status(201).json(daySchedule)
	})
}

/* POST Create DaySchedule */
exports.post_create_day_schedule = (req, res, next) => {
	const daySchedule = new DaySchedule({
		date: body.date,
		appointments: []
	}).save(err => {
		if(err)
			res.sendStatus(403)

		/* Success */
		res.sendStatus(201).json(daySchedule)
	})
}
