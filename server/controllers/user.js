const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user.js')
const Type = require('../models/type.js')

const normal = new Type({ name: 'normal' })
const medic = new Type({ name: 'medic' })
const admin = new Type({ name: 'admin' })

/* Find User by ID to keep it logged in */
exports.post_find_user_by_id = (req, res, next) => {
	const id = req.body._id

	User.findById(id).exec((err, user) => {
		if(err)
			return next(err)

		if(user == null){
			let err = new Error('User not found')
			err.status = 404
			return next(err)
		}

		/* Success */
		res.status(200).json({
			msg: 'User Exists'
		})
	})
}

/* Find User to LogIn */
exports.post_find_user = (req, res, next) => {
	const username = req.body.username
	const password = req.body.password

	User.findOne({ username }).then(user => {
		if(!user)
			res.status(404).json({
				msg: 'User does not exists'
			}).send()

		bcryptjs.compare(password, user.password, (err, data) => {
			if(err)
				throw err

			if(data){
				const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET)
				res.status(200).json({
					msg: 'LogIn Success',
					user: {
						_id: user._id,
						username: user.username,
						type: user.type
					},
					accessToken: accessToken
				}).send()
			}else{
				res.status(401).json({
					msg: 'Invalid Credentials'
				}).send()
			}
		})
	})
}

/* Create User */
exports.post_create_user = (req, res, next) => {
	const Type = new Type({ name: req.body.type })

	bcryptjs.hash(req.body.password, 10, (err, hashedPassword) => {
		if(err)
			res.sendStatus(401)

		/* Success */
		const user = new User({
			username: req.body.username,
			password: hashedPassword,
			type: Type
		}).save(err => {
			if(err)
				return next(err)
			/* Success */
			res.sendStatus(201).json(user)
		})
	})
}

/* Get all Users */
exports.get_users = (req, res, next) => {
	User.find()
		.populate('user')
		.exec((err, users) => {
			if(err)
				return res.sendStatus(403)

			/* Success */
			res.json(users)
		})
}
