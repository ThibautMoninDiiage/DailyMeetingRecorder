const { Sequelize } = require('sequelize');
const MeetingModel = require('../models/meetingModel');
const ProjectModel = require('../models/projectModel');

// Connecting to the database, with username, with password
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host : process.env.DB_HOST,
    // Specifying the used dialect in the database
    dialect : 'mysql'
})

class RecordingService {

    async saveRecording(data) {
        return await MeetingModel.create({
            date : '2021-11-18 13:22:26',
            mediaUrl : data.url,
            idProject : 1,
            name : data.name
        });
    }

    async getMeetingRecording(meetingId) {
        // return await MeetingModel.findOne({
        //     where : {
        //         id : meetingId
        //     }
        // })
        return await sequelize.query('SELECT mediaUrl FROM Meeting WHERE Meeting.id = ' + meetingId)
    }

}

module.exports = new RecordingService();
