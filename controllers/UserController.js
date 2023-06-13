const db = require('../db');
var DataTypes = require("sequelize").DataTypes;
const { Op } = require("sequelize");
const User = require('../models/User')(db, DataTypes);

/**
 * 
 * @returns {Object[]}
 **/
const getAll = async () => {
	try	{
		user = await User.findAll();
		return (user.length > 0) ? user.map(u => ({'id': u.id, 'nickname': u.nickname})) : null;
	}
	catch (e) {
		throw e;
	}
};

/**
 * 
 * @param {number} id
 * @return {User}
 * 
 **/
const getById = async (id) => {
	try
	{
		user = await User.findByPk(id);
		return (user) ? {'id': user.id, 'nickname': user.nickname} : null;
	}
	catch (e)
	{
		throw e;
	}
};

/**
 * 
 * @param {string} nickname 
 * @returns {Object}
 */
const getByNickname = async (nickname) => {
	try
	{
		user = await User.findOne({
			where: {
				nickname: {
					[Op.iLike]: nickname
				},
			}
		});
		return (user) ? {'id': user.id, 'nickname': user.nickname} : null;
	}
	catch (e)
	{
		throw e;
	}
};

/**
 * 
 * @param {string} nickname
 * @param {string} pwd
 * @return {Object}
 * 
 **/
const login = async (nickname, pwd) => {
	try
	{
		user = await User.findOne({
			where: {
				nickname: {
					[Op.iLike]: nickname,
				},
				password: pwd,
			}
		});

		return (user) ? {'id': user.id, 'nickname': user.nickname} : null;
	}
	catch (e)
	{
		throw e;
	}
};

/**
 * 
 * @param {string} nickname
 * @param {string} pwd
 * @return {Object}
 * 
 **/
const create = async(nickname, pwd) => {
	try {
		user = await User.create({
			nickname: nickname,
			password: pwd,
		});

		return (user) ? {'id': user.id, 'nickname': user.nickname} : null;
	} catch (e) {
		throw e;
	}
};

module.exports = {
	getAll,
	getById,
	getByNickname,
	login,
	create,
};