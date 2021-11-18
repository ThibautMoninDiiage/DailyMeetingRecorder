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
            startDate : {
                type : DataTypes.DATE,
                allowNull : false
            },
            endDate : {
                type : DataTypes.DATE,
                allowNull : false
            },
            idProject : {
                type : DataTypes.INTEGER,
                allowNull : false,
                references : {
                    model : 'Project',
                    key : 'id'
                }
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
