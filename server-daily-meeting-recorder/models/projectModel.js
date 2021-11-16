const { Sequelize, DataTypes, Model } = require('sequelize');

class ProjectModel extends Model {

    static async init(sequelizeInstance) {
        super.init({
            id : {
                type : DataTypes.INTEGER,
                primaryKey : true,
                allowNull : false,
                autoIncrement : true,
                unique : true
            },
            title : {
                type : DataTypes.STRING,
                allowNull : false
            },
            description : {
                type : DataTypes.STRING,
                allowNull : false
            }
        },
        {
            // Table name in the database
            modelName : "Project",
            sequelize : sequelizeInstance
        })

        // Synchronize the class with the database
        super.sync()
    }
}

// Exporting the user model
module.exports = ProjectModel;
