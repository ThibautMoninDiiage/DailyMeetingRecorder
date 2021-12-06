import axios from 'axios';

export default class MeetingService {
    async getMeeting(meetingId){
        return new Promise((resolve) => {
            axios.get('http://localhost:3000/meeting/'+ meetingId, {
                headers : {
                    Authorization :  'Bearer ' + sessionStorage.getItem('jwt')
                }
            }).then((response) => {
                resolve(response.data)
            })
        }) 
    }

    /**
     * Appel du serveur pour la création du meeting
     * @param {string} name nom du meeting
     * @param {Date} date date de la réunion
     */
    async createMeeting(name,date, projectId) {
        // We call the register function in the server authentication controller
        axios.post('http://localhost:3000/meeting/createMeeting', {
            name : name,
            date : date,
            idProject : projectId
        },
        {
            headers : {
                Authorization : 'Bearer ' + sessionStorage.getItem('jwt')
            }
        });
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

    async updateMeeting(name, date, meetingId){
        axios.patch('http://localhost:3000/meeting/' + meetingId,  
        {
            name : name,
            date : date
        },
        {
            headers : {
                Authorization :  'Bearer ' + sessionStorage.getItem('jwt')
            }
        })
    }

    async deleteMeeting(meetingId){
        axios.delete('http://localhost:3000/meeting/' + meetingId, {
            headers : {
                Authorization :  'Bearer ' + sessionStorage.getItem('jwt')
            }
        })
    }
}
