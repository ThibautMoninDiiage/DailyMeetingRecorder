const ProjectModel = require('../models/projectModel');
const TeamModel = require('../models/teamModel');

class ProjectService {
    async createNewProject(data) {
        return await ProjectModel.create({
            title: data.title,
            description: data.description
        });
    }

    async getAllUserProjects() {
        return await ProjectModel.findAll();
    }

}

module.exports = new ProjectService();
