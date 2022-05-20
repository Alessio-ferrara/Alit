const Sequelize = require('sequelize');
const db = require('../config/database')
const Poi_itinerary = db.define('poi_itinerary', {
    itinerary_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "itinerary",
        key: "itinerary_id"
      }
    },
    poi_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "point_of_interest",
        key: "poi_id"
      }
    }
  }, {
    tableName: 'poi_itinerary',
    schema: 'Alit',
    timestamps: false
  });

  module.exports = Poi_itinerary;
