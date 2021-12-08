const express = require('express');
const meetingController = require('../controllers/meetingController');
const router = express.Router();
var passport = require('passport');

router.post('/createMeeting', passport.authenticate('jwt', { session: false }), meetingController.createMeeting);
router.get('/getMeetingProject/:projectId', meetingController.getMeetingProject);
router.get('/:meetingId', passport.authenticate('jwt', { session: false }), meetingController.getMeeting);
router.patch('/:meetingId', passport.authenticate('jwt', { session: false }), meetingController.updateMeeting);
router.delete('/:meetingId', passport.authenticate('jwt', { session: false }), meetingController.deleteMeeting);
router.get('/lastMeeting/:projectId', passport.authenticate('jwt', { session: false }), meetingController.getLastMeeting);

module.exports = router;
