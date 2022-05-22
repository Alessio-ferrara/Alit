const HttpError = require("../http-error");
const Itinerary = require("../models/").itinerary;

const ItineraryInfo = async (req, res, next) => {
  const { itinerary_id } = req.params;
  try {
    const itinerary_info = await Itinerary.getInfo(itinerary_id);
    res.status(200).json(itinerary_info);
  } catch (err) {
    return next(
      new HttpError(
        err,
        500
      )
    );
  }
};

const GetItineraries = async (req, res, next) => {
  try {
    let itineraries;
    itineraries = await Itinerary.getAllItineraries();
    res.status(200).json(itineraries);
  } catch (err) {
    return next(
      new HttpError(err, 500)
    );
  }
};

exports.ItineraryInfo = ItineraryInfo;
exports.GetItineraries = GetItineraries;
