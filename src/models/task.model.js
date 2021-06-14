const mongoose = require('mongoose');

const { Schema } = mongoose;

const task = new Schema({
  uuid: { type: String, unique: true },
  title: String,
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', task);
