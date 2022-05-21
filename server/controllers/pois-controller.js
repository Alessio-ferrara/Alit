const HttpError = require("../http-error");
const Point_of_interest = require("../models/").point_of_interest

const POIinfo = async (req, res, next) => {
  const { poi_id } = req.params;
  try {
    const poi_info = await Point_of_interest.getInfo(poi_id);
    res.status(200).json(poi_info);
  } catch (err) {
    return next(
      new HttpError("Error while retrieving the POI info, try again later", 500)
    )
  }
};

const GetPOIs = async (req, res, next) => {
  try {
    const pois = await Point_of_interest.getPOIs();
    res.status(200).json(pois);
  } catch (err) {
    return next(
      new HttpError("Error in retrieving the POIs, try again later", 500)
    )
  }
};

exports.POIinfo = POIinfo;
exports.GetPOIs = GetPOIs;
