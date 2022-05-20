const express = require("express");

const poisController = require("../controllers/pois-controller")

const router = express.Router();

router.get("/list", poisController.GetPOIs)
router.get("/poi/:poi_id", poisController.POIinfo)


module.exports = router;
