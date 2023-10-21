const express = require("express");
const poDataController = require("../controllers/poDataController");
const router = express.Router();

router.get("/", poDataController.getPOData);

module.exports = router;