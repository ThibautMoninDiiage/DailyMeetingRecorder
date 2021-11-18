const MeetingService = require('../services/meetingService');
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

    async getProjects(request, response) {
        const projects = await meetingService.getProjects();
        response.status(200).send(projects);
    }

}

// Exporting the MeetingController
module.exports = new MeetingController();
