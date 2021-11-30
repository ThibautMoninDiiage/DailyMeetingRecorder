const express = require('express');
const recordingController = require('../controllers/recordingController');
const router = express.Router();

router.post('/saveRecording', recordingController.saveRecording);

module.exports = router;
