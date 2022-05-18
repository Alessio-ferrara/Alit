const express = require("express");

const eventController = require("../controllers/events-controller")


const router = express.Router();

router.get("/event/:event_id", eventController.EventInfo)
router.get("/list/:type?", eventController.GetEvents)

module.exports = router;
