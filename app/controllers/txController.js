const db = require("../models");
const Transactions = db.Transactions;
const Units = db.Units;
const Op = db.Sequelize.Op;

//banner info

exports.getBannerInfo = (req,res) => {
    const timeFilter = req.body.time_filter;
    const todayDate = new Date();
    todayDate.setDate(todayDate.getDate() - timeFilter);
    if(typeof(timeFilter) !== "number" ){
      console.log(typeof(timeFilter))
      res.status(400).send("Wrong Body. Filter must be a Number");
    }
    Transactions.findAll({
      where:{
        tx_occurr_at: {
          [Op.gte]: todayDate
        }
      },
      attributes: {
        include: [
          [db.Sequelize.fn('COUNT', db.Sequelize.col('tx_id')), 'totalSold'],
          [db.Sequelize.fn('SUM', db.Sequelize.col('tx_price')), 'volumeSold'],
          [db.Sequelize.fn('AVG', db.Sequelize.col('tx_price')), 'averagePrice'],
        ]
      }
    }).then( result => {
      let response = {
        totalSold: result[0].dataValues.totalSold,
        volumeSold: result[0].dataValues.volumeSold,
        avgPrice: result[0].dataValues.averagePrice
      }
      res.send(response);
    }).catch(err =>{
      res.status(500).send(err)
    })
  }

  exports.getRecentlySold = (req,res) => {
    Transactions.findAll({
      include: [{model: Units}]
    }).then(result => {
      let txArray = [];
      result.forEach(element => {
        txArray.push({
          price: element.tx_price,
          date: element.tx_occurr_at,
          unit: element.Unit
        });
      });
      res.send(txArray);
    }).catch(err =>{
      console.log(err);
      res.status(500).send(err)
    })
  }