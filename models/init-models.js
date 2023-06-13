const db = require('../db');
const DataTypes = require("sequelize").DataTypes;

const _Achievement = require("./Achievement");
const _Game = require("./Game");
const _Scoreboard = require("./Scoreboard");
const _User = require("./User");
const _UserAchievements = require("./UserAchievements");

function initModels(db) {
	const Achievement = _Achievement(db, DataTypes);
	const Game = _Game(db, DataTypes);
	const Scoreboard = _Scoreboard(db, DataTypes);
	const User = _User(db, DataTypes);
	const UserAchievements = _UserAchievements(db, DataTypes);

	UserAchievements.associate = (models) => {
		UserAchievements.belongsTo(models.Achievement, { foreignKey: "achievement_id" });
		UserAchievements.belongsTo(models.User, { foreignKey: "user_id" });
	};

	Achievement.associate = (models) => {
		Achievement.belongsTo(models.Game, { foreignKey: "game_id" });
		Game.hasMany(Achievement, { foreignKey: "game_id" });
		Achievement.hasMany(models.UserAchievements, { foreignKey: "achievement_id" });
	};

	Game.associate = (models) => {
		Game.hasMany(models.Achievement, { foreignKey: "game_id" });
		Game.belongsTo(models.Scoreboard, { foreignKey: "game_id" });
		Scoreboard.hasMany(Game, { foreignKey: "game_id" });
	};

	Scoreboard.associate = (models) => {
		Scoreboard.belongsTo(models.User, { foreignKey: "user_id" });
		User.hasMany(Scoreboard, { foreignKey: "user_id" });
	};

}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;