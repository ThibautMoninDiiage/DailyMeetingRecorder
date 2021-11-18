var express = require('express');
var router = express.Router();

const projectController = require('../controllers/projectController');

router.post('/createNewProject', projectController.createNewProject);
router.get('/getAllUserProjects', projectController.getAllUserProjects);

module.exports = router;
