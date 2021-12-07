const express = require('express');
const recordingController = require('../controllers/recordingController');
const router = express.Router();
const multer = require('multer');
const fs = require('fs')
const path = require('path')
const app = path.dirname(__dirname)

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, 'medias/')
    },
    filename(req, file, callback) {
        callback(null, file.originalname)
    }
});

const upload = multer({ storage }).single('audio')

router.post('/saveRecording', recordingController.saveRecording)

router.get('/getMeetingRecording/:meetingId', (request, response) => {
    recordingController.getMeetingRecording(request.params.meetingId).then(link => {
        const media = link[0].mediaUrl
        response.status(200).sendFile(app + '/medias/' + media)
    })
})

router.post('/saveRecordingToServer', upload, (req, res) => {
    try {
        recordingController.saveRecording
        res.json({ success : true})
        res.status(200).send()
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;
