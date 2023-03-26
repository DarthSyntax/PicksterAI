const express = require("express");
const router = express.Router();
const aiController = require("./../controllers/aiController");

router.route("/createimage").post(aiController.createImage);

module.exports = router;
