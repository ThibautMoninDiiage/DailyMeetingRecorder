const UserModel = require('../models/userModel');
const { Sequelize } = require('sequelize');
const TeamModel = require('../models/teamModel');

class memberService {
    async getAllMemberByProject(projectId) {
        // Connecting to the database, with username, with password
        const sequelize = new Sequelize('DbDailyMeetingRecorder', 'root', 'Azerty@123', {
            host : 'localhost',
            // Specifying the used dialect in the database
            dialect : 'mysql'
        })

        return await sequelize.query("SELECT id, username, email FROM `User` INNER JOIN Team on Team.idUser = User.id WHERE Team.idProject = " + projectId);
    }  

    async getMemberExist(emailMember, token) {
        return await UserModel.findOne(
        {
            where: {
                email: emailMember
            }
        })
    }

}


module.exports = new memberService();