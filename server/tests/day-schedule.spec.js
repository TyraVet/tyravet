const mockingoose = require('mockingoose').default
const DaySchedule = require('../models/daySchedule.js')

describe('Day Schedule', () => {
	let Schedule

	it('Should create a Day Schedule', () => {
		mockingoose(DaySchedule).toReturn(Schedule, 'save')

		return Schedule = new DaySchedule({
			date: new Date(),
			appointments: []
		}).save()
		  .then(schedule => {
			expect(JSON.parse(JSON.stringify(schedule))).toMatchObject(Schedule)
		})
	})
})
