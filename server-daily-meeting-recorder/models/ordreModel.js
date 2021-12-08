const { Sequelize, DataTypes, Model } = require('sequelize');

class OrdreModel extends Model {

    static async init(sequelizeInstance) {
        super.init({
            id : {
                type : DataTypes.INTEGER,
                primaryKey : true,
                allowNull : false,
                autoIncrement : true,
                unique : true
            },
            description : {
                type : DataTypes.STRING,
                allowNull : false
            },
            date : {
                type : DataTypes.DATEONLY,
                allowNull : false
            }
        },
        {
            // Table name in the database
            modelName : "ordreJourMeeting",
            sequelize : sequelizeInstance,
            freezeTableName : true
        })
        // Synchronize the class with the database
        super.sync()
    }

}
// Exporting the meeting model
module.exports = OrdreModel;