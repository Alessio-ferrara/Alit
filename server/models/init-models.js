var DataTypes = require("sequelize").DataTypes;
var _Event = require("./Event");
var _Event_images = require("./Event_images");
var _Itinerary = require("./Itinerary");
var _Op_hours = require("./Op_hours");
var _poi_images = require("./poi_images");
var _poi_itinerary = require("./poi_itinerary");
var _poi_types = require("./poi_types");
var _point_of_interest = require("./point_of_interest");
var _s_types = require("./s_types");
var _services = require("./services");

function initModels(sequelize) {
  var Event = _Event(sequelize, DataTypes);
  var Event_images = _Event_images(sequelize, DataTypes);
  var Itinerary = _Itinerary(sequelize, DataTypes);
  var Op_hours = _Op_hours(sequelize, DataTypes);
  var poi_images = _poi_images(sequelize, DataTypes);
  var poi_itinerary = _poi_itinerary(sequelize, DataTypes);
  var poi_types = _poi_types(sequelize, DataTypes);
  var point_of_interest = _point_of_interest(sequelize, DataTypes);
  var s_types = _s_types(sequelize, DataTypes);
  var services = _services(sequelize, DataTypes);


  return {
    Event,
    Event_images,
    Itinerary,
    Op_hours,
    poi_images,
    poi_itinerary,
    poi_types,
    point_of_interest,
    s_types,
    services,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
