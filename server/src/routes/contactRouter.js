const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController")

router.route("/").get(contactController.home);
router.route("/").post(contactController.message);

module.exports = router;