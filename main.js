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

/*
  setting up the server

  module, description
  -------------------
  bodyparser, for retreiving POST data
  nunjucks, html template renderer
  cors, automatic cors (cross-origin resource sharing) headers embedding
  json, better json parser
  static_url, static_directory

*/

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
server.listen(settings.server.port, settings.server.host, function () {
	console.log("Started server on %s:%d", settings.server.host, settings.server.port)
});