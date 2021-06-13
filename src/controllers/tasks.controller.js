const TaskModel = require('../models/task.model');
const tasksService = require('../services/tasks.service');

const getAll = async (_, res) => {
  console.log('GET api/tasks');
  return res.json({ tasks: await TaskModel.find().exec() });
};

const insert = async (req, res) => {
  try {
    console.log('POST api/tasks');
    const { title } = req.body;
    const task = await tasksService.createTask({ title });
    return res.status(201).json(task);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An unexpected error ocurred' });
  }
};

module.exports = {
  getAll,
  insert,
};
