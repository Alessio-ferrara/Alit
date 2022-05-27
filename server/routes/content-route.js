const express = require("express");

const contentController = require("../controllers/content-controller")

const router = express.Router();

router.get("/:page", contentController.getPageContent)


module.exports = router;
