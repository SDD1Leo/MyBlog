const express = require("express");
const adminControllers = require("../controllers/adminControllers");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/users").get(authMiddleware,adminControllers.users);
router.route("/users/delete/:id").delete(authMiddleware,adminControllers.deleteUserById);
router.route("/contacts").get(authMiddleware,adminControllers.contacts);
router.route("/myblog").post(authMiddleware,adminControllers.myblog);

module.exports = router;