const Sequelize = require('sequelize');
const db = require('../config/database')
const Itinerary = db.define('Itinerary', {
    itinerary_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    duration: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Itinerary',
    schema: 'Alit',
    timestamps: false
  });

  module.exports = Itinerary;
