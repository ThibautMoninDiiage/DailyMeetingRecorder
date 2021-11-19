const projectService = require('../services/projectService');
const jwt = require('jsonwebtoken');

class ProjectController {
    constructor(){

    }

    async createNewProject(request, response) {
        const data = request.body;
        
        const project = await projectService.createNewProject(data);

        response.status(200).send(project);
    }

    async addProjectToTeam(request, response){
        const data = request.body;

        const project = await projectService.addProjectToTeam(data);

        response.status(200).send(project);
    }
     
}

module.exports = new ProjectController();