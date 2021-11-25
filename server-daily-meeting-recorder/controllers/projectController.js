const projectService = require('../services/projectService');

class ProjectController {
    constructor(){

    }

    async createProject(request, response) {
        const data = request.body;
        
        const project = await projectService.createProject(data);

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

    async getProjectMeetings(request, response) {
        const projectId = request.headers.authorization;
        const meetings = await projectService.getProjectMeetings(projectId);
        response.status(200).send(meetings);
    }
     
}

module.exports = new ProjectController();
