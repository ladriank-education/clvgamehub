const settings = require('./settings');
const SequelizeAuto = require('sequelize-auto');

const auto = new SequelizeAuto(settings.database.name, settings.database.user, settings.database.pass, {
	host: settings.database.host,
	dialect: settings.database.dialect,
	caseModel: 'pc',
	caseFile: 'pc',
	singularize: true,
	additional: {
		timestamps: false,
	},
});



auto.run(function (err) {
	if (err) {
		throw err;
	}

	auto.on('error', function(err) {
		console.log('Error occurred: ' + err);
	});

	auto.on('done', function() {
		console.log('Models generated successfully!');
	});

	auto.on('table', function(tableName) {
		console.log('Se ha encontrado la tabla: ' + tableName);
	});

	console.log(auto.tables);
	console.log(auto.foreignKeys);
});