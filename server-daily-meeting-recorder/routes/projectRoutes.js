var express = require('express');
var router = express.Router();
var passport = require('passport');

const projectController = require('../controllers/projectController');

router.post('/createProject', passport.authenticate('jwt', { session: false }),projectController.createProject);
router.get('/getAllUserProjects', projectController.getAllUserProjects);
router.post('/addProjectToTeam', projectController.addProjectToTeam);
router.get('/getProjectMeetings', projectController.getProjectMeetings);

module.exports = router;
