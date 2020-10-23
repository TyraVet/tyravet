require('dotenv').config();

const EXPRESS = require('express');
const CORS = require('cors');
const BODY_PARSER = require('body-parser');
const MORGAN = require('morgan');
const SERVE_STATIC = require('serve-static');
const FILE_UPLOAD = require('express-fileupload');

/* Defining port */
const PORT = process.env.PORT || 3000;

/* Mongo DB Connection */
const MONGOOSE = require('mongoose');
MONGOOSE.connect(process.env.MONGODB_TYRAWEB_TEST, { useNewUrlParser: true });

const DB = MONGOOSE.connection;
DB.on('error', (error) => console.error(error));
DB.once('open', () => console.log('Connected to database!'));

/* Defining routes */
const USER_ROUTER = require('./routes/user');
const BREED_ROUTER = require('./routes/breed');
const CLIENT_ROUTER = require('./routes/client');
const PET_ROUTER = require('./routes/pet');
const SERVICE_ROUTER = require('./routes/service');
const DAY_SCHEDULE_ROUTER = require('./routes/day_schedule');

/* Defining app */
const APP = EXPRESS();

/* Defining middlewares */
APP.use(MORGAN('combined'));
APP.use(BODY_PARSER.json());
APP.use(BODY_PARSER.urlencoded({ extend: true }));
APP.use(CORS());

/* Static Folder */
APP.use(SERVE_STATIC(__dirname + '../client/dist'));
APP.use(EXPRESS.static('uploads', { etag: false }));

/* Upload Files */
APP.use(FILE_UPLOAD({ createParentPath: true }));

/* Using routes */
APP.use(process.env.TYRAWEB_ROUTE_USERS, USER_ROUTER);
APP.use(process.env.TYRAWEB_ROUTE_BREED, BREED_ROUTER);
APP.use(process.env.TYRAWEB_ROUTE_CLIENTS, CLIENT_ROUTER);
APP.use(process.env.TYRAWEB_ROUTE_PETS, PET_ROUTER);
APP.use(process.env.TYRAWEB_ROUTE_SERVICES, SERVICE_ROUTER);
APP.use(process.env.TYRAWEB_ROUTE_DAY_SCHEDULES, DAY_SCHEDULE_ROUTER);

APP.listen(PORT, error => {
	if(error)
		return console.error(error);

	return console.log('Server is listening on ' + PORT);
})

module.exports = APP;
