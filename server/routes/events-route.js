const express = require("express");

const eventController = require("../controllers/events-controller")


const router = express.Router();

router.get("/:event_id", eventController.EventInfo)


module.exports = router;
