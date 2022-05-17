const express = require("express");

const eventController = require("../controllers/events-controller")


const router = express.Router();

router.get("/getInfo/:event_id", eventController.EventInfo)
router.get("/:type?", eventController.GetEvents)

module.exports = router;
