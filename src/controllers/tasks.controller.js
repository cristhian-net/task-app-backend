const tasksService = require('../services/tasks.service');

const getAll = async (req, res) => {
  console.log('GET api/tasks');
  const qty = req.query.n || 3;
  const tasks = await tasksService.getNewTasksAndFetchAll(qty);
  return res.json({ tasks });
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

const complete = async (req, res) => {
  try {
    // TODO: validate using Joi
    const id = req.body.uuid;
    await tasksService.completeTask({ id });
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: 'An unexpected error ocurred' });
  }
};

module.exports = {
  getAll,
  insert,
  complete,
};
