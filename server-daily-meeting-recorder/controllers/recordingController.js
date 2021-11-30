const recordingService = require('../services/recordingService');

class RecordingController {

    constructor(){

    }

    async saveRecording(request, response) {
        console.log(request);
        const data = request.body;
        
        const recording = await recordingService.saveRecording(data);

        response.status(200).send(recording);
    }
    
}

module.exports = new RecordingController();
