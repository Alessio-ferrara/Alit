const HttpError = require("../http-error");
const Service = require("../models/service");

const GetServices = async (req, res, next) => {
  try {
    let services;
    services = await Service.getAllServices();
    res.status(200).json(services);
  } catch (err) {
    return next(
        new HttpError("Error while retrieving the services, try again later", 500)
    )
  }
};

const GetServicesByType = async (req, res, next) => {
  const { type_id } = req.params;
  try {
    let services;
    services = await Service.getServicesByType(type_id);
    res.status(200).json(services);
  } catch (err) {
    return next(
        new HttpError("Error while retrieving the services, try again later", 500)
    );
  }
};

const GetMainServices = async (req, res, next) => {
  try {
    let services;
    services = await Service.getMainServices();
    res.status(200).json(services);
  } catch (err) {
    return next(
        new HttpError("Error while retrieving the services, try again later", 500)
      )
  }
};

exports.GetServices = GetServices;
exports.GetServicesByType = GetServicesByType;
exports.GetMainServices = GetMainServices;
