const recordingService = require('../services/recordingService');

class RecordingController {

    constructor(){

    }

    async saveRecording(request, response) {
        const data = request.body;
        const recording = await recordingService.saveRecording(data);

        response.status(200)
    }

    async getMeetingRecording(meetingId) {
        const recording = await recordingService.getMeetingRecording(meetingId);
        return recording[0];
    }
}

module.exports = new RecordingController();
