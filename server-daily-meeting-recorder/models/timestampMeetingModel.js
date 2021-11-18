const { Sequelize, DataTypes, Model } = require('sequelize');

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
            idRecord : {
                type : DataTypes.INTEGER,
                allowNull : false,
                references : {
                    model : 'Record',
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
