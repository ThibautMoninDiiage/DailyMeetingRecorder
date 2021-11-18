const { Sequelize, DataTypes, Model } = require('sequelize');

class StatusModel extends Model {

    static async init(sequelizeInstance) {
        super.init({
            id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true
            },
            name : {
                type : DataTypes.STRING,
                allowNull : false
            }
        },
        {
            sequelize : sequelizeInstance, 
            modelName : 'Status',
            freezeTableName : true
        });
        super.sync();
    }

}

module.exports = StatusModel;
