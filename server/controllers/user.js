const bcryptjs = require('bcryptjs')
const User = require('../models/user.js')

/* Find User to LogIn */
exports.post_find_user = (req, res, next) => {
	User.findOne({ username: req.body.username }, (err, user) => {
		if(err)
			res.sendStatus(401)

		if(!user)
			res.sendStatus(402)

		bcryptjs.compare(req.body.password, user.password, (err, res) => {
			if(err)
				res.sendStatus(401)

			if(res)
				res.sendStatus(201).json(user)
			else
				res.sendStatus(403)
		})
	})
}

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
