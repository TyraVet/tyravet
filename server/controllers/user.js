const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user.js')
const Type = require('../models/type.js')

const medic = new Type({ name: 'medic' })
const admin = new Type({ name: 'admin' })

/* Find User by ID to keep it logged in */
exports.get_user = (req, res, next) => {
	const id = req.query._id

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
exports.get_login = (req, res) => {
	const username = req.query.username
	const password = req.query.password

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
exports.post_signup = (req, res) => {
	bcryptjs.hash(req.body.password, 10, (err, hashedPassword) => {
		if(err)
			res.sendStatus(401)

		/* Success */
		const type = new Type({ name: req.body.type })

		const user = new User({
			username: req.body.username,
			password: hashedPassword,
			type: type
		}).save(err => {
			if(err)
				return res.status(403).json(err)
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
