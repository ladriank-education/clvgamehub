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
		achievement_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Achievement',
				key: 'id'
			}
		}
	};

	const options = {
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
	};
	
	return sequelize.define('UserAchievements', attributes, options);
};