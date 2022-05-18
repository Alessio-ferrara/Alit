const express = require("express");

const servicesController = require("../controllers/services-controller")

const router = express.Router();

router.get("/services", servicesController.GetServices)
router.get("/services/:type_id", servicesController.GetServicesByType)
router.get("/servicesList/main", servicesController.GetMainServices)


module.exports = router;
