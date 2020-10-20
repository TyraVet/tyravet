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
const app = EXPRESS();

/* Defining middlewares */
app.use(MORGAN('combined'));
app.use(BODY_PARSER.json());
app.use(BODY_PARSER.urlencoded({ extend: true }));
app.use(CORS());

/* Static Folder */
app.use(SERVE_STATIC(__dirname + '../client/dist'));
app.use(EXPRESS.static('uploads', { etag: false }));

/* Upload Files */
app.use(FILE_UPLOAD({ createParentPath: true }));

/* Using routes */
app.use(process.env.TYRAWEB_ROUTE_USERS, USER_ROUTER);
app.use(process.env.TYRAWEB_ROUTE_BREED, BREED_ROUTER);
app.use(process.env.TYRAWEB_ROUTE_CLIENTS, CLIENT_ROUTER);
app.use(process.env.TYRAWEB_ROUTE_PETS, PET_ROUTER);
app.use(process.env.TYRAWEB_ROUTE_SERVICES, SERVICE_ROUTER);
app.use(process.env.TYRAWEB_ROUTE_DAY_SCHEDULES, DAY_SCHEDULE_ROUTER);

app.listen(PORT, error => {
	if(error)
		return console.log(error);

	return console.log('Server is listening on ' + PORT);
})

module.exports = app;
