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
			type: DataTypes.STRING(20),
			allowNull: false
		},
		description: {
			type: DataTypes.STRING(90),
			allowNull: false
		},
		game_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Game',
				key: 'id'
			}
		}
	};

	const options = {
		sequelize,
		tableName: 'achievement',
		schema: 'public',
		timestamps: false,
		indexes: [
		{
			name: "achievement_pkey",
			unique: true,
			fields: [
			         { name: "id" },
			         ]
		},
		]
	};

	return sequelize.define('Achievement', attributes, options);
};