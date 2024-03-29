const settings = require('../settings');
const express = require('express');
const cors = require('cors');
const router = express.Router();

const GameController = require('../controllers/GameController');

router.get('/', cors(), (request, response, next) => {
	const id = request.query.id;
	const name = request.query.name;
	
	if (id) {
		GameController.getById(id)
		.then(function (game) {
			if (game) {
				response.status(200).json(game);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function (e) {
			next(e);
		});

	} else if (name) {
		GameController.getByName(name)
		.then(function (game) {
			if (game) {
				response.status(200).json(game);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function (e) {
			next(e);
		});

	} else {
		GameController.getAll()
		.then(function (games) {
			if (games) {
				response.status(200).json(games);
			} else {
				response.status(404).json({'message': 'not found'});
			}
		})
		.catch(function (e) {
			next(e);
		});
	}
});

module.exports = router;