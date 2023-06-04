const settings = require('../settings');
const express = require('express');
const cors = require('cors');
const router = express.Router();

const DesktopHandler = require('./DesktopHandler');
const GamesHandler = require('./GamesHandler');

router.use('/jugar', GamesHandler);
router.use('/', DesktopHandler);

module.exports = router;