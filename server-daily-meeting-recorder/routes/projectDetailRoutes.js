var express = require('express');
var router = express.Router();
var passport = require('passport');

const projectDetailController = require('../controllers/projectDetailController');

router.get('/getAllSTatus', passport.authenticate('jwt', { session: false }),projectDetailController.getAllStatus);
router.get('/getProjectById/:projectId', passport.authenticate('jwt', { session: false }),projectDetailController.getProjectById);
router.post('/updateProject', passport.authenticate('jwt', { session: false }),projectDetailController.updateProject);
router.delete('/deleteProject', passport.authenticate('jwt', { session: false }),projectDetailController.deleteProject);

module.exports = router;
