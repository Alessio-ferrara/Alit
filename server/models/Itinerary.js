const Sequelize = require("sequelize");
const db = require("../config/database");
const PoiItinerary = require("./poi_itinerary");
const PointOfInterest = require("./point_of_interest");
const itinerary = db.define(
  "itinerary",
  {
    itinerary_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    tableName: "itinerary",
    schema: "Alit",
    timestamps: false,
    freezeTableName: true
  }
);

itinerary.getAllItineraries = async function () {
  try {
    const itineraries = await Itinerary.findAll();
    return itineraries;
  } catch (error) {
    throw error;
  }
};

itinerary.getInfo = async function (itinerary_id) {
  try {
    const itineraries = await itinerary.findOne({
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

itinerary.belongsToMany(PointOfInterest, {
  through: PoiItinerary,
  foreignKey: "itinerary_id",
});
PointOfInterest.belongsToMany(itinerary, {
  through: PoiItinerary,
  foreignKey: "poi_id",
});



module.exports = itinerary;
