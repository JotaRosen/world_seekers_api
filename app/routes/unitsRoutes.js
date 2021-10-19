const express = require("express");
const router = express.Router();

const unitsController = require('../controllers/unitController')

router.get("/api/on_sale", unitsController.getRecentlyListed);

module.exports = router;