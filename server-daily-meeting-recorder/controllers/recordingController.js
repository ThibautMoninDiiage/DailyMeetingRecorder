const recordingService = require('../services/recordingService');

class RecordingController {

    constructor(){

    }

    async saveRecording(request, response) {
        const data = request.body;
        console.log(data);
        
        const recording = await recordingService.saveRecording(data);

        response.status(200)
    }

    async getMeetingRecording(request, response) {
        const meetingId = 125
        const recording = await recordingService.getMeetingRecording(meetingId);
        // response.status(200).send(recording[0]);
    }
}

module.exports = new RecordingController();
