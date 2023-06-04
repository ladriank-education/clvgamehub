const settings = require('../settings');
const express = require('express');
const cors = require('cors');
const router = express.Router();

const ScoreboardController = require('../controllers/ScoreboardController');
const UserController = require('../controllers/UserController');
const GameController = require('../controllers/GameController');

router.get('/', cors(), (request, response, next) => {
	const user_nickname = request.query.user;
	const game_name = request.query.game;
	const top = request.query.top;

	if (user_nickname && game_name) {
		Promise.all([
		             UserController.getByNickname(user_nickname),
		             GameController.getByName(game_name)
     	])
		.then(function([user, game]) {
			if (user && game) {
				return ScoreboardController.getGameUserScoreboard(game.id, user.id);
			} else {
				return null;
			}
		})
		.then(function (scoreboard) {
			if (scoreboard) {
				response.status(200).json(scoreboard);
			}	else {
				response.status(404).json({'message': 'not found'});
			}

		})
		.catch(function(e) {
			next(e);
		});

	} else if (user_nickname) {
		UserController.getByNickname(user_nickname)
		.then(function (user) {
			if (user) {
				return ScoreboardController.getUserScoreboards(user.id);
			}
		})
		.then(function (scoreboard) {
			if (scoreboard) {
				response.status(200).json(scoreboard);
			}	else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function(error) {
			console.log(error);
			response.status(500).json({'message': 'internal server error'});
		});

	} else if (game_name && top && /^\d$/g.test(top)) {
		GameController.getByName(game_name)
		.then(function (game) {
			if (game) {
				return ScoreboardController.getTop(game.id, top)
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.then(function (scoreboard) {
			if (scoreboard) {
				response.status(200).json(scoreboard);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function(e) {
			next(e);
		});

	} else if (game_name && top && /^highsc$/g.test(top)) {
		GameController.getByName(game_name)
		.then(function (game) {
			if (game) {
				return ScoreboardController.getHighsc(game.id)
			}
		})
		.then(function (scoreboard) {
			if (scoreboard) {
				response.status(200).json(scoreboard);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function(e) {
			next(e);
		});

	} else if (game_name) {
		GameController.getByName(game_name)
		.then(function (game) {
			if (game) {
				return ScoreboardController.getGameScoreboards(game.id)
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.then(function (scoreboard) {
			if (scoreboard) {
				response.status(200).json(scoreboard);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function(e) {
			next(e);
		});
	} else {
		response.status(400).json({'message': 'method not allowed'});
	}
});

router.post('/', cors(), (request, response) => {
		const user_nickname = request.body.user;
		const game_name = request.body.game;
		const score = request.body.score;
		const action = request.body.action;

		Promise.all([
		             UserController.getByNickname(user_nickname),
		             GameController.getByName(game_name)
		             ])
		.then(function([user, game]) {
			if (user && game) {
				if (/^create$/.test(action)) {
					return ScoreboardController.setUserScore(user.id, game.id, score);
				} else if (/^update$/.test(action)) {
					return ScoreboardController.updateUserScore(user.id, game.id, score);
				} else {
					response.status(400).json({'message': 'bad request'});
					next(e);
				}
			} else {
				return null;
			}
		})
		.then(function(scoreboard) {
			if (scoreboard) {
				response.status(200).json(scoreboard);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function(e) {
			next(e);
		});
});

module.exports = router;