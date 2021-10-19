module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("Users", {
        user_id:{
            type: Sequelize.DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.DataTypes.STRING
        },
        username: {
            type: Sequelize.DataTypes.STRING
        },
        password: {
            type: Sequelize.DataTypes.STRING
        },
        description: {
            type: Sequelize.DataTypes.STRING
        },
        profile_pic:{
            type: Sequelize.DataTypes.STRING
        }
    },
    {
        timestamps: false,
        tableName: 'users'
    });
  
    return Users;
  };
  