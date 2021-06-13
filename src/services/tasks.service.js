const TaskModel = require('../models/task.model');

const createTask = async ({ title }) => {
  if (!await TaskModel.exists({ title })) {
    const task = new TaskModel({
      title,
    });
    await task.save();
    console.log('Finished creating task');
    return task;
  }
  return {};
};

module.exports = {
  createTask,
};
