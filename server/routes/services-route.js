const express = require("express");

const servicesController = require("../controllers/services-controller")

const router = express.Router();

router.get("/", servicesController.GetServices)
router.get("/:type_id", servicesController.GetServicesByType)
router.get("/servicesList/main", servicesController.GetMainServices)


module.exports = router;
