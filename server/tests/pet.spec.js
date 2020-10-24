const REQUEST = require('supertest');
const SERVER = require('../mock_server');

const MONGOOSE = require('mongoose');

const DB_HANDLER = require('./db_handler');
const PET_MODEL = require('../models/pet');
const PET_CONTROLLER = require('../controllers/pet');

/* Connect to a new in-memory database before running tests. */
beforeAll(async () => await DB_HANDLER.Connect());

/* Clear all test data after every test. */
afterEach(async () => await DB_HANDLER.ClearDatabase());

/* Remove and close the db and server. */
afterAll(async () => await DB_HANDLER.CloseDatabase());

/* Pet Test Sutie. */
describe('Pet', () => {
	it("Shouldn't get pet without a Token", async () => {
		return REQUEST(SERVER)
			.get('/pets')
			.send({})
			.expect(401);
	});

	it("Shouldn't get pets without a Token", async () => {
		return REQUEST(SERVER)
			.get('/pets/all')
			.expect(401);
	});

	it("Shouldn't upload picture without a Token", async () => {
		return REQUEST(SERVER)
			.post('/pets/upload-picture')
			.send({})
			.expect(401);
	});

	it("Shouldn't get pet picture without a Token", async () => {
		return REQUEST(SERVER)
			.get('/pets/picture')
			.expect(401);
	});
});
