const MONGOOSE = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const MONGOD = new MongoMemoryServer();

/* Connect to the in-memory database. */
module.exports.Connect = async () => {
	const URI = await MONGOD.getUri();

	const MONGOOSE_OPTS = {
		useNewUrlParser: true,
		autoReconnect: true,
		reconnectTries: Number.MAX_VALUE,
		reconnectInterval: 1000
	};

	await MONGOOSE.connect(URI, MONGOOSE_OPTS);
};

/* Drop database, close the connection and stop mongod. */
module.exports.CloseDatabase = async () => {
	await MONGOOSE.connection.dropDatabase();
	await MONGOOSE.connection.close();
	await MONGOD.stop();
};

/* Remove all the data for all db collections. */
module.exports.ClearDatabase = async () => {
	const COLLECTIONS = MONGOOSE.connection.collections;

	for(const KEY in COLLECTIONS){
		const COLLECTION = COLLECTIONS[KEY];
		await COLLECTION.deleteMany();
	}
};
