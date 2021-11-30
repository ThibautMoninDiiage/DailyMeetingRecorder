const { Sequelize, DataTypes, Model } = require('sequelize');

class RecordModel extends Model {

    static async init(sequelizeInstance) {
        super.init({
            id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true
            },
            duration : {
                type : DataTypes.INTEGER,
                allowNull : false
            },
            url : {
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
            modelName : 'Record',
            freezeTableName : true
        });
        super.sync();
    }

}

module.exports = RecordModel;
