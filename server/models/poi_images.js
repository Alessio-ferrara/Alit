const Sequelize = require('sequelize');
const db = require('../config/database')
const poi_images = db.define('poi_images', {
    image_id: {
      type: Sequelize.INTEGER,
      allowNull: false
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
    sequelize,
    tableName: 'poi_images',
    schema: 'Alit',
    timestamps: false
  });

  module.exports = poi_images;
