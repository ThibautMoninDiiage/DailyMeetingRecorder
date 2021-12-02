const express = require('express');
const recordingController = require('../controllers/recordingController');
const router = express.Router();
const multer = require('multer')

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, 'medias/')
    },
    filename(req, file, callback) {
        callback(null, file.originalname)
    },
});

const upload = multer({ storage })

router.post('/saveRecording', recordingController.saveRecording)
router.get('/getMeetingRecording', recordingController.getMeetingRecording)
router.post('/saveRecordingToServer', upload.single('audio'), (req, res) => res.json({ success : true }))

module.exports = router;
