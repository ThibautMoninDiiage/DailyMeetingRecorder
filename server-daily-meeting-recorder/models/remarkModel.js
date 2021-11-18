const { Sequelize, DataTypes, Model } = require('sequelize');

class RemarkModel extends Model {

    static async init(sequelizeInstance) {
        super.init({
            id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true
            },
            comment : {
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
            modelName : 'Remark',
            freezeTableName : true
        });
        super.sync();
    }

}

module.exports = RemarkModel;
