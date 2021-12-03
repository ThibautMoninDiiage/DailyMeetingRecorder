const UserModel = require('../models/userModel');
const { Sequelize } = require('sequelize');
const TeamModel = require('../models/teamModel');

// Connecting to the database, with username, with password
const sequelize = new Sequelize('DbDailyMeetingRecorder', 'DailyMeetingRecorder', 'root', {
    host : '10.4.0.112',
    // Specifying the used dialect in the database
    dialect : 'mysql'
})

class memberService {
    async getAllMemberByProject(projectId) {
        return await sequelize.query("SELECT id, username, email FROM `User` INNER JOIN Team on Team.idUser = User.id WHERE Team.idProject = " + projectId);
    }

}

module.exports = new memberService();
