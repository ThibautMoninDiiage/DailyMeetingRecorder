const { Sequelize, DataTypes, Model } = require('sequelize');

class TeamModel extends Model {

    static async init(sequelizeInstance) {
        super.init({
            idProject : {
                type : DataTypes.INTEGER,
                primaryKey : true,
                allowNull : false,
                references : {
                    model : 'Projects',
                    key : 'id'
                }
            },
            idUser : {
                type : DataTypes.INTEGER,
                primaryKey : true,
                allowNull : false,
                references : {
                    model : 'Users',
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
            sequelize : sequelizeInstance
        })

        // Synchronize the class with the database
        super.sync()
    }
}

// Exporting the user model
module.exports = TeamModel;
