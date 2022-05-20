const Sequelize = require("sequelize");
const db = require("../config/database");
const PoiItinerary = require("./poi_itinerary");
const PointOfInterest = require("./point_of_interest");
const Itinerary = db.define(
  "Itinerary",
  {
    itinerary_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    duration: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "Itinerary",
    schema: "Alit",
    timestamps: false,
  }
);

Itinerary.getAllItineraries = async function () {
  try {
    const itineraries = await Itinerary.findAll();
    return itineraries;
  } catch (error) {
    throw error;
  }
};

Itinerary.getInfo = async function (itinerary_id) {
  try {
    const itineraries = await Itinerary.findOne({
      include: [
        {
          model: PointOfInterest,
          attributes: ['name', 'poi_id', 'main_image']
        },
      ],
      where: {
        itinerary_id,
      },
    });
    return itineraries;
  } catch (error) {
    throw error;
  }
};

Itinerary.belongsToMany(PointOfInterest, {
  through: PoiItinerary,
  foreignKey: "itinerary_id",
});
PointOfInterest.belongsToMany(Itinerary, {
  through: PoiItinerary,
  foreignKey: "poi_id",
});

module.exports = Itinerary;
