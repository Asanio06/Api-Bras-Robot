const router = require('express').Router();

const brasRobotController = require('../controller/brasRobot.controller');

router.post('/', brasRobotController.createMouve);
router.post('/mode', brasRobotController.setBoolean);
router.get('/', brasRobotController.getPosition);


module.exports = router;