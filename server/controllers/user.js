const bcryptjs = require('bcryptjs');
const User = require('../models/user.js')

/* Create User */
exports.post_create_user = (req, res, next) => {
	bcryptjs.hash(req.body.password, 10, (err, hashedPassword) => {
		if(err)
			res.sendStatus(401)

		/* Success */
		const user = new User({
			username: req.body.username,
			password: hashedPassword
		}).save(err => {
			if(err)
				return next(err)
			/* Success */
			res.sendStatus(201).json(user)
		})
	})
}
