const settings = require('./settings')
const Sequelize = require('sequelize')

var db = new Sequelize(settings.database.name, settings.database.user, settings.database.pass, {
    host: settings.database.host,
    dialect: settings.database.dialect,
    port: settings.database.port,
    logging: false,
});

module.exports = db