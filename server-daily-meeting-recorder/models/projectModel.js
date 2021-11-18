const { Sequelize, DataTypes, Model } = require('sequelize');

class ProjectModel extends Model {

    static async init(sequelizeInstance) {
        super.init({
            id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true
            },
            title : {
                type : DataTypes.STRING,
                allowNull : false
            },
            description : {
                type : DataTypes.STRING,
                allowNull : false
            }, 
            status: {
                type : DataTypes.INTEGER,
                allowNull : false,
                defaultValue : 1,
                references : {
                    model : 'Status',
                    key : 'id'
                }
            }
        },
        {
            sequelize: sequelizeInstance, 
            modelName: 'Project',
            freezeTableName : true
        });
        super.sync();
    }

}

module.exports = ProjectModel;
