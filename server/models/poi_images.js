const Sequelize = require('sequelize');
const db = require('../config/database')
const Poi_images = db.define('poi_images', {
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
    poi_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  }, {

    tableName: 'poi_images',
    schema: 'Alit',
    timestamps: false
  });

  module.exports = Poi_images;
