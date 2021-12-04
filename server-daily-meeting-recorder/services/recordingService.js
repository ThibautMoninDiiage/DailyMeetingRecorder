const { Sequelize } = require('sequelize');
const MeetingModel = require('../models/meetingModel');
const ProjectModel = require('../models/projectModel');

// Connecting to the database, with username, with password
const sequelize = new Sequelize('DbDailyMeetingRecorder', 'root', 'Azerty@123', {
    host : 'localhost',
    // Specifying the used dialect in the database
    dialect : 'mysql'
})

class RecordingService {

    async saveRecording(data) {
        return await MeetingModel.create({
            startDate : '2021-11-18 13:22:26',
            endDate : '2021-11-18 13:22:26',
            mediaUrl : data.url,
            idProject : 3,
            name : data.name
        });
    }

    async getMeetingRecording(meetingId) {
        // return await MeetingModel.findOne({
        //     where : {
        //         id : meetingId
        //     }
        // })
        return await sequelize.query('SELECT * FROM Meeting WHERE Meeting.id = 2')
    }

}

module.exports = new RecordingService();
