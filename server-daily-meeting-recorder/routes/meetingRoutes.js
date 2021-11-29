const express = require('express');
const meetingController = require('../controllers/meetingController');
const router = express.Router();
var passport = require('passport');

router.post('/createMeeting', passport.authenticate('jwt', { session: false }), meetingController.createMeeting);
// router.post('/createMeeting', meetingController.createMeeting);
router.get('/getMeetingProject/:projectId', meetingController.getMeetingProject);

module.exports = router;
