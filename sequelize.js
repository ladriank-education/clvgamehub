const settings = require('./settings')
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(settings.database.name, settings.database.user, settings.database.pass, {
  host: settings.database.host,
  dialect: settings.database.dialect,
});

  // Aquí se definen los modelos y las relaciones

module.exports = {
  sequelize,
    // Aquí se exportan los modelos
};
