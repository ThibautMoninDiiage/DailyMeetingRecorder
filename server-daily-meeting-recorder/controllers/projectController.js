const projectService = require('../services/projectService');

class ProjectController {
    constructor(){

    }

    async createNewProject(request, response) {
        const data = request.body;
        
        const project = await projectService.createNewProject(data);

        response.status(200).send(project);
    }

    async getAllUserProjects(request, response) {
        const projects = await projectService.getAllUserProjects();
        response.status(200).send(projects)
    }
     
}

module.exports = new ProjectController();
