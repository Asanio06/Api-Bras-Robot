const express = require('express');
require('dotenv').config('./.env');

const brasRobotRoute = require('./routes/brasRobot.route');

const app = express();

const port = 8000;
app.use('/api',brasRobotRoute)
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}`);
});