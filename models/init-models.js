const sequelize = require('sequelize');
const DataTypes = require("sequelize").DataTypes;

var _Achievement = require("./Achievement");
var _Game = require("./Game");
var _Scoreboard = require("./Scoreboard");
var _User = require("./User");
var _UserAchievements = require("./UserAchievements");

function initModels(sequelize) {
  var Achievement = _Achievement(sequelize, DataTypes);
  var Game = _Game(sequelize, DataTypes);
  var Scoreboard = _Scoreboard(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);
  var UserAchievements = _UserAchievements(sequelize, DataTypes);

  UserAchievements.belongsTo(Achievement, {foreignKey: "achievement_id"});
  Achievement.hasMany(UserAchievements, {foreignKey: "achievement_id"});
  Achievement.belongsTo(Game, {foreignKey: "game_id"});
  Game.hasMany(Achievement, {foreignKey: "game_id"});
  Scoreboard.belongsTo(Game, {foreignKey: "game_id"});
  Game.hasMany(Scoreboard, {foreignKey: "game_id"});
  Scoreboard.belongsTo(User, {foreignKey: "user_id"});
  User.hasMany(Scoreboard, {foreignKey: "user_id"});
  UserAchievements.belongsTo(User, {foreignKey: "user_id"});
  User.hasMany(UserAchievements, {foreignKey: "user_id"});

  return {
    Achievement,
    Game,
    Scoreboard,
    User,
    UserAchievements,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
