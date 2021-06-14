const { v4: uuidv4 } = require('uuid');

const TaskModel = require('../models/task.model');
const hipsumApi = require('./hipsum-api.service');

const createTask = async ({ title }) => {
  if (!await TaskModel.exists({ title })) {
    const task = new TaskModel({
      uuid: uuidv4(),
      title,
    });
    await task.save();
    return task;
  }
  return {};
};

const getNewTasksAndFetchAll = async (qty) => {
  const allDbTasks = await TaskModel.find({ completed: false }).exec();
  if (allDbTasks.length >= qty) {
    return allDbTasks.filter((_, index) => index < qty);
  }
  const requiredTasksQty = Number(qty) - allDbTasks.length;
  const newTasks = [];
  do {
    // This particular API does not support parallel executions,
    // it returns a cached response. So we need to retry
    // eslint-disable-next-line no-await-in-loop
    const task = await hipsumApi.getParagraph();
    if (!newTasks.some((t) => t === task) && !allDbTasks.some((t) => t.title === task)) {
      newTasks.push(task);
    }
  } while (newTasks.length < requiredTasksQty);
  const tasksDbPromises = [];
  for (let j = 0; j < newTasks.length; j += 1) {
    const element = newTasks[j];
    tasksDbPromises.push(createTask({ title: element }));
  }
  await Promise.all(tasksDbPromises);
  return TaskModel.find({ completed: false }).exec();
};

const completeTask = async ({ id }) => TaskModel.updateOne({ id }, { completed: true });

module.exports = {
  createTask,
  getNewTasksAndFetchAll,
  completeTask,
};
