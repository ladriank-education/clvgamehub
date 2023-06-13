const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {

	const attributes = {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		nickname: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: "user_nickname_key"
		},
		password: {
			type: DataTypes.STRING(32),
			allowNull: false
		}
	};

	const options = {
		sequelize,
		tableName: 'user',
		schema: 'public',
		timestamps: false,
		indexes: [
		{
			name: "user_nickname_key",
			unique: true,
			fields: [
			         { name: "nickname" },
			         ]
		},
		{
			name: "user_pkey",
			unique: true,
			fields: [
			         { name: "id" },
			         ]
		},
		]
	};

	return sequelize.define('User', attributes, options);
};
