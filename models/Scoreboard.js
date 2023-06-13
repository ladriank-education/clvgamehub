const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {

	const attributes = {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'User',
				key: 'id'
			}
		},
		game_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Game',
				key: 'id'
			}
		},
		score: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	};

	const options = {
		sequelize,
		tableName: 'scoreboard',
		schema: 'public',
		timestamps: false,
		indexes: [
		{
			name: "scoreboard_pkey",
			unique: true,
			fields: [
			         { name: "id" },
			         ]
		},
		]
	};

	return sequelize.define('Scoreboard', attributes, options);
};
