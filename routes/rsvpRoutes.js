const express = require("express");
const controller = require("../controllers/rsvpController");
const { isGuest, isLoggedIn } = require("../middlewares/auth");

const router = express.Router();

router.post("/:id", controller.create);

module.exports = router;
