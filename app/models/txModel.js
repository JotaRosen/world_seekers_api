module.exports = (sequelize, Sequelize) => {
    const Transactions = sequelize.define("Transactions", {
        tx_id:{
            type: Sequelize.DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        buyer_id:{
            type: Sequelize.DataTypes.INTEGER.UNSIGNED
        },
        seller_id:{
            type: Sequelize.DataTypes.INTEGER.UNSIGNED
        },
        unit_id:{
            type: Sequelize.DataTypes.INTEGER.UNSIGNED
        },
        tx_price:{
            type: Sequelize.DataTypes.INTEGER
        },
        tx_occurr_at:{
            type: Sequelize.DataTypes.DATE
        }
    }, 
    {
        timestamps: false,
        tableName: 'transactions'
    });

    Transactions.associate = ({Units}) =>{
        Transactions.hasOne(Units, {
            foreignKey: "id"
        });

    }
  
    return Transactions;
  };

  