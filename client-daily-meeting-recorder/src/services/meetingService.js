import axios from 'axios';

export default class MeetingService {
    
    /**
     * Appel du serveur pour la création du meeting
     * @param {string} name nom du meeting
     * @param {Date} startDate date du début de la réunion
     * @param {Date} endDate date de fin de la réunion
     */
    async createMeeting(name, startDate, endDate, projectId) {
        // We call the register function in the server authentication controller
        axios.post('http://localhost:3000/meeting/createMeeting', {
            name : name,
            startDate : startDate,
            endDate : endDate,
            idProject : projectId
        },
        {
            headers : {
                Authorization : 'Bearer ' + sessionStorage.getItem('jwt')
            }
        });
        // {
        //     name : name,
        //     startDate : startDate,
        //     endDate : endDate,
        //     idProject : projectId
        // }
    }

    /**
     * Récupération des meetings du project
     * @param {number} idProject id du project
     * @returns Les meetings du projet
     */
    async getMeetingProject(projectId){
        return new Promise((resolve) => {
            axios.get('http://localhost:3000/meeting/getMeetingProject/'+ projectId).then( (response) => {
              resolve(response.data);
            })
          });
    }
}
