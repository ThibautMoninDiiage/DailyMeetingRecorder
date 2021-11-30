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
        const data = request.body

        const recordings = await recordingService.getMeetingRecording(data)
        console.log(recordings[0]);
        response.status(200).send(recordings[0])
    }
    
}

module.exports = new RecordingController();
