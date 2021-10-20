const express = require("express");
const router = express.Router();

const unitsController = require('../controllers/unitController')

router.get("/api/on_sale", unitsController.getRecentlyListed);
router.get("/api/units", unitsController.getAllUnits);
router.get("/api/units/:id", unitsController.getByPk);

module.exports = router;