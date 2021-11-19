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


    async getAllUserProjects() {
        return await ProjectModel.findAll();
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
