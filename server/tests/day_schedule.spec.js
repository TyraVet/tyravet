const REQUEST = require('supertest');
const SERVER = require('../mock_server');

const MONGOOSE = require('mongoose');

const DB_HANDLER = require('./db_handler');
const DAY_SCHEDULE_MODEL = require('../models/day_schedule');
const DAY_SCHEDULE_CONTROLLER = require('../controllers/day_schedule');

/* Connect to a new in-memory database before running tests. */
beforeAll(async () => await DB_HANDLER.Connect());

/* Clear all test data after every test. */
afterEach(async () => await DB_HANDLER.ClearDatabase());

/* Remove and close the db and server. */
afterAll(async () => await DB_HANDLER.CloseDatabase());

/* Day Schedule Test Sutie. */
describe('Day Schedule', () => {
	it("Shouldn't create a day schedule without a Token", async () => {
		return REQUEST(SERVER)
			.post('/dayschedules')
			.send({ date: new Date() })
			.expect(401);
	});

	it("Shouldn't add appointment without a Token", async () => {
		return REQUEST(SERVER)
			.post('/dayschedules/add-appointment')
			.send()
			.expect(401);
	});

	it("Shouldn't update appointment without a Token", async () => {
		return REQUEST(SERVER)
			.post('/dayschedules/update-appointments')
			.send()
			.expect(401);
	});
});
