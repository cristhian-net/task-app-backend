const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../documentation/swagger.json');

const router = express.Router();
const tasksRoutes = require('./tasks.routes');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

router.use('/api/tasks', tasksRoutes);

module.exports = router;
