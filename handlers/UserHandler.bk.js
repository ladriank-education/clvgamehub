const settings = require('../settings');
const express = require('express');
const cors = require('cors');
const router = express.Router();

const UserController = require('../controllers/UserController');

const UserAchievementHandler = require('./UserAchievementsHandler');

router.get('/', cors(), (request, response, next) => {
	const id = request.query.id;
	const nickname = request.query.nickname;
	const pwd = request.query.pwd;
	console.log('usuario/');
	if (id) {
		UserController.getById(id)
		.then(function (user) {
			if (user) {
				response.status(200).json(user);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function (e) {
			next(e);
		});

	} else if (nickname && pwd) {
		UserController.login(nickname, pwd)
		.then(function (user) {
			if (user) {
				response.status(200).json(user)
			} else {
				response.status(401).json({'message': 'invalid credentials'});
			}
		})
		.catch(function (e) {
			next(e);
		});
		
	} else if (nickname) {
		UserController.getByNickname(nickname)
		.then(function (user) {
			if (user) {
				response.status(200).json(user);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function (e) {
			next(e);
		});
		
	} else {
		UserController.getAll()
		.then(function (users) {
			if (users) {
				response.status(200).json(users);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function (e) {
			next(e);
		});
	}
});

router.post('/', cors(), (request, response, next) => {
	const nickname = request.body.nickname;
	const pwd = request.body.pwd;

	UserController.create(nickname, pwd)
	.then(function (user) {
		if (user) {
			response.status(200).json(user)
		} else {
			response.status(500).json({'message': 'User could not be created'})
		}
	})
	.catch(function (e) {
		next(e);
	});
});

router.use('/achievements', UserAchievementHandler);

module.exports = router;