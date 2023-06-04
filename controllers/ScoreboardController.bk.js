const db = require('../db');
var DataTypes = require("sequelize").DataTypes;
const Scoreboard = require('../models/Scoreboard')(db, DataTypes);

/**
 * 
 * @param game_id
 * @param user_id
 * @return Scoreboard
 * 
 **/
const getGameUserScoreboard = async(game_id, user_id) => {
	try {
		scoreboard = await Scoreboard.findOne({
			where: {
				game_id: game_id,
				user_id: user_id,
			},
		});
		return (scoreboard) ? scoreboard : null;
	} catch(e) {
		throw e;
	}
};

/**
 * 
 * @param game_id
 * @return Scoreboard[]
 * 
 **/
const getGameScoreboards = async(game_id) => {
	try {
		scoreboard = await Scoreboard.findAll({
			where: {
				game_id: game_id
			},
		});
		return (scoreboard.length > 0) ? scoreboard : null;
	} catch(e) {
		throw e;
	}
};

/**
 * 
 * @param user_id
 * @return Scoreboard[]
 * 
 **/
const getUserScoreboards = async(user_id) => {
	try {
		scoreboard = await Scoreboard.findAll({
			where: {
				user_id: user_id
			},
		});
		return (scoreboard.length > 0) ? scoreboard : null;
	} catch(e) {
		throw e;
	}
};

/**
 * 
 * @param game_id
 * @return Scoreboard
 * 
 **/
const getHighsc = async(game_id) => {
	try {
		scoreboard = await Scoreboard.findOne({
			where: {
				game_id: game_id,
			},
			order: [
				['score', 'DESC'],
			],
			limit: 1,
		});
		return (scoreboard) ? scoreboard : null;
	} catch(e) {
		throw e;
	}
};

/**
 * 
 * @param game_id
 * @param top
 * @return Scoreboard[]
 * 
 **/
const getTop = async(game_id, top) => {
	try {
		scoreboard = await Scoreboard.findAll({
			where: {
				game_id: game_id,
			},
			order: [
				['score', 'DESC'],
			],
			limit: top,
		});
		return (scoreboard.length > 0)? scoreboard : null;
	} catch(e) {
		throw e;
	}
};

/**
 * 
 * @param user_id
 * @param game_id
 * @param score
 * @return Scoreboard
 * 
 **/
const setUserScore = async(user_id, game_id, score) => {
	try {
		scoreboard = await Scoreboard.create({
			user_id: user_id,
			game_id: game_id,
			score: score,
		});
		return (scoreboard) ? scoreboard : null;
	} catch (e) {
		throw e;
	}
};

/**
 * 
 * @param user_id
 * @param game_id
 * @param score
 * @return Scoreboard
 * 
 **/
const updateUserScore = async(user_id, game_id, score) => {
	try {
		scoreboard = await Scoreboard.findOne({
			where: {
				user_id: user_id,
				game_id: game_id,
			}
		});
		scoreboard.score = Number(score);
		await scoreboard.save();
		return (scoreboard) ? scoreboard : null;
	} catch(e) {
		throw e;
	}
};

module.exports = {
	getGameUserScoreboard,
	getGameScoreboards,
	getUserScoreboards,
	getHighsc,
	getTop,
	setUserScore,
	updateUserScore,
};