const Sequelize = require('sequelize');
const db = require('../config/database')
const poi_itinerary = db.define('poi_itinerary', {
    itinerary_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    poi_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'poi_itinerary',
    schema: 'Alit',
    timestamps: false
  });

  module.exports = poi_itinerary;
