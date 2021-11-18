import axios from 'axios';

export default class ProjectService {
    
    async createNewProject(idUser, title, description){
        await axios.post('http://localhost:3000/project/createNewProject', {
            idUser: idUser,
            title: title,
            description: description,
            status: 1
       })
    }
}