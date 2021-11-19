var express = require('express');
var router = express.Router();

const projectController = require('../controllers/projectController');

router.post('/createNewProject', projectController.createNewProject);

router.post('/addProjectToTeam', projectController.addProjectToTeam);

module.exports = router;