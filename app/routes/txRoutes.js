const express = require("express");
const router = express.Router();

const txController = require('../controllers/txController')

router.post("/api/transactions", txController.getBannerInfo);
router.get("/api/transactions", txController.getRecentlySold);

module.exports = router;