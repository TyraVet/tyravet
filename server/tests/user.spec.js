const mockingoose = require('mockingoose').default
const UserModel = require('../src/models/user.js')

const request = require('supertest')
const { ObjectId } = require('mongodb')
const app = require('../src/app.js')

/* Defining port */
const port = 4000

app.listen(port, error => {
	if(error)
		return console.log(error)

	return console.log('Server for testing is listening on ' + port)
})

describe('User Model', () => {
	it('Should return the User with findById', () => {
		const _user = {
			_id: '507f191e810c19729de860ea',
			username: 'andres',
			password: '1234'
		}

		mockingoose(UserModel).toReturn(_user, 'findOne')

		return UserModel.findById({ _id: _user._id })
						.then(user => {
							expect(JSON.parse(JSON.stringify(user))).toMatchObject(_user)
						})
	})
})

describe('POST User, TYRAWEB_ROUTE_USERS', () => {
	const users = [
		{
			_id: new ObjectId(),
			username: 'arturo',
			password: '1234'
		},
		{
			_id: new ObjectId(),
			username: 'andres',
			password: '1234'
		}
	]

	beforeEach((done) => {
		UserModel.remove({}).then(() => {
			return UserModel.insertMany(users)
		}).then(() => done())
	})

	it('Should create a new User', async () => {
		let username = users[0].username
		let password = users[0].password

		await request(app)
			.post(process.env.TYRAWEB_ROUTE_USERS)
			.send({ username: username, password: password })
			.expect(200)
			.end((error, response) => {
				if(error)
					return done(error)

				UserModel.find({ username }).then((users) => {
					expect(users[0].username).toMatch('arturo')
					done()
				}).catch((error) => done(error))
			})
	})

	it("Shouldn't create User with invalid body data", async (done) => {
		await request(app)
			.post(process.env.TYRAWEB_ROUTE_USERS)
			.send({})
			.expect(400)
			.end((error, result) => {
				if(error)
					return done(error)

				UserModel.find().then((users) => {
					expect(users[0].username).toMatch('')
					done()
				}).catch((error) => done(error))
			})
	})
})
