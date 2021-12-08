const MeetingModel = require('../models/meetingModel');
const TimestampModel = require('../models/timestampMeetingModel');
const RemarkModel = require('../models/remarkModel');
const { Sequelize } = require('sequelize');

// Connecting to the database, with username, with password
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host : process.env.DB_HOST,
    // Specifying the used dialect in the database
    dialect : 'mysql'
})

class MeetingService {

    async getMeeting(meetingId){
        return await MeetingModel.findByPk(meetingId)
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

    async getOrdre(meetingId, token){
        return await sequelize.query("SELECT description FROM `ordreJourMeeting`INNER JOIN Meeting on Meeting.idOrdreMeeting = ordreJourMeeting.id WHERE Meeting.id = " + meetingId);
    }
}

// Exporting the server authentication service
module.exports = new MeetingService();
