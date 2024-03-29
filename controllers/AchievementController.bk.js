const db = require('../db');
var DataTypes = require("sequelize").DataTypes;
const { Op } = require("sequelize");
const Achievement = require('../models/Achievement')(db, DataTypes);

/**
 * 
 * @return Achievement[]
 * 
 **/
const getAll = async () => {
	try
	{
		achievement = await Achievement.findAll();
		return (achievement.length > 0) ? achievement : null;
	}
	catch (e)
	{
		throw e;
	}
};

/**
 * 
 * @param achievement_id
 * @return Achievement
 * 
 **/
const getById = async (achievement_id) => {
	try {
		achievement = await Achievement.findByPk(achievement_id);
		return (achievement) ? achievement : null;
	} catch (e) {
		throw e;
	}
};

/**
 * 
 * @param name
 * @return Achievement
 * 
 **/
const getByName = async (name) => {
	try
	{
		achievement = await Achievement.findOne({
			where: {
				name: {
					[Op.iLike]: `${name}`
				}
			}
		});

		return (achievement) ? achievement : null;
	}
	catch (e)
	{
		throw e;
	}
};

/**
 * 
 * @param game_id
 * @return Achievement[]
 * 
 **/
const getByGame = async(game_id) => {
	try {
		achievement = await Achievement.findAll({
			where: {
				game_id: game_id,
			},
		});
		return (achievement.length > 0) ? achievement : null;
	} catch (e) {
		throw e;
	}
};

module.exports = {
	getAll,
	getById,
	getByGame,
};