const express = require("express");

const contentController = require("../controllers/contact-controller")

const router = express.Router();

router.post("/", contentController.sendEmail)

module.exports = router;