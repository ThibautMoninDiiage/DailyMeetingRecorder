const { Sequelize, DataTypes, Model } = require('sequelize');

class TeamModel extends Model {

    static async init(sequelizeInstance) {
        super.init({
            idProject : {
                type : DataTypes.INTEGER,
                primaryKey : true,
                allowNull : false,
                references : {
                    model : 'Project',
                    key : 'id'
                }
            },
            idUser : {
                type : DataTypes.INTEGER,
                primaryKey : true,
                allowNull : false,
                references : {
                    model : 'User',
                    key : 'id'
                }
            },
            name : {
                type : DataTypes.STRING,
                allowNull : false
            }
        },
        {
            // Table name in the database
            modelName : "Team",
            sequelize : sequelizeInstance,
            freezeTableName : true
        })
        // Synchronize the class with the database
        super.sync()
    }

}
// Exporting the team model
module.exports = TeamModel;
