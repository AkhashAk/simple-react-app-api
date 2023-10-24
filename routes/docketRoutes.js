const express = require("express");
const docketController = require("../controllers/docketController");
const router = express.Router();

router.get("/", docketController.getAllDockets);

router.post("/", docketController.createDocket);

router.post("/:id", docketController.updateDocket);

router.delete("/:id", docketController.deleteDocket);

module.exports = router;