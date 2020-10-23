require('dotenv').config();

const EXPRESS = require('express');
const FILE_UPLOAD = require('express-fileupload');

/* Defining routes */
const USER_ROUTER = require('./routes/user');
const BREED_ROUTER = require('./routes/breed');
const CLIENT_ROUTER = require('./routes/client');
const PET_ROUTER = require('./routes/pet');
const SERVICE_ROUTER = require('./routes/service');
const DAY_SCHEDULE_ROUTER = require('./routes/day_schedule');

/* Defining app */
const APP = EXPRESS();

/* Upload Files */
APP.use(FILE_UPLOAD({ createParentPath: true }));

/* Using routes */
APP.use(process.env.TYRAWEB_ROUTE_USERS, USER_ROUTER);
APP.use(process.env.TYRAWEB_ROUTE_BREED, BREED_ROUTER);
APP.use(process.env.TYRAWEB_ROUTE_CLIENTS, CLIENT_ROUTER);
APP.use(process.env.TYRAWEB_ROUTE_PETS, PET_ROUTER);
APP.use(process.env.TYRAWEB_ROUTE_SERVICES, SERVICE_ROUTER);
APP.use(process.env.TYRAWEB_ROUTE_DAY_SCHEDULES, DAY_SCHEDULE_ROUTER);

module.exports = APP;
