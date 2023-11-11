const express = require("express");
const { body } = require("express-validator");
const MiscController = require("./../controllers/Misc");
const formValidator = require("./../validations/formValidator");
const router = express.Router();

router.get("/", MiscController.getAllMisc);
router.get("/add-misc", MiscController.getAddMisc);
router.post(
  "/add-misc",formValidator,
  MiscController.postAddMisc
);
router.get("/edit-misc/:id", MiscController.getEditMisc);
router.post("/edit-misc/:id", MiscController.postEditMisc);
router.get("/delete-misc/:id", MiscController.getDeleteMisc);
module.exports = router;