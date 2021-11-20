var express = require('express');
var router = express.Router();

const projectController = require('../controllers/projectController');

router.post('/createProject', projectController.createProject);
router.get('/getAllUserProjects', projectController.getAllUserProjects);
router.post('/addProjectToTeam', projectController.addProjectToTeam);

module.exports = router;
