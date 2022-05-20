const express = require("express");

const itinerariesController = require("../controllers/itineraries-controller")

const router = express.Router();

router.get("/", itinerariesController.GetItineraries)
router.get("/:itinerary_id", itinerariesController.ItineraryInfo)


module.exports = router;
