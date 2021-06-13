const mongoose = require('mongoose');

const dbConnectionString = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose
  .connect(
    dbConnectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

module.exports = mongoose;
