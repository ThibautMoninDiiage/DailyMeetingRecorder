const { sequelize } = require('../models/projectModel');
const ProjectModel = require('../models/projectModel');
const TeamModel = require('../models/teamModel');

class ProjectService {
    async createNewProject(data) {
        return await ProjectModel.create({
            title: data.title,
            description: data.description,
            status: data.status
        });
        
    }


async getAllUserProjects(userId) {
    return await sequelize.query("SELECT title, description, status FROM Project INNER JOIN Team ON Project.ID = Team.idProject WHERE idUser = " + userId);
    }

    async addProjectToTeam(data){
        return await TeamModel.create({
            idProject: data.idProject,
            idUser: data.idUser,
            name: ''

        });
    }

}

module.exports = new ProjectService();
