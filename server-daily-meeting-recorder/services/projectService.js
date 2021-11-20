const ProjectModel = require('../models/projectModel');
const { Sequelize } = require('sequelize');
const TeamModel = require('../models/teamModel');

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

        return await sequelize.query("SELECT name, title, description, status FROM Status INNER JOIN Project ON Status.id = Project.status INNER JOIN Team ON Project.ID = Team.idProject WHERE idUser = " + userId);
    }

    async addProjectToTeam(data) {
        return await TeamModel.create({
            idProject : data.projectId,
            idUser : data.userId,
            name : ''
        });
    }

}

module.exports = new ProjectService();
