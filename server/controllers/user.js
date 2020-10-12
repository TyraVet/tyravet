const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user.js')
const Type = require('../models/type.js')

const medic = new Type({ name: 'medic' })
const admin = new Type({ name: 'admin' })

/* Find User by ID to keep it logged in */
exports.get_user = (req, res) => {
	User.findById(req.query.id).exec((err, user) => {
		if(err)
			return res.status(401).json(err)

		if(user == null)
			return res.status(404).json({ error: 'User dont exists' })

		/* Success */
		res.status(200).json({
			msg: 'User Exists',
			username: user.username
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
