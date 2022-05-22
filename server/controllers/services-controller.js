const HttpError = require("../http-error");
const S_type = require("../models").s_type;

const GetServices = async (req, res, next) => {
  try {
    let services;
    services = await S_type.getAllServices();
    res.status(200).json(services);
  } catch (err) {
    return next(
        new HttpError(err, 500)
    )
  }
};

const GetServicesByType = async (req, res, next) => {
  const { type_id } = req.params;
  try {
    let services;
    services = await S_type.getServicesByType(type_id);
    res.status(200).json(services);
  } catch (err) {
    return next(
        new HttpError(err, 500)
    );
  }
};

const GetMainServices = async (req, res, next) => {
  try {
    let services;
    services = await S_type.getMainServices();
    res.status(200).json(services);
  } catch (err) {
    return next(
        new HttpError(err, 500)
      )
  }
};

exports.GetServices = GetServices;
exports.GetServicesByType = GetServicesByType;
exports.GetMainServices = GetMainServices;
