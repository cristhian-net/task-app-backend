const express = require('express');

const router = express.Router();
const tasksRoutes = require('./tasks.routes');

router.get('/', (req, res) => {
  res.send('Hello from router');
});

router.use('/api/tasks', tasksRoutes);

module.exports = router;
