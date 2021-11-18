const projectModel = require('../models/projectModel');

class ProjectService {
    async createNewProject(data) {
        return await projectModel.create({
            title: data.title,
            description: data.description
        });
    }

    getProjectByUser(id){
        return await projectModel.findAll({
            include: [{
                
            }]
        })

    }
}

module.exports = new ProjectService();