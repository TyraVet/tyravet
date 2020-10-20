const BCRYPTJS = require('bcryptjs');
const JWT = require('jsonwebtoken');
const USER = require('../models/user.js');
const TYPE = require('../models/type.js');

const MEDIC = new TYPE({ name: 'medic' });
const ADMIN = new TYPE({ name: 'admin' });

/* Find USER by ID to keep it logged in */
exports.getUser = (req, res) => {
	USER.findById(req.query.id).exec((err, user) => {
		if(err)
			return res.status(401).json(err);

		if(user == null)
			return res.status(404).json({ error: "User doesn't exists" });

		/* Success */
		res.status(200).json({
			msg: 'User Exists',
			username: user.username,
			type: user.type
		});
	});
};

/* Find User to LogIn */
exports.login = (req, res) => {
	const USERNAME = req.query.username;
	const PASSWORD = req.query.password;

	USER.findOne({ USERNAME }).then(user => {
		if(!user)
			return res.status(404).json({ msg: "User does't exists" });

		BCRYPTJS.compare(PASSWORD, user.password, (err, data) => {
			if(err)
				throw err;

			if(data){
				const ACCESS_TOKEN = JWT.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET)

				res.status(200).json({
					msg: 'LogIn Success',
					user: {
						_id: user._id,
						username: user.username,
						type: user.type
					},
					accessToken: ACCESS_TOKEN
				});
			}else{
				res.status(401).json({ msg: 'Invalid Credentials' });
			}
		});
	});
};

/* Create User */
exports.signup = (req, res) => {
	BCRYPTJS.hash(req.body.password, 10, (err, hashed_password) => {
		if(err)
			return res.status(406).json(err);

		const MY_TYPE = new TYPE({ name: req.body.type });

		const user = new USER({
			username: req.body.username,
			password: hashed_password,
			type: MY_TYPE
		}).save(err => {
			if(err)
				return res.status(406).json(err);

			/* Success */
			res.sendStatus(201);
		});
	});
};

/* Update User */
exports.update = (req, res) => {
	BCRYPTJS.hash(req.body.password, 10, (err, hashed_password) => {
		if(err)
			return res.status(406).json(err);

		/* Success */
		const MY_TYPE = new TYPE({ name: req.body.type });

		USER.findByIdAndUpdate(req.body.id, {
			_id: req.body.id,
			username: req.body.username,
			password: hashed_password,
			type: MY_TYPE
		}, err => {
			if(err)
				return res.status(406).json(err);

			/* Success */
			res.sendStatus(201);
		});
	});
};

/* Get all Users */
exports.getUsers = (req, res, next) => {
	USER.find()
		.populate('user')
		.exec((err, users) => {
			if(err)
				return res.status(406).json(err);

			/* Success */
			res.status(200).json(users);
		});
};

/* Delete User */
exports.delete = (req, res) => {
	if(req.body.type === 'admin')
		return res.status(406).json({ msg: "Can't remove admin user" });

	USER.findByIdAndRemove(req.body.id, (err) => {
		if(err)
			return res.status(406).json(err);

		/* Success */
		res.sendStatus(200);
	});
};
