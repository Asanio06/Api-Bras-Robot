const router = require('express').Router();

const brasRobotController = require('../controller/brasRobot.controller');

router.post('/', brasRobotController.createMouve);


module.exports = router;