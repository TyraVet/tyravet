const REQUEST = require('supertest');
const SERVER = require('../mock_server');

const MONGOOSE = require('mongoose');

const DB_HANDLER = require('./db_handler');
const SERVICE_MODEL = require('../models/service');
const SERVICE_CONTROLLER = require('../controllers/service');

/* Connect to a new in-memory database before running tests. */
beforeAll(async () => await DB_HANDLER.Connect());

/* Clear all test data after every test. */
afterEach(async () => await DB_HANDLER.ClearDatabase());

/* Remove and close the db and server. */
afterAll(async () => await DB_HANDLER.CloseDatabase());

/* Service Test Sutie. */
describe('Service', () => {
	it("Shouldn't create a service without a Token", async () => {
		return REQUEST(SERVER)
			.post('/services/create')
			.send({ name: 'Bath Mini' })
			.expect(401);
	});

	it("Shouldn't send service without a Token", async () => {
		return REQUEST(SERVER)
			.get('/services/find')
			.expect(401);
	});

	it("Shouldn't send shots without a Token", async () => {
		return REQUEST(SERVER)
			.get('/services/shots')
			.expect(401);
	});

	it("Shouldn't send services without a Token", async () => {
		return REQUEST(SERVER)
			.get('/services')
			.expect(401);
	});

	it("Shouldn't update service without a Token", async () => {
		return REQUEST(SERVER)
			.post('/services/update')
			.send({ _id: '01234', name: 'Bath Mini' })
			.expect(401);
	});

	it("Shouldn't delete service without a Token", async () => {
		return REQUEST(SERVER)
			.get('/services/delete')
			.expect(401);
	});
});
