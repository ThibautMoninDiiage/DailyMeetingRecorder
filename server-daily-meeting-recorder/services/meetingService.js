const MeetingModel = require('../models/meetingModel');
const ProjectModel = require('../models/projectModel');
const TeamModel = require('../models/teamModel');
const UserModel = require('../models/userModel');

class MeetingService {

    async createMeeting(name, startDate, endDate) {
        // We create a new user in the database
        const meeting = await MeetingModel.create({
            name: name,
            startDate : startDate,
            endDate : endDate
        })
        return meeting
    }

    async getProjects() {
        // return await ProjectModel.findAll({
        //         include: [{
        //             model : TeamModel
        //         },
        //         {
        //             model : UserModel,
        //             where : {
        //                 id : 1
        //             }
        //         }
        //         ]
        //     })

        return await ProjectModel.findAll()
    }
}

// Exporting the server authentication service
module.exports = new MeetingService();
