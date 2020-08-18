const mockingoose = require('mockingoose').default
const UserModel = require('../src/models/user.js')

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
