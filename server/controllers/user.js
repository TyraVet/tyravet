const User = require('../models/user.js')

/* Create User */
exports.create_user = (request, response, next) => {
	let user = new User({
		username: request.body.username,
		password: request.body.password
	})

	user.save((error) => {
		if(error)
			return next(error)

		/* Success */
		response.status(200)
	})
}
