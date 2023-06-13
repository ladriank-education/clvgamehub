const { Op } = require('sequelize');
const db = require('../db');
const UserAchievements = require('../models/UserAchievements')(db);
const Achievement = require('../models/Achievement')(db);
const Game = require('../models/Game')(db);
/**
 * 
 * @param {number} achievement_id 
 * @param {number} user_id 
 * @returns {Achievement}
 */
const getByAchievementAndUser = async(achievement_id, user_id) => {try {const achievement = await UserAchievements.findOne({where: {achievement_id: achievement_id, user_id: user_id, }, });
return (achievement) ? achievement : null;
} catch (e) {throw e;
} };
/**
 * 
 * @param {number} user_id 
 * @returns {Achievement[]}
 */
const getByUser = async (user_id) => {try {const achievement = await UserAchievements.findAll({where: {user_id: user_id, }, });
return (achievement.length > 0)? achievement : null;
} catch (e) {throw e;
} };
/**
 * 
 * @param {number} game_id 
 * @param {number} user_id 
 * @returns {Achievement[]}
 */
const getAtGameByUser = async (game_id, user_id) => {try {const achievement = await UserAchievements.findAll({where: {user_id: user_id, }, include: [{model: Achievement, where: {id: {[Op.col]: UserAchievements.achievement_id }, }, include: [{model: Game, where: {id: game_id } } ] } ] });
return (achievement.length > 0) ? achievement : null;
} catch (e) {throw e;
} };
/**
 * 
 * @param {number} achievement_id 
 * @param {number} user_id 
 * @returns {Achievement}
 */
const unlockAchievement = async(achievement_id, user_id) => {try {const achievement = await UserAchievements.create({achievement_id: achievement_id, user_id: user_id, });
return (achievement) ? achievement : null;
} catch (e) {throw e;
} };
module.exports = {getByAchievementAndUser, getByUser, getAtGameByUser, unlockAchievement, };
