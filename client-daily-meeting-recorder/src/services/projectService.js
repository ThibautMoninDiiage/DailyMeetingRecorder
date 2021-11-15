import axios from 'axios';

export default class ProjectService {
    createNewProject(){
        axios.post('http://localhost:3000/project/newProject');
    }
}