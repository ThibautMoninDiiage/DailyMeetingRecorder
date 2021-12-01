const recordingService = require('../services/recordingService');

class RecordingController {

    constructor(){

    }

    async saveRecording(request, response) {
        const data = request.body;
        
        const recording = await recordingService.saveRecording(data);

        response.status(200).send(recording);
    }

    async getMeetingRecording(request, response) {
        const meetingId = 2;
        const recording = await recordingService.getMeetingRecording(meetingId)
        response.status(200).send(recording[0])
    }
    
}

module.exports = new RecordingController();
