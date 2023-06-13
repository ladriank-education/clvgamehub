const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
	const attributes = {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		directory: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	};

	const options = {
		sequelize,
		tableName: 'game',
		schema: 'public',
		timestamps: false,
		indexes: [
		{
			name: "game_pkey",
			unique: true,
			fields: [
			         { name: "id" },
			         ]
		},
		]
	};
	return sequelize.define('Game', attributes, options);
};