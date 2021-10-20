const db = require("../models");
const Users = db.Users;
const Op = db.Sequelize.Op;


exports.getAllUsers = (req,res) =>{
    Users.findAll().then( result => {
        res.send(result);
    }).catch(err =>{
        res.status(500).send(err);
    });
};

exports.getUserByPk = (req,res) =>{
    Users.findByPk(req.params.id).then( result => {
        res.send(result);
    }).catch(err =>{
        res.status(500).send(err);
    });
};