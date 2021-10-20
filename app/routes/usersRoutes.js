const express = require("express");
const router = express.Router();

const usersController = require('../controllers/userController')

router.get("/api/users", usersController.getAllUsers);
router.get("/api/users/:id", usersController.getUserByPk);

module.exports = router;