/* import sequelize config */
const db = require('./db');

/* import sequelize models */ 
const initModels = require('./models/init-models');

/* instantiate Sequelize connector */
db.authenticate()
.then(() => {
	console.log('Connection to database successful.');
	/* initialize Sequelize models and perform relationships */
	initModels(db);
	console.log('Models instantiated.')
	

	const settings = require('./settings');
	const express = require('express');
	const cors = require('cors');
	var nunjucks = require('nunjucks');
	const bodyparser = require('body-parser');
	const server = express();

	/* import middleware */
	const RequestLogger = require('./middleware/RequestLogger');
	const ErrorLogger = require('./middleware/ErrorLogger');

	/* handlers import */
	const IndexHandler = require('./handlers/IndexHandler');
	const ApiHandler = require('./handlers/ApiHandler');




	/* template engine renderer */
	nunjucks.configure(settings.server.templates_dir, {
		autoescape: true,
		cache: false,
		express: server,
	});


	/* middleware use */
	server.use(cors());
	server.use(bodyparser.json());
	server.use(express.json());
	server.use(bodyparser.urlencoded({
		extended: true
	}));
	server.use('/static', express.static(settings.server.static_dir));

	/* request logger */
	server.use(RequestLogger);

	/* server contexts */
	server.use('/', IndexHandler);
	server.use('/api', ApiHandler);

	/* error logger */
	server.use(ErrorLogger);

	/* start the server */
	server.listen(settings.server.port, settings.server.host, () => {
		console.log("Started server on %s:%d.", settings.server.host, settings.server.port)
	});

})
.catch((e) => {
	console.log('Connection to database failed.');
	console.error(e)
});
