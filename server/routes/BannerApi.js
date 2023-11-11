const express = require("express");
const BannerApiController = require("./../controllers/BannerApi");
const router = express.Router();

router.get("/", BannerApiController.getAllBanners);
router.get("/:id", BannerApiController.getBannerById);

module.exports = router;
