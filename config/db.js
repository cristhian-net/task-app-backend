const mongoose = require('mongoose');

const dbConnectionString = require('./keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    dbConnectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

module.exports = mongoose;
