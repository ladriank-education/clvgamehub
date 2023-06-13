const db = require('../db');
var DataTypes = require("sequelize").DataTypes;
const { Op } = require("sequelize");
const UserAchievements = require('../models/UserAchievements')(db, DataTypes);
const Achievement = require('../models/Achievement')(db, DataTypes);
const AchievementController = require('./AchievementController');
/**
 * 
 * @param achievement_id
 * @param user_id
 * @return Achievement
 * 
 **/
const getByAchievementAndUser = async(achievement_id, user_id) => {
	try {
		const achievement = await UserAchievements.findOne({
			where: {
				achievement_id: achievement_id,
				user_id: user_id,
			},
		});
		return (achievement) ? achievement : null;
	} catch (e) {
		throw e;
	}
};

/**
 * 
 * @param user_id
 * @return Achievement[]
 * 
 **/
const getByUser = async (user_id) => {
	try {
		const achievement = await UserAchievements.findAll({
			where: {
				user_id: user_id,
			},
		});
		return (achievement.length > 0)? achievement : null;
	} catch (e) {
		throw e;
	}
};

/**
 * 
 * @param game_id
 * @param user_id
 * @return Achievement[]
 * 
 **/
const getAtGameByUser = async (game_id, user_id) => {
	try {
		const achievement = await AchievementController.getById(game_id);
		const user_achievement = await UserAchievements.findAll({
			where: {
				user_id: user_id,
				achievement_id: achievement.id
			},
		});
		return (user_achievement.length > 0) ? user_achievement : null;
	} catch (e) {
		throw e;
	}
};

/**
 * 
 * @param achievement_id
 * @param user_id
 * @return Achievement
 * 
 **/
const unlockAchievement = async(achievement_id, user_id) => {
	try {
		const achievement = await UserAchievements.create({
			achievement_id: achievement_id,
			user_id: user_id,
		});
		return (achievement) ? achievement : null;
	} catch (e) {
		throw e;
	}
};

module.exports = {
	getByAchievementAndUser,
	getByUser,
	getAtGameByUser,
	unlockAchievement,
};