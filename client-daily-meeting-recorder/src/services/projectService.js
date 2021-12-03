import axios from 'axios';

export default class ProjectService {
    async createProject(title, description){
        return new Promise((resolve) => {
            axios.post('http://localhost:3000/project/createProject', {
            title : title,
            description : description,
            status : 1
            },
            {
                headers: {
                    Authorization : 'Bearer ' + sessionStorage.getItem('jwt')
                } 
            }).then((response) => {
                resolve(response.data)
            })

        })
    }
    
    async addProjectToTeam(projectId){
        await axios.post('http://localhost:3000/project/addProjectToTeam', {

            projectId : projectId
        },
        {
            headers: {
                Authorization : 'Bearer ' + sessionStorage.getItem('jwt')
            } 
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

    async getAllMemberByProject(projectId){
        const members = await axios.get('http://localhost:3000/member/getAllMemberByProject', {
            headers : {
                Authorization : projectId
            }
        })
        return members.data[0];
    }

    async getAllStatus(){
        const status = await axios.get('http://localhost:3000/projectDetail/getAllStatus', {
            headers: {
                Authorization : 'Bearer ' + sessionStorage.getItem('jwt')
            } 
        })
        return status.data[0];
    }

    async getProjectById(projectId){
        const project = await axios.get('http://localhost:3000/projectDetail/getProjectById/'+projectId,
        {
            headers: {
                Authorization : 'Bearer ' + sessionStorage.getItem('jwt')
            } 
        })
        return project.data;
    }

    async updateProject(projectId, projectTitle, projectDescription, projectStatus){
        console.log(projectId, projectTitle, projectDescription, projectStatus);

        // const project = await axios.post('http://localhost:3000/projectDetail/updateProject', {
        //     id: projectId,
        //     title: projectTitle,
        //     description : projectDescription,
        //     status: projectStatus
        //     },
        // {
        //     headers: {
        //         Authorization : 'Bearer ' + sessionStorage.getItem('jwt')
        //     } 
        // })
        // return project.data;
        
        return new Promise((resolve) => {
        
            axios.post('http://localhost:3000/projectDetail/updateProject', {
            id: projectId,
            title: projectTitle,
            description : projectDescription,
            status: projectStatus
            },
            {
                headers: {
                    Authorization : 'Bearer ' + sessionStorage.getItem('jwt')
                } 
            }).then((response) => {
                resolve(response.data)
            })

        })
    }

}
