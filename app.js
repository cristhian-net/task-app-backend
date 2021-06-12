const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(router);

const port = process.env.APP_PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
