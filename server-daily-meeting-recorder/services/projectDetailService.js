const ProjectModel = require('../models/projectModel');
const TeamModel = require('../models/teamModel');
const { Sequelize } = require('sequelize');
const jwtdecode = require('jwt-decode');

class ProjectDetailService {

    async getAllStatus(token) {
        // Connecting to the database, with username, with password
        const sequelize = new Sequelize('DbDailyMeetingRecorder', 'root', 'Azerty@123', {
            host : 'localhost',
            // Specifying the used dialect in the database
            dialect : 'mysql'
        })

        return await sequelize.query("SELECT * FROM `Status`");
    }

    async getProjectById(projectId, token) {
        return await ProjectModel.findByPk(projectId)
    }

    async updateProject(projectId, projectTitle, projectDescription, projectStatus, token) {
        return await ProjectModel.update({
            title: projectTitle,
            description: projectDescription,
            status: projectStatus,
            where: {id: projectId}
        })
    }
  
}

module.exports = new ProjectDetailService();