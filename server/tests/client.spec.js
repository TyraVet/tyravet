const mockingoose = require('mockingoose').default
const ClientModel = require('../models/client.js')

describe('Client Model', () => {
	it('Shoule return the Client with findById', () => {
		const _client = {
			_id: '507f191e810c19729de860ea',
			name: 'Andres Ruiz',
			phone: 5594456711,
			pets: [
				{
					_id: '507f191e810c19729de860eb',
					name: 'Coqueta',
					birthday: '2019-01-18T06:00:00.000Z',
					age: 1,
					weight: 33,
					breed: {
						_id: '507f191e810c19729de860ec',
						name: 'Rottweiler'
					}
				}
			],
			address: {
				_id: '507f191e810c19729de860ed',
				street: 'Far Away',
				number: 14,
				intNumber: null,
				postalCode: 94110
			}
		}

		mockingoose(ClientModel).toReturn(_client, 'findOne')

		return ClientModel.findById({ _id: _client._id })
						  .then(client => {
							  expect(JSON.parse(JSON.stringify(client))).toMatchObject(_client)
						  })
	})
})
