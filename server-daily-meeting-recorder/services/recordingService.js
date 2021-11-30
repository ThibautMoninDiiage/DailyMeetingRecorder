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
        return await sequelize.query(`INSERT INTO Record (duration, url, idMeeting, createdAt, updatedAt) VALUES ('${data.duration}', '${data.url}', '30', '2021-11-18 13:22:26', '2021-11-18 13:22:26')`)
    }
}

module.exports = new RecordingService();
