// Importing the Sequelize package
const { Sequelize } = require('sequelize');
const MeetingModel = require('../models/meetingModel');
const ProjectModel = require('../models/projectModel');
const RemarkModel = require('../models/remarkModel');
const StatusModel = require('../models/statusModel');
const TeamModel = require('../models/teamModel');
const TimestampMeetingModel = require('../models/timestampMeetingModel');
const UserModel = require('../models/userModel');

class DbConnection {

    constructor() {
        // Connecting to the database, with username, with password
        this.sequelize = new Sequelize('DbDailyMeetingRecorder', 'DailyMeetingRecorder', 'root', {
            host : '10.4.0.112',
            // Specifying the used dialect in the database
            dialect : 'mysql'
        })
    }

    initialize() {
        this.sequelize.authenticate().then(async () => {
            console.log('Connected to DB');
            // Creating the user table in the database
            await UserModel.init(this.sequelize);
            await StatusModel.init(this.sequelize);
            await ProjectModel.init(this.sequelize);
            await TeamModel.init(this.sequelize);
            await MeetingModel.init(this.sequelize);
            await RemarkModel.init(this.sequelize);
            await TimestampMeetingModel.init(this.sequelize);
        })
    }

}

// Exporting the Database class to use it in the app
module.exports = new DbConnection();
