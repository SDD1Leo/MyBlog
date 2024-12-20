const express = require("express");
const adminControllers = require("../controllers/adminControllers");
const router = express.Router();

router.route("/users").get(adminControllers.users);
router.route("/contacts").get(adminControllers.contacts);

module.exports = router;