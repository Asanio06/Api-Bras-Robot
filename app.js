const express = require('express');
require('dotenv').config('./.env');


const app = express();

const port = 8000;

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}`);
});