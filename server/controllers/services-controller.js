const Service = require("../models/services");

const GetServices = async (req, res, next) => {
    try {
        let services;
        services = await Service.getAllServices();
        res.status(200).json(services);
    } catch (err) {
        throw err;
    }
};

const GetServicesByType = async (req, res, next) => {
    const { type } = req.params;
    try {
        let services;
        services = await Service.getServicesByType(type);
        res.status(200).json(services);
    } catch (err) {
        throw err;
    }
};

const GetMainServices = async (req, res, next) => {
    const { type } = req.params;
    try {
        let services;
        services = await Service.getMainServices();
        res.status(200).json(services);
    } catch (err) {
        throw err;
    }
};

exports.GetServices = GetServices;
exports.GetServicesByType = GetServicesByType;
exports.GetMainServices = GetMainServices;
