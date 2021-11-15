var express = require('express');
const { router } = require('../app');
var route = express.Router();

const projectController = require('../controllers/projectController');

router.post('/newProject', projectController.newProject);

module.exports = router