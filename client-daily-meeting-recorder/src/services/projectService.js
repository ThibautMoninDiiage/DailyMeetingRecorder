import axios from 'axios';

export default class ProjectService {
    async createNewProject(idUser, title, description){
        return new Promise((resolve) => {
            axios.post('http://localhost:3000/project/createNewProject', {
            idUser: idUser,
            title: title,
            description: description,
            status: 1
            }).then((response) => {
                resolve(response.data)
            })

        })
       
    }
    
    async addProjectToTeam(idUser, idProject){
        console.log(idProject)
        await axios.post('http://localhost:3000/project/addProjectToTeam', {
            idUser: idUser,
            idProject: idProject
        })
    }

    async getAllUserProjects() {
        const projects = await axios.get('http://localhost:3000/project/getAllUserProjects');
        return projects.data;
    }

}
