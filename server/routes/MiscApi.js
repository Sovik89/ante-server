const express = require("express");
const MiscApiController = require("./../controllers/MiscApi");
const router = express.Router();

router.get("/", MiscApiController.getAllMiscs);
router.get("/:id", MiscApiController.getMiscById);

module.exports = router;