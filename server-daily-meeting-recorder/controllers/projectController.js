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
        const userId = request.headers.authorization;
        const projects = await projectService.getAllUserProjects(userId);
        response.status(200).send(projects)
    }

    async addProjectToTeam(request, response){
        const data = request.body;

        const project = await projectService.addProjectToTeam(data);

        response.status(200).send(project);
    }
     
}

module.exports = new ProjectController();
