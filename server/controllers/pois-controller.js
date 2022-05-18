const Point_of_interest = require("../models/point_of_interest")

const POIinfo = async (req, res, next) => {
  const { poi_id } = req.params;
  try {
    const poi_info = await Point_of_interest.getInfo(poi_id);
    res.status(200).json(poi_info);
  } catch (err) {
    throw err;
  }
};

const GetPOIs = async (req, res, next) => {
  try {
    const pois = await Point_of_interest.getPOIs();
    res.status(200).json(pois);
  } catch (err) {
    throw err;
  }
};

exports.POIinfo = POIinfo;
exports.GetPOIs = GetPOIs;
