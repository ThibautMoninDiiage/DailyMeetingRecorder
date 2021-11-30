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
            url : {
                type : DataTypes.STRING,
                allowNull : false
            },
            idMeeting : {
                type : DataTypes.INTEGER,
                allowNull : false,
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
