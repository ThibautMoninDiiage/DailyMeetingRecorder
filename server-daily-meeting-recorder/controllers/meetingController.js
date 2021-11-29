const jwt = require('jsonwebtoken');
const meetingService = require('../services/meetingService');

class MeetingController {

    constructor() {

    }
    
    async createMeeting(request, response) {
        // We call the register function in the server authentication service
        const meeting = await meetingService.createMeeting(request.body.name, request.body.startDate, request.body.endDate, request.body.idProject);
        response.status(200).send(meeting);
    }

    /**
     * Appel du service du serveur pour récupérer les meetings du projet
     * @param {number} idProject Id du projet
     */
    async getMeetingProject(request, response){
        const projectId = request.params.projectId
        const meetings = await meetingService.getMeetingProject(projectId)
        response.status(200).send(meetings);
    }
}

// Exporting the MeetingController
module.exports = new MeetingController();
