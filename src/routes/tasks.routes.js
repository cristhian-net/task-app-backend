const express = require('express');

const router = express.Router();
const tasksController = require('../controllers/tasks.controller');

// api/tasks
router.get('/', tasksController.getAll);
router.post('/', tasksController.insert);

module.exports = router;
