const projectDetailService = require('../services/projectDetailService');

class ProjectDetailController {
    constructor(){

    }

    async getAllStatus(request, response){
        const token = request.headers.authorization;

        const status = await projectDetailService.getAllStatus(token);

        response.status(200).send(status);
    }

    async getProjectById(request, response){
        const projectId = request.params.projectId;
        const token = request.headers.authorization;

        const project = await projectDetailService.getProjectById(projectId, token);

        response.status(200).send(project);
    }

    async updateProject(request, response){
        const projectId = request.body.projectId;
        const projectTitle = request.body.projectTitle;
        const projectDescription = request.body.projectDescription;
        const projectStatus = request.body.projectStatus;
        const token = request.headers.authorization;

        const project = await projectDetailService.updateProject(projectId, projectTitle, projectDescription, projectStatus, token);

        response.status(200).send(project);
    }
     
}

module.exports = new ProjectDetailController();