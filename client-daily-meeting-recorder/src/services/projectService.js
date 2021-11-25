import axios from 'axios';

export default class ProjectService {
    async createProject(userId, title, description){
        return new Promise((resolve) => {
            axios.post('http://localhost:3000/project/createProject', {
            userId : userId,
            title : title,
            description : description,
            status : 1
            }).then((response) => {
                resolve(response.data)
            })
        })
    }
    
    async addProjectToTeam(userId, projectId){
        await axios.post('http://localhost:3000/project/addProjectToTeam', {
            userId : userId,
            projectId : projectId
        })
    }

    async getAllUserProjects(userId) {
        const projects = await axios.get('http://localhost:3000/project/getAllUserProjects', {
            headers : {
                Authorization : userId
            }
        });
        return projects.data[0];
    }

    async getProjectMeetings(projectId) {
        const meetings = await axios.get('http://localhost:3000/project/getProjectMeetings', {
            headers : {
                Authorization : projectId
            }
        })
        return meetings.data[0];
    }

}
