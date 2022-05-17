const Sequelize = require('sequelize');
const db = require("../config/database")

const Event_images = db.define('Event_images', {
    image_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    path: {
      type: Sequelize.STRING,
      allowNull: false
    },
    event_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Event_images',
    schema: 'Alit',
    timestamps: false
  });


  module.exports = Event_images;