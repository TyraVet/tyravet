const mockingoose = require('mockingoose').default
const ClientModel = require('../models/client.js')

describe('Client Model', () => {
	it('Shoule return the Client with findById', () => {
		const _client = {
			_id: '507f191e810c19729de860ea',
			name: 'Andres Ruiz',
			phone: 88777337699,
			pets: [
				'507f191e810c19729de860eb'
			],
			address: {
				_id: '507f191e810c19729de860ed',
				street: 'Jersey Street',
				number: 4,
				intNumber: null,
				postalCode: 2215
			}
		}

		mockingoose(ClientModel).toReturn(_client, 'findOne')

		return ClientModel.findById({ _id: _client._id })
						  .then(client => {
							  expect(JSON.parse(JSON.stringify(client))).toMatchObject(_client)
						  })
	})
})
