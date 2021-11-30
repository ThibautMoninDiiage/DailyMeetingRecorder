// const MeetingModel = require('../models/meetingModel');
// const RecordingModel = require('../models/recordModel');
const { Sequelize } = require('sequelize');

// Connecting to the database, with username, with password
const sequelize = new Sequelize('DbDailyMeetingRecorder', 'root', 'Azerty@123', {
    host : 'localhost',
    // Specifying the used dialect in the database
    dialect : 'mysql'
})

class RecordingService {

    async saveRecording(data) {
        // return await RecordingModel.create({
        //     duration : data.duration,
        //     url : data.url,
        //     idMeeting : data.meetingId
        // });
        // return await sequelize.query(`INSERT INTO Meeting (url, idMeeting, createdAt, updatedAt) VALUES ('${data.url}', '30', '2021-11-18 13:22:26', '2021-11-18 13:22:26')`)
    }

    async getMeetingRecording(data) {
        console.log(data);
        return await sequelize.query(`SELECT * FROM Meeting`)
    }

}

module.exports = new RecordingService();
