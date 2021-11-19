const router = require('express').Router();

const brasRobotController = require('../controller/brasRobot.controller');

router.get('/', brasRobotController.createMouve);


module.exports = router;