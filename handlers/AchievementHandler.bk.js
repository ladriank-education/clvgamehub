const settings = require('../settings');
const express = require('express');
const cors = require('cors');
const router = express.Router();

const AchievementController = require('../controllers/AchievementController');
const GameController = require('../controllers/GameController');

router.get('/', cors(), (request, response, next) => {
	const achievement_id = request.query.id;
	const achievement_name = request.query.name;
	const game_name = request.query.game;

	if (achievement_id) {
		AchievementController.getById(achievement_id)
		.then(function (achievement) {
			if (achievement) {
				response.status(200).json(achievement);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function (e){
			next(e);
		});
	} else if (achievement_name) {
		AchievementController.getByName(achievement_name)
		.then(function (achievement) {
			if (achievement) {
				response.status(200).json(achievement);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function (e){
			next(e);
		});;
	} else if (game_name) {
		GameController.getByName(game_name)
		.then(function (game) {
			if (game) {
				return AchievementController.getByGame(game.id);
			} else {
				response.status(404).json({'message': 'Game not found'});
			}
		})
		.then(function (achievement) {
			if (achievement) {
				response.status(200).json(achievement);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function (e){
			next(e);
		});;
	} else {
		AchievementController.getAll()
		.then(function (achievement) {
			if (achievement) {
				response.status(200).json(achievement);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function (e){
			next(e);
		});
	}
});

module.exports = router;