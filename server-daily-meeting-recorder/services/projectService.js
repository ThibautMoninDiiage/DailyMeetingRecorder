const ProjectModel = require('../models/projectModel');
const { Sequelize } = require('sequelize');
const TeamModel = require('../models/teamModel');
const MeetingModel = require('../models/meetingModel');
const jwtdecode = require('jwt-decode');

// Connecting to the database, with username, with password
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host : process.env.DB_HOST,
    // Specifying the used dialect in the database
    dialect : 'mysql'
})

class ProjectService {
    async createProject(data, token) {
        const userId = jwtdecode(token.substr(7)).sub;
        return await ProjectModel.create({
            userId: userId,
            title : data.title,
            description : data.description,
            status : data.status
        });
    }

    async getAllUserProjects(userId) {
        return await sequelize.query("SELECT Project.id, Status.name, title, description, status FROM Status INNER JOIN Project ON Status.id = Project.status INNER JOIN Team ON Project.ID = Team.idProject WHERE idUser = " + userId);
    }

    async addProjectToTeam(data, token) {
        const userId = jwtdecode(token.substr(7)).sub;
        return await TeamModel.create({
            idProject : data.projectId,
            idUser : userId
        });
    }

    async getProjectMeetings(projectId) {
        return await sequelize.query('SELECT * FROM Meeting INNER JOIN Project ON Meeting.idProject = Project.id WHERE Project.id = ' + projectId);
    }

}

module.exports = new ProjectService();
