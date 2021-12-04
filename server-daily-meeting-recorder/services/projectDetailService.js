const ProjectModel = require('../models/projectModel');
const TeamModel = require('../models/teamModel');
const { Sequelize } = require('sequelize');
const jwtdecode = require('jwt-decode');

// Connecting to the database, with username, with password
const sequelize = new Sequelize('DbDailyMeetingRecorder', 'root', 'Azerty@123', {
    host : 'localhost',
    // Specifying the used dialect in the database
    dialect : 'mysql'
})

class ProjectDetailService {

    async getAllStatus(token) {
        return await sequelize.query("SELECT * FROM `Status`");
    }

    async getProjectById(projectId, token) {
        return await ProjectModel.findByPk(projectId)
    }

    async updateProject(projectId, projectTitle, projectDescription, projectStatus, token) {
        console.log(projectId);
        return await ProjectModel.update({
            title: projectTitle,
            description: projectDescription,
            status: projectStatus
        },
        {
            where: {
                id: projectId
            }
        })
    }
  
}

module.exports = new ProjectDetailService();