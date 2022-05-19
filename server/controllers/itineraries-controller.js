const Itinerary = require("../models/Itinerary");

const ItineraryInfo = async (req, res, next) => {
    const { itinerary_id } = req.params;
    try {
        const itinerary_info = await Itinerary.getInfo(itinerary_id);
        res.status(200).json(itinerary_info);
    } catch (err) {
        throw err;
    }
};

const GetItineraries = async (req, res, next) => {
    try {
        let itineraries;
        itineraries = await Itinerary.getAllItineraries();
        res.status(200).json(itineraries);
    } catch (err) {
        throw err;
    }
};

exports.ItineraryInfo = ItineraryInfo;
exports.GetItineraries = GetItineraries;
