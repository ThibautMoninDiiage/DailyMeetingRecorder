const { Sequelize, DataTypes, Model } = require('sequelize');

class ReportModel extends Model {

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
            idMeeting : {
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
            modelName : 'Report',
            freezeTableName : true
        });
        super.sync();
    }

}

module.exports = ReportModel;
