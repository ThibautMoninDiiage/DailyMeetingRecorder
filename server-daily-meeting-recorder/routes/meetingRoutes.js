const express = require('express');
const meetingController = require('../controllers/meetingController');
const router = express.Router();

router.post('/createMeeting', meetingController.createMeeting);
router.get('/getProjects', meetingController.getProjects);

module.exports = router;
