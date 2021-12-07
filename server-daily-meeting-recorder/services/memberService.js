const UserModel = require('../models/userModel');
const { Sequelize } = require('sequelize');
const TeamModel = require('../models/teamModel');

// Connecting to the database, with username, with password
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host : process.env.DB_HOST,
    // Specifying the used dialect in the database
    dialect : 'mysql'
})

class memberService {
    async getAllMemberByProject(projectId) {
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

    async getMemberInTeam(idProject, idUser, token) {
        return await TeamModel.findOne(
        {
            where: {
                idProject: idProject,
                idUser: idUser
            }
        })
    }

    async addMemberToTeam(idProject, idUser, token) {
        return await TeamModel.create(
        {
            idProject: idProject,
            idUser: idUser
        })
    }

    async deleteMemberOnProject(idProject, idUser, token) {
        if(await this.getMemberInTeam(idProject, idUser, token) != null){
            await TeamModel.destroy(
                {
                    where: {
                        idProject: idProject,
                        idUser: idUser
                    }
                })
            return 204
        }else{
            return 404
        }
    }
}

module.exports = new memberService();
