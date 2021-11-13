// Importing the Sequelize package
var { Sequelize } = require('sequelize');
const UserModel = require('../models/userModel');

class DbConnection {

    constructor() {
        // Connecting to the database, with username, with password
        this.sequelize = new Sequelize('DbDailyMeetingRecorder', 'root', 'Azerty@123', {
            host : 'localhost',
            // Specifying the used dialect in the database
            dialect : 'mysql'
        })
    }

    initialize() {
        this.sequelize.authenticate().then(async () => {
            console.log('Connected to DB');
            // Creating the user table in the database
            await UserModel.init(this.sequelize);
        })
    }

}

// Exporting the Database class to use it in the app
module.exports = new DbConnection();
