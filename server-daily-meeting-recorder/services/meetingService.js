const MeetingModel = require('../models/meetingModel');
const ProjectModel = require('../models/projectModel');

class MeetingService {

    async createMeeting(name, startDate, endDate, projectId) {
        // We create a new user in the database
        const meeting = await MeetingModel.create({
            name: name,
            startDate : startDate,
            endDate : endDate,
            idProject : projectId,
            mediaUrl: ''
        })
        return meeting
    }

    /**
     * Récupération des meetings du projets à partir de la bdd
     * @param {number} idProject Id du projet
     * @returns Les meetings du projet
     */
    async getMeetingProject(projectId){
        return await MeetingModel.findAll({
            where : {
                idProject : projectId
            }
        })
    }
}

// Exporting the server authentication service
module.exports = new MeetingService();
