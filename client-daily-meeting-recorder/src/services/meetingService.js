import axios from 'axios';

export default class MeetingService {
    
    /**
     * Appel du serveur pour la création du meeting
     * @param {string} name nom du meeting
     * @param {Date} startDate date du début de la réunion
     * @param {Date} endDate date de fin de la réunion
     */
    async createMeeting(name, startDate, endDate) {
        // We call the register function in the server authentication controller
        axios.post('http://localhost:3000/meeting/createMeeting', {
            name : name,
            startDate : startDate,
            endDate : endDate
        })
    }

    /**
     * Récupération des meetings du project
     * @param {number} idProject id du project
     * @returns Les meetings du projet
     */
    async getMeetingProject(idProject){
        return new Promise((resolve) => {
            axios.get('http://localhost:3000/meeting/getMeetingProject/'+ idProject).then( (response) => {
              resolve(response.data);
            })
          });
    }
}
