const ProjectModel = require('../models/projectModel');
const TeamModel = require('../models/teamModel');
const MeetingModel = require('../models/meetingModel');
const RemarkModel = require('../models/remarkModel');
const TimestampModel = require('../models/timestampMeetingModel');
const { Sequelize } = require('sequelize');
const jwtdecode = require('jwt-decode');

// Connecting to the database, with username, with password
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host : process.env.DB_HOST,
    // Specifying the used dialect in the database
    dialect : 'mysql'
})

class ProjectDetailService {

    async getAllStatus(token) {
        return await sequelize.query("SELECT * FROM `Status`");
    }

    async getProjectById(projectId, token) {
        return await ProjectModel.findByPk(projectId)
    }

    async getMeetingByProject(idProject, token){
        return await MeetingModel.findAll({
            where: {
                idProject: idProject
            }
        })
    }

    async updateProject(projectId, projectTitle, projectDescription, projectStatus, token) {
        return await ProjectModel.update({
            title: projectTitle,
            description: projectDescription,
            status: projectStatus
        },
        {
            where: {
                id: projectId
            }
        })
    }

    async deleteProject(projectId, token) {
        if(await this.getProjectById(projectId, token) != null){
            await TeamModel.destroy(
                {
                    where: {
                        idProject: projectId
                    }
                });

            const meetingTab = await this.getMeetingByProject(projectId) 
            if(meetingTab != null){
                meetingTab.forEach(meeting => {
                     RemarkModel.destroy({ 
                        where: {
                            idMeeting: meeting.id
                        }
                    });

                     TimestampModel.destroy({
                        where:{
                            meetingId: meeting.id
                        }
                    });

                     MeetingModel.destroy({
                        where:{
                            id: meeting.id
                        }
                    });
                    
                });
            }

            await ProjectModel.destroy({
                where:{
                    id: projectId
                }
            });

            return 204
        }else{
            return 404
        }
    }
  
}

module.exports = new ProjectDetailService();