const settings = require('./settings');
const { Sequelize } = require('sequelize');

/**
 * Initializes database connection
 */
module.exports = new Sequelize(settings.database.name, settings.database.user, settings.database.pass, {
	host: settings.database.host,
	dialect: settings.database.dialect,
	port: settings.database.port,
	logging: false,
});