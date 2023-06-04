const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('UserAchievements', {
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
		achievement_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Achievement',
				key: 'id'
			}
		}
	}, {
		sequelize,
		tableName: 'user_achievements',
		schema: 'public',
		timestamps: false,
		indexes: [
		{
			name: "user_achievements_pkey",
			unique: true,
			fields: [
			         { name: "id" },
			         ]
		},
		]
	});
};