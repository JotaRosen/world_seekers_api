const db = require("../models");
const Units = db.Units;
const Op = db.Sequelize.Op;

exports.getRecentlyListed = (req,res) => {
    Units.findAll({
        where: {
            on_sale: true
        },
        order: [['listed_at', 'DESC']]
    }).then( result => {
        res.send(result);
    }).catch(err =>{
        res.status(500).send(err);
    })
};

exports.getAllUnits = (req,res) =>{
    Units.findAll().then( result => {
        res.send(result);
    }).catch(err =>{
        res.status(500).send(err);
    });
};

exports.getByPk = (req,res) =>{
    Units.findByPk(req.params.id).then( result => {
        res.send(result);
    }).catch(err =>{
        res.status(500).send(err);
    });
};