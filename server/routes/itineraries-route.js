const express = require("express");

const itinerariesController = require("../controllers/itineraries-controller")

const router = express.Router();

router.get("/itineraries", itinerariesController.GetItineraries)
router.get("/itineraries/:itinerary_id", itinerariesController.ItineraryInfo)


module.exports = router;
