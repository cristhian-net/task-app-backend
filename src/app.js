const express = require('express');
const bodyParser = require('body-parser');

require('./db/db');
const router = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(router);

module.exports = app;
