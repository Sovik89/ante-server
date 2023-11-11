const express = require("express");
const { body } = require("express-validator");
const BannerController = require("./../controllers/Banner");
const formValidator = require("./../validations/formValidator");
const router = express.Router();

router.get("/", BannerController.getAllBanner);
router.get("/add-banner", BannerController.getAddBanner);
router.post("/add-banner", formValidator, BannerController.postAddBanner);
router.get("/edit-banner/:id", BannerController.getEditBanner);
router.post("/edit-banner/:id", BannerController.postEditBanner);
router.get("/delete-banner/:id", BannerController.getDeleteBanner);

module.exports = router;
