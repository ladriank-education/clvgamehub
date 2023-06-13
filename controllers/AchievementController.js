const db = require('../db');
 var DataTypes = require("sequelize").DataTypes;
 const { Op } = require("sequelize");
 const Achievement = require('../models/Achievement')(db, DataTypes);
/**
 * 
 * @returns {Achievemet[]}
 */
 const getAll = async () => {try {achievement = await Achievement.findAll();
 return achievement.length > 0 ? achievement : null;
 } catch (e) {throw e;
 } };
 /** 
  * @param {number} achievement_id 
  * @return {Achievement}
  */ 
 const getById = async (achievement_id) => {try {achievement = await Achievement.findByPk(achievement_id);
 return achievement ? achievement : null;
 } catch (e) {throw e;
 } };
 /**
  * @param {string} name 
  * @return {Achievement} 
  */ 
 const getByName = async (name) => {try {achievement = await Achievement.findOne({where: {name: {[Op.iLike]: `${name}` } } });
 return achievement ? achievement : null;
 } catch (e) {throw e;
 } };
 /**
  * 
  * @param {number} game_id 
  * @returns {Achievement[]}
  */
 const getByGame = async(game_id) => {try {achievement = await Achievement.findAll({where: {game_id: game_id, }, });
 return achievement.length > 0 ? achievement : null;
 } catch (e) {throw e;
 } };
 module.exports = {getAll, getById, getByName, getByGame, };
