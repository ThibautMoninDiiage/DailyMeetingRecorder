const ProjectModel = require('../models/projectModel');
const { Sequelize } = require('sequelize');
const TeamModel = require('../models/teamModel');
const MeetingModel = require('../models/meetingModel');

class ProjectService {
    async createProject(data) {
        return await ProjectModel.create({
            title : data.title,
            description : data.description,
            status : data.status
        });
    }

    async getAllUserProjects(userId) {
        // Connecting to the database, with username, with password
        const sequelize = new Sequelize('DbDailyMeetingRecorder', 'root', 'Azerty@123', {
            host : 'localhost',
            // Specifying the used dialect in the database
            dialect : 'mysql'
        })

        return await sequelize.query("SELECT Project.id, Status.name, title, description, status FROM Status INNER JOIN Project ON Status.id = Project.status INNER JOIN Team ON Project.ID = Team.idProject WHERE idUser = " + userId);
    }

    async addProjectToTeam(data) {
        return await TeamModel.create({
            idProject : data.projectId,
            idUser : data.userId,
            name : ''
        });
    }

    async getProjectMeetings(projectId) {
        // Connecting to the database, with username, with password
        const sequelize = new Sequelize('DbDailyMeetingRecorder', 'root', 'Azerty@123', {
            host : 'localhost',
            // Specifying the used dialect in the database
            dialect : 'mysql'
        })
        
        return await sequelize.query('SELECT * FROM Meeting INNER JOIN Project ON Meeting.idProject = Project.id WHERE Project.id = ' + projectId);
    }

}

module.exports = new ProjectService();
