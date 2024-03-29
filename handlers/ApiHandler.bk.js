const settings = require('../settings');
const express = require('express');
const cors = require('cors');
const router = express.Router();

const UserHandler = require('./UserHandler');
const GameHandler = require('./GameHandler');
const AchievementHandler = require('./AchievementHandler');
const ScoreboardHandler = require('./ScoreboardHandler');
const UserAchievementsHandler = require('./UserAchievementsHandler');

router.use('/user', UserHandler);
router.use('/game', GameHandler);
router.use('/scoreboard', ScoreboardHandler);
router.use('/achievement', AchievementHandler);
/* router.use('/userachievements/', UserAchievementsHandler); */

module.exports = router;