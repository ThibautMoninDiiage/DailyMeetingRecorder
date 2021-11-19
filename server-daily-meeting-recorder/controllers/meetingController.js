const jwt = require('jsonwebtoken');
const meetingService = require('../services/meetingService');

class MeetingController {

    constructor() {

    }
    
    async createMeeting(request, response) {
        // We call the register function in the server authentication service
        const meeting = await meetingService.createMeeting(request.body.name, request.body.startDate, request.body.endDate);
        const payload = {
            sub : user.id,
            username : user.username,
            email : user.email
        }
        const token =  jwt.sign(payload, 'secret');
        response.status(200).send(token);
    }

    /**
     * Appel du service du serveur pour récupérer les meetings du projet
     * @param {number} idProject Id du projet
     */
    async getMeetingProject(request, response){
        const idProject = request.params.idProject
        const meetings = await meetingService.getMeetingProject(idProject)
        response.status(200).send(meetings);
    }
}

// Exporting the MeetingController
module.exports = new MeetingController();
