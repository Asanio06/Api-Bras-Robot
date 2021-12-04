const express = require('express');
require('dotenv').config('./.env');
var cors = require('cors')

const brasRobotRoute = require('./routes/brasRobot.route');

const app = express();
app.use(cors())
const port = 8000;
app.use('/api',brasRobotRoute)
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}`);
});