const REQUEST = require('supertest');
const SERVER = require('../mock_server');

const MONGOOSE = require('mongoose');

const DB_HANDLER = require('./db_handler');
const USER_MODEL = require('../models/user');
const USER_CONTROLLER = require('../controllers/user');

/* Connect to a new in-memory database before running tests. */
beforeAll(async () => await DB_HANDLER.Connect());

/* Clear all test data after every test. */
afterEach(async () => await DB_HANDLER.ClearDatabase());

/* Remove and close the db and server. */
afterAll(async () => await DB_HANDLER.CloseDatabase());

/* User Test Sutie. */
describe('User', () => {
	it("Shouldn't get user without a Token", async () => {
		return REQUEST(SERVER)
			.get('/users/find')
			.expect(401);
	});

	it("Shouldn't signup user without a Token", async () => {
		return REQUEST(SERVER)
			.post('/users/signup')
			.send({})
			.expect(401);
	});

	it("Shouldn't update user without a Token", async () => {
		return REQUEST(SERVER)
			.post('/users/update')
			.send({})
			.expect(401);
	});

	it("Shouldn't delete user without a Token", async () => {
		return REQUEST(SERVER)
			.post('/users/delete')
			.send({})
			.expect(401);
	});

	it("Shouldn't get users without a Token", async () => {
		return REQUEST(SERVER)
			.get('/users')
			.expect(401);
	});
});
