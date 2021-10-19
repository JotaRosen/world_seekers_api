const db = require("../models");
const Units = db.Units;
const Op = db.Sequelize.Op;

exports.getRecentlyListed = (req,res) => {
    Units.findAll({
        where: {
            on_sale: true
        }
    }).then( result => {
        res.send(result);
    }).catch(err =>{
        res.status(500).send(err);
    })
}