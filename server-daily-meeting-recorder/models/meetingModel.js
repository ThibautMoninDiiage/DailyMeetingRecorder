const { Sequelize, DataTypes, Model } = require('sequelize');

class MeetingModel extends Model {

    static async init(sequelizeInstance) {
        super.init({
            id : {
                type : DataTypes.INTEGER,
                primaryKey : true,
                allowNull : false,
                autoIncrement : true,
                unique : true
            },
            name : {
                type : DataTypes.STRING,
                allowNull : false
            },
            date : {
                type : DataTypes.DATEONLY,
                allowNull : false
            },
            order : {
                type : DataTypes.STRING,
                allowNull : false
            },
            idProject : {
                type : DataTypes.INTEGER,
                allowNull : false,
                references : {
                    model : 'Project',
                    key : 'id'
                }
            },
            mediaUrl : {
                type : DataTypes.STRING,
                allowNull : false
            }
        },
        {
            // Table name in the database
            modelName : "Meeting",
            sequelize : sequelizeInstance,
            freezeTableName : true
        })
        // Synchronize the class with the database
        super.sync()
    }

}
// Exporting the meeting model
module.exports = MeetingModel;
