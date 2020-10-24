const REQUEST = require('supertest');
const SERVER = require('../mock_server');

const MONGOOSE = require('mongoose');

const DB_HANDLER = require('./db_handler');
const BREED_MODEL = require('../models/breed');
const BREED_CONTROLLER = require('../controllers/breed');

/* Connect to a new in-memory database before running tests. */
beforeAll(async () => await DB_HANDLER.Connect());

/* Clear all test data after every test. */
afterEach(async () => await DB_HANDLER.ClearDatabase());

/* Remove and close the db and server. */
afterAll(async () => await DB_HANDLER.CloseDatabase());

/* Breed Test Sutie. */
describe('Breed', () => {
	it("Shouldn't create a breed without a Token", async () => {
		return REQUEST(SERVER)
			.post('/breeds/create')
			.send({ name: 'Rottweiler' })
			.expect(401);
	});

	it("Shouldn't send breed without a Token", async () => {
		return REQUEST(SERVER)
			.get('/breeds/find')
			.expect(401);
	});

	it("Shouldn't send breeds without a Token", async () => {
		return REQUEST(SERVER)
			.get('/breeds')
			.expect(401);
	});

	it("Shouldn't update breed without a Token", async () => {
		return REQUEST(SERVER)
			.post('/breeds/update')
			.send({ _id: '01234', name: 'Rottweiler' })
			.expect(401);
	});

	it("Shouldn't delete breed without a Token", async () => {
		return REQUEST(SERVER)
			.get('/breeds/delete')
			.expect(401);
	});
});
