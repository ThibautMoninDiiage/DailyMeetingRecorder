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
        // this.sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        //     host : process.env.DB_HOST,
        //     // Specifying the used dialect in the database
        //     dialect : 'mysql'
        // })
        // Connecting to the database, with username, with password
        // this.sequelize = new Sequelize('DbDailyMeetingRecorder', 'root', 'Azerty@123', {
        //     host : 'localhost',
        //     // Specifying the used dialect in the database
        //     dialect : 'mysql'
        // })
        this.sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
            host : process.env.DB_HOST,
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

            ProjectModel.belongsToMany(UserModel, { through: TeamModel, foreignKey : 'idProject', sourceKey : 'id' })
            UserModel.belongsToMany(ProjectModel, { through: TeamModel, foreignKey : 'idUser' , sourceKey : 'id'})

            ProjectModel.belongsTo(StatusModel, {foreignKey : 'status' })
            StatusModel.hasMany(ProjectModel, {
                foreignKey: 'status'
            })
            ProjectModel.hasMany(MeetingModel, {
                foreignKey: 'idProject'
            })
            MeetingModel.belongsTo(ProjectModel, {foreignKey : 'idProject' })
        })
    }

}

// Exporting the Database class to use it in the app
module.exports = new DbConnection();
