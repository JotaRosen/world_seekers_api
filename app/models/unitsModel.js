module.exports = (sequelize, Sequelize) => {
    const Units = sequelize.define("Units", {
        id:{
            type: Sequelize.DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        type:{
            type: Sequelize.DataTypes.INTEGER
        },
        element:{
            type: Sequelize.DataTypes.INTEGER
        },
        level:{
            type: Sequelize.DataTypes.INTEGER
        },
        price:{
            type: Sequelize.DataTypes.INTEGER
        },
        on_sale:{
            type: Sequelize.DataTypes.BOOLEAN
        },
        name:{
            type: Sequelize.DataTypes.INTEGER
        },
        listed_at:{
            type: Sequelize.DataTypes.DATE
        }
    }, 
    {
        timestamps: false,
        tableName: 'units'
    });
  
    return Units;
  };
  