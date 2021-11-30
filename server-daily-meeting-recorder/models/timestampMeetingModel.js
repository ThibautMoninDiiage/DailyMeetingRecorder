const { Sequelize, DataTypes, Model } = require('sequelize');
const MeetingModel = require('./meetingModel');

class TimestampMeetingModel extends Model {

    static async init(sequelizeInstance) {
        super.init({
            id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true
            },
            description : {
                type : DataTypes.STRING,
                allowNull : false
            },
            timer : {
                type : DataTypes.DATE,
                allowNull : false
            },
            meetingId : {
                type : DataTypes.INTEGER,
                allowNull : false,
                references : {
                    model : 'Meeting',
                    key : 'id'
                }
            }
        },
        {
            sequelize : sequelizeInstance, 
            modelName : 'TimestampMeeting',
            freezeTableName : true
        });
        super.sync();
    }

}

module.exports = TimestampMeetingModel;
