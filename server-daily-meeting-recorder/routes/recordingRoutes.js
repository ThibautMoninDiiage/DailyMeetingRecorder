const express = require('express');
const recordingController = require('../controllers/recordingController');
const router = express.Router();

router.post('/saveRecording', recordingController.saveRecording);
router.get('/getMeetingRecording', recordingController.getMeetingRecording);

module.exports = router;
