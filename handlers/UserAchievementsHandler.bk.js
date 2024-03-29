const settings = require('../settings');
const express = require('express');
const cors = require('cors');
const router = express.Router();

const UserAchievementsController = require('../controllers/UserAchievementsController');

const UserController = require('../controllers/UserController');
const AchievementController = require('../controllers/AchievementController');
const GameController = require('../controllers/GameController');

router.get('/', cors(), (request, response, next) => {
	const achievement_name = request.query.achievement;
	const user_nickname = request.query.nickname;
	const game_name = request.query.game;

	if (achievement_name && user_nickname) {
		Promise.all([
		             AchievementController.getByName(achievement_name),
		             UserController.getByNickname(user_nickname),
         ])
		.then(function ([achievement, user]) {
			if (achievement && user) {
				return UserAchievementsController.getByAchievementAndUser(achievement.id, user.id);
			} else {
				return null;
			}
		})
		.then(function (achievement) {
			if (achievement) {
				return response.status(200).json(achievement);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function (e) {
			next(e);
		});
	} else if (game_name && user_nickname) {
		Promise.all([
		             GameController.getByName(game_name),
		             UserController.getByNickname(user_nickname),
		])
		.then(function ([game, user]) {
			if (game && user) {
				return UserAchievementsController.getAtGameByUser(game.id, user.id);
			} else {
				return null;
			}
		})
		.then(function (achievement) {
			if (achievement) {
				response.status(200).json(achievement);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function (e) {
			next(e);
		});
	} else if (user_nickname) {
		UserController.getByNickname(user_nickname)
		.then(function (user) {
			if (user) {
				return UserAchievementsController.getByUser(user.id);
			} else {
				return null;
			}
		})
		.then(function (achievement) {
			if (achievement) {
				response.status(200).json(achievement);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function (e) {
			next(e);
		});
	} else {
		response.status(400).json({'message': 'bad request'});
	}
});

router.post('/', cors(), (request, response, next) => {
	const achievement_name = request.body.achievement;
	const user_nickname = request.body.nickname;

	if (achievement_name && user_nickname) {
		Promise.all([
		             AchievementController.getByName(achievement_name),
		             UserController.getByNickname(user_nickname),
     	])
     	.then(function ([achievement, user]) {
     		if (achievement && user) {
     			return UserAchievementsController.unlockAchievement(achievement.id, user.id);
     		} else {
     			return null;
     		}
     	})
     	.then(function (achievement) {
     		if (achievement) {
     			response.status(200).json(achievement);
     		} else {
     			response.json(500).json({'message': 'Achievement could not be unlocked'});
     		}
     	})
     	.catch(function (e) {
     		next(e);
     	});
	} else {
		response.status(400).json({'message': 'bad request'});
	}
});

module.exports = router;