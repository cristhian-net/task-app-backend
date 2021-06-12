const express = require('express');

require('../config/db');

const router = express.Router();
const tasksRoutes = require('./tasks.routes');

router.get('/', (req, res) => {
  res.send('Hello from router');
});

router.use('/api/tasks', tasksRoutes);

module.exports = router;
