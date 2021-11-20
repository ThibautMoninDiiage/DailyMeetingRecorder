const ProjectModel = require('../models/projectModel');
const { Sequelize } = require('sequelize');
const TeamModel = require('../models/teamModel');

class ProjectService {
    async createNewProject(data) {
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

        return await sequelize.query("SELECT title, description, status FROM Project INNER JOIN Team ON Project.ID = Team.idProject WHERE idUser = " + userId);
    }

    async addProjectToTeam(data) {
        console.log('UID' + data.idUser);
        return await TeamModel.create({
            idProject : data.idProject,
            idUser : data.idUser,
            name : ''
        });
    }

}

module.exports = new ProjectService();
