const express = require('express');
const mongoose = require('mongoose');

//require('dotenv').config();

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlparser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.APP_PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));