const settings = require('../settings');
const express = require('express');
const cors = require('cors');
const router = express.Router();

const fs = require('fs');
const path = require('path');

const GameController = require('../controllers/GameController');

router.get('/', cors(), (request, response, next) => {
	template = settings.server.templates_dir + 'desktop.html';

	GameController.getAll()
	.then(function (games) {
		if (games) {
			let _games = games.map(_game => _game.toJSON());
			response.status(200).render(template, {'games': _games})
		}
	}).catch(function (e) {
		next(e);
	});
});

module.exports = router;