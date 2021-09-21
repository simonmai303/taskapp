const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT || 3000;

MongoClient.connect(
	process.env.MONGO_URI,
	{ useNewUrlParser: true },
	function (err, client) {
		module.exports = client;
		const app = require('./app');
		app.listen(port);
	}
);
