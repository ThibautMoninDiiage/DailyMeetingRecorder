const MeetingModel = require('../models/meetingModel');
const TimestampModel = require('../models/timestampMeetingModel');
const RemarkModel = require('../models/remarkModel');

class MeetingService {

    async getMeeting(meetingId){
        return await MeetingModel.findByPk(meetingId)
    }

    async createMeeting(name, date, projectId) {
        // We create a new user in the database
        await this.getLastMeeting(projectId).then((response) => {
            const order = response
            console.log(order.order);
        })


        const meeting = await MeetingModel.create({
            name: name,
            date : date,
            idProject : projectId,
            order : '',
            mediaUrl: ''
        })
        return meeting
    }

    /**
     * Récupération des meetings du projets à partir de la bdd
     * @param {number} idProject Id du projet
     * @returns Les meetings du projet
     */
    async getMeetingProject(projectId){
        return await MeetingModel.findAll({
            where : {
                idProject : projectId
            }
        })
    }
    
    async updateMeeting(name, date, meetingId, order){
        if(this.getMeeting() != null){
            return await MeetingModel.update(
                {
                    name : name,
                    date : date, 
                    order : order
                },
                {
                    where : {
                        id : meetingId
                    }
                }
            )
        }
        return null
    }

    async deleteMeeting(meetingId){

        if(await this.getMeeting(meetingId) != null){
            await TimestampModel.destroy({
                where : {
                    meetingId : meetingId
                }
            })
    
            await RemarkModel.destroy({
                where : {
                    idMeeting : meetingId
                }
            })
    
            await MeetingModel.destroy({
                where : {
                    id : meetingId
                }
            })
            return 204
        }
        else return 404
        
    }

    async getLastMeeting(projectId){
        return await MeetingModel.findAll({
            order : [
                ['id', 'DESC']
            ],
            limit : 1,
            where : {
                idProject : projectId
            }
        })
    }
}

// Exporting the server authentication service
module.exports = new MeetingService();
