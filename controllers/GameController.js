const db = require('../db');
var DataTypes = require("sequelize").DataTypes;
const { Op } = require("sequelize");
const Game = require('../models/Game')(db, DataTypes);
/**
 * 
 * @returns {Game[]}
 */
const getAll = async () => {try	{game = await Game.findAll();
return (game.length > 0) ? game : null;
} catch (e) {throw e;
} };
/**
 * 
 * @param {number} id 
 * @returns {Game}
 */
const getById = async (id) => {try	{game = await Game.findByPk(id);
return (game)? game : null;
} catch (e)	{throw e;
} };
/**
 * 
 * @param {string} name 
 * @returns {Game}
 */
const getByName = async (name) => {try	{game = await Game.findOne({where: {name: {[Op.iLike]: `${name}` } } });
return (game) ? game : null;
} catch (e) {throw e;
} };
module.exports = {getAll, getById, getByName, };
