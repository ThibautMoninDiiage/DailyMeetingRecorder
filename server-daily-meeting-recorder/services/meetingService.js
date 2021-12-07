const MeetingModel = require('../models/meetingModel');
const TimestampModel = require('../models/timestampMeetingModel');
const RemarkModel = require('../models/remarkModel');
const ProjectModel = require('../models/projectModel');
const UserModel = require('../models/userModel');

class MeetingService {

    async getMeeting(meetingId, idUser){
        return await MeetingModel.findOne({
            attributes : ['id', 'name', 'date','idProject', 'mediaUrl'],
            include:[
                {
                    model : ProjectModel,
                    required : true,
                    attributes : [],
                    include : [{
                        model: UserModel,
                        required : true,
                        attributes : [],
                        where : {
                            id: idUser
                        }
                    }]
                }
            ],
            where : {
                id : meetingId
            },
        })
    }

    async createMeeting(name, date, projectId) {
        // We create a new user in the database
        const meeting = await MeetingModel.create({
            name: name,
            date : date,
            idProject : projectId,
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
    
    async updateMeeting(name, date, meetingId){
        if(this.getMeeting() != null){
            return await MeetingModel.update(
                {
                    name : name,
                    date : date
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
}

// Exporting the server authentication service
module.exports = new MeetingService();
