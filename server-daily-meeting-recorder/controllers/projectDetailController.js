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
     
}

module.exports = new ProjectDetailController();