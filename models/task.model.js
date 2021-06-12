const mongoose = require('mongoose');

const { Schema } = mongoose;

const task = new Schema({
  title: String,
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', task);
