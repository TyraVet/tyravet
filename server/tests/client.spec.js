const REQUEST = require('supertest');
const SERVER = require('../mock_server');

const MONGOOSE = require('mongoose');

const DB_HANDLER = require('./db_handler');
const CLIENT_MODEL = require('../models/client');
const CLIENT_CONTROLLER = require('../controllers/client');

/* Connect to a new in-memory database before running tests. */
beforeAll(async () => await DB_HANDLER.Connect());

/* Clear all test data after every test. */
afterEach(async () => await DB_HANDLER.ClearDatabase());

/* Remove and close the db and server. */
afterAll(async () => await DB_HANDLER.CloseDatabase());

/* Client Test Sutie. */
describe('Client', () => {
	it("Shouldn't create client/pet without a Token", async () => {
		return REQUEST(SERVER)
			.post('/clients/create')
			.send({})
			.expect(401);
	});

	it("Shouldn't get client without a Token", async () => {
		return REQUEST(SERVER)
			.get('/clients/client')
			.expect(401);
	});

	it("Shouldn't get clients without a Token", async () => {
		return REQUEST(SERVER)
			.get('/clients')
			.expect(401);
	});

	it("Shouldn't add a pet to client Token", async () => {
		return REQUEST(SERVER)
			.post('/clients/add-pet')
			.send({})
			.expect(401);
	});
});
