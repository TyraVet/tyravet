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

/* Using routes from the default env variables. */
APP.use('/users', USER_ROUTER);
APP.use('/breeds', BREED_ROUTER);
APP.use('/clients', CLIENT_ROUTER);
APP.use('/pets', PET_ROUTER);
APP.use('/services', SERVICE_ROUTER);
APP.use('/dayschedule', DAY_SCHEDULE_ROUTER);

module.exports = APP;
