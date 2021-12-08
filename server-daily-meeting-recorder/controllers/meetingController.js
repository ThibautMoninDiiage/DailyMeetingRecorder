const jwt = require('jsonwebtoken');
const meetingService = require('../services/meetingService');

class MeetingController {

    constructor() {

    }

    async getMeeting(request, response){
     const meeting = await meetingService.getMeeting(request.params.meetingId)   
     if (meeting != null) response.status(200).send(meeting)
     else response.status(404).send()
    }
    
    async createMeeting(request, response) {
        // We call the register function in the server authentication service
        const meeting = await meetingService.createMeeting(request.body.name, request.body.date, request.body.idProject);
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

    async updateMeeting(request, response){
        const meeting = await meetingService.updateMeeting(request.body.name, request.body.date, request.params.meetingId)
        if (meeting != null) response.status(200).send(meeting)
        else response.status(404).send();
    }

    async deleteMeeting(request, response){
        if(await meetingService.deleteMeeting(request.params.meetingId) == 204) response.status(204).send()
        else response.status(404).send()
    }

    async getOrdre(request, response){
        const meetingId = request.params.meetingId
        const token = request.headers.authorization;
        const meetings = await meetingService.getOrdre(meetingId, token)
        response.status(200).send(meetings);
    }
    
}

// Exporting the MeetingController
module.exports = new MeetingController();
