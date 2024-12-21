const express = require("express");
const adminControllers = require("../controllers/adminControllers");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/users").get(authMiddleware,adminControllers.users);
router.route("/contacts").get(authMiddleware,adminControllers.contacts);

module.exports = router;